from fastapi import APIRouter
from app.schemas import VoteSchema

router = APIRouter()

@router.post("/vote")
def vote(vote: VoteSchema):
    return {"status": "vote recorded"}
