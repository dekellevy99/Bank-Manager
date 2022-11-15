import pymysql
from .dal import Dal
from . import sql_queries_constants
from ..models.transaction import Transaction
from typing import List

DEFAULT_HOST = "localhost"
DEFAULT_USER = "root"
DEFAULT_PWD = ""
DEFAULT_DB = "transactionsdb"

class SQL_Dal(Dal):
    def __init__(self, host: str = DEFAULT_HOST, user: str = DEFAULT_USER, pwd: str = DEFAULT_PWD, db: str = DEFAULT_DB):
        self.connection = pymysql.connect(
            host=host,
            user=user,
            password=pwd,
            db=db,
            charset="utf8",
            cursorclass=pymysql.cursors.DictCursor
        )
    
    def get_all_transactions(self) -> List[Transaction]:
        with self.connection.cursor() as cursor:
            cursor.execute(sql_queries_constants.GET_ALL_TRANSACTIONS)
            transactions = [Transaction(**record) for record in cursor.fetchall()]
            return transactions
    
    def insert_transaction(self, transaction: Transaction) -> int:
        with self.connection.cursor() as cursor:
            vendor = transaction['vendor']
            category = transaction['category']
            amount = transaction['amount']
            cursor.execute(sql_queries_constants.INSERT_TRANSACTION, [vendor, category, amount])
            self.connection.commit()
            return cursor.lastrowid

    def delete_transaction(self, transactionId: int) -> None:
        with self.connection.cursor() as cursor:
            cursor.execute(sql_queries_constants.DELETE_TRANSACTION_BY_ID, transactionId)
            self.connection.commit()
    