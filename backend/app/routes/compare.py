import asyncio
import httpx
from fastapi import APIRouter, Request
from app.schemas import PromptSchema
from app.services.openrouter import MODELS, call_model
from app.limiter import limiter

router = APIRouter()

@router.post("/compare")
@limiter.limit("5/day")
async def compare(request: Request, payload: PromptSchema):
    async with httpx.AsyncClient() as client:
        tasks = [
            call_model(client, model, payload.prompt)
            for model in MODELS.values()
        ]
        results = await asyncio.gather(*tasks)

    return dict(zip(MODELS.keys(), results))
