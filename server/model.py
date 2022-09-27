from pydantic import BaseModel

class HelloResponse(BaseModel):
    name: str
    message: str
