from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.transactions import transactions_routers
from routers.users import users_routers

import uvicorn

app = FastAPI()
app.include_router(transactions_routers.router)
app.include_router(users_routers.router)

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return "server is running"


if __name__ == "__main__":
    uvicorn.run("server:app", host="localhost", port=8000, reload=True)