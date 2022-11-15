from pydantic import BaseModel
from typing import Union


class Transaction(BaseModel):
    id: Union[int, None]
    vendor: str
    category: str
    amount: int