from pydantic import BaseModel
from typing import Union


class User(BaseModel):
    id: Union[int, None]
    name: str
    balance: int