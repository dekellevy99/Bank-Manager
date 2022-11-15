from fastapi import APIRouter, Response, Request, status, HTTPException
from db.sql_dal import db_manager
from models.transaction import Transaction
import pydantic

router = APIRouter()

@router.get('/transactions')
def get_transactions(user_id: int = 1):
    transactions = db_manager.get_all_transactions_by_user_id(user_id)
    return transactions


@router.post('/transactions')
async def add_transaction(request: Request, response: Response, user_id = 1):
    try:
        req = await request.json()
        transaction = Transaction(**req)
        transaction_id = db_manager.insert_transaction(user_id, transaction)
        transaction.id = transaction_id
        response.status_code = status.HTTP_201_CREATED
        return transaction
    except pydantic.error_wrappers.ValidationError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="missing keys in request body"
        )


@router.delete('/transactions/{transaction_id}')
def delete_transactions(transaction_id: str, response: Response, user_id = 1):
    db_manager.delete_transaction(int(transaction_id))
    response.status_code = status.HTTP_204_NO_CONTENT