from typing import Union

from fastapi import FastAPI

app = FastAPI(
    title="KT CN Studio Sample API",
    description="CN Studio Example API (Python)",
    version="1.0.0"
)

@app.get("/api")
async def get_api_hello_world():
    return "Hello World!"


@app.get("/api/v1/simple")
async def get_api_simple():
    dummyList = []
    
    for i in range(10):
        dummyList.append({ "num": i + 1, "title": "test-" + str(i), "content": "contents-" + str(i)})
    
    return dummyList


@app.get("/version")
async def get_version():
    return "===== version 1.0"