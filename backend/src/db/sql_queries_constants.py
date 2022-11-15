GET_ALL_TRANSACTIONS_BY_USER_ID = """SELECT * FROM Transaction WHERE userId = %s"""

INSERT_TRANSACTION = """INSERT INTO Transaction VALUES(null, %s, %s, %s, %s)"""

DELETE_TRANSACTION_BY_ID = """DELETE FROM Transaction WHERE id = %s"""

GET_EXPENSES_BY_CATEGORIES = """SELECT category, SUM(amount) as total
                                FROM Transaction 
                                WHERE userId = %s 
                                GROUP BY category"""

GET_USER_BY_ID = """SELECT * FROM User WHERE id = %s """

UPDATE_BALANCE_OF_USER = """UPDATE User
                            SET balance = %s
                            WHERE id = %s
                         """

GET_TRANSACTION_BY_ID = """SELECT * FROM Transaction WHERE id = %s"""