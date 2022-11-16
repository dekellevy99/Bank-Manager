from fastapi import APIRouter, Response, Request, status, HTTPException
from db.sql_dal import db_manager
from models.user import User

router = APIRouter()

@router.get('/users/{user_id}')
def get_transactions(user_id: str):
    user: User = db_manager.get_user_by_id(int(user_id))
    return user
