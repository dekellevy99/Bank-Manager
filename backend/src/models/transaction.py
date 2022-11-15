from pydantic import BaseModel
from typing import Union


class Transaction(BaseModel):
    id: Union[int, None] = None
    vendor: Union[str, None] = None
    category: Union[str, None] = None
    amount: Union[int, None] = None