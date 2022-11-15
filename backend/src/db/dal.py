from abc import ABC, abstractmethod

class DAL(ABC):
    @abstractmethod
    def get_all_transactions_by_user_id(self):
        pass
    
    @abstractmethod
    def insert_transaction(self):
        pass

    @abstractmethod
    def delete_transaction(self):
        pass

    @abstractmethod
    def get_expenses_by_categories(self):
        pass