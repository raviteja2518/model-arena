import time
import httpx
from app.config import OPENROUTER_API_KEY

MODELS = {
    "GPT": "openai/gpt-3.5-turbo",
    "Claude": "anthropic/claude-3-haiku",
    "Open Model": "mistralai/mistral-7b-instruct"
}


async def call_model(client, model_name, prompt):
    # 🔐 If API key is missing, return mock response
    if not OPENROUTER_API_KEY:
        return {
            "response": f"[Mock response for {model_name}] API key not configured.",
            "tokens": 0,
            "time": 0.0
        }

    start = time.time()

    response = await client.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {OPENROUTER_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": model_name,
            "messages": [{"role": "user", "content": prompt}]
        }
    )

    elapsed = round(time.time() - start, 2)

    data = response.json()

    # ❌ OpenRouter error case
    if "choices" not in data:
        return {
            "response": f"[Error from {model_name}] {data.get('error', {}).get('message', 'Unknown error')}",
            "tokens": 0,
            "time": elapsed
        }

    # ✅ Success case
    return {
        "response": data["choices"][0]["message"]["content"],
        "tokens": data.get("usage", {}).get("total_tokens", 0),
        "time": elapsed
    }
