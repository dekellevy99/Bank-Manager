from abc import ABC, abstractmethod

class Dal(ABC):
    @abstractmethod
    def get_all_transactions(self):
        pass
    
    @abstractmethod
    def insert_transaction(self):
        pass

    @abstractmethod
    def delete_transaction(self):
        pass
