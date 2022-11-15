from fastapi import FastAPI
from routers.transactions import transactions_routers
import uvicorn

app = FastAPI()
app.include_router(transactions_routers.router)

@app.get("/")
def root():
    return "server is running"


if __name__ == "__main__":
    uvicorn.run("server:app", host="localhost", port=8000, reload=True)