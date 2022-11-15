import pymysql
from .dal import DAL
from . import sql_queries_constants
from models.transaction import Transaction
from models.user import User
from typing import List

DEFAULT_HOST = "localhost"
DEFAULT_USER = "root"
DEFAULT_PWD = ""
DEFAULT_DB = "transactionsdb"

class SQL_Dal(DAL):
    def __init__(self, host: str = DEFAULT_HOST, user: str = DEFAULT_USER, pwd: str = DEFAULT_PWD, db: str = DEFAULT_DB):
        self.connection = pymysql.connect(
            host=host,
            user=user,
            password=pwd,
            db=db,
            charset="utf8",
            cursorclass=pymysql.cursors.DictCursor
        )
    

    def get_all_transactions_by_user_id(self, userId: int) -> List[Transaction]:
        with self.connection.cursor() as cursor:
            cursor.execute(sql_queries_constants.GET_ALL_TRANSACTIONS_BY_USER_ID, userId)
            transactions = [Transaction(**record) for record in cursor.fetchall()]
            return transactions
    

    def insert_transaction(self, userId: int, transaction: Transaction) -> int:
        with self.connection.cursor() as cursor:
            cursor.execute(sql_queries_constants.INSERT_TRANSACTION,
                    [transaction.vendor, transaction.category, transaction.amount, userId])
            self.connection.commit()
            self._update_balance_of_user(userId, transaction.amount)
            return cursor.lastrowid


    def delete_transaction(self, userId: int, transactionId: int) -> None:
        with self.connection.cursor() as cursor:
            cursor.execute(sql_queries_constants.GET_TRANSACTION_BY_ID, transactionId)
            transaction = Transaction(**cursor.fetchone())
            self._update_balance_of_user(userId, -1 * transaction.amount)
            cursor.execute(sql_queries_constants.DELETE_TRANSACTION_BY_ID, transactionId)
            self.connection.commit()


    def get_expenses_by_categories(self, userId: int):
        with self.connection.cursor() as cursor:
            cursor.execute(sql_queries_constants.GET_EXPENSES_BY_CATEGORIES, userId)
            return cursor.fetchall()
    

    def _update_balance_of_user(self, userId: int, amount: int) -> None:
        with self.connection.cursor() as cursor:
            cursor.execute(sql_queries_constants.GET_USER_BY_ID, userId)
            user = User(**cursor.fetchone())
            updated_balance = user.balance + amount
            cursor.execute(sql_queries_constants.UPDATE_BALANCE_OF_USER, [updated_balance, userId])
            self.connection.commit()


db_manager: DAL = SQL_Dal()