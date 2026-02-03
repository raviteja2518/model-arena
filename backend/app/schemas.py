from pydantic import BaseModel

class PromptSchema(BaseModel):
    prompt: str

class VoteSchema(BaseModel):
    model: str
    rating: int
