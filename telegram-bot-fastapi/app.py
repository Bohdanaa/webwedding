from fastapi import FastAPI, Form
from httpx import AsyncClient

app = FastAPI()

TELEGRAM_BOT_TOKEN = '6139494128:AAFF81pUP18MzObbGas48aBnlQnxn_9C42U'
CHAT_ID = '500842187'

async def send_to_telegram(message: str):
    async with AsyncClient() as client:
        url = f'https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage'
        payload = {
            'chat_id': CHAT_ID,
            'text': message
        }
        await client.post(url, data=payload)

@app.post("/api/form-endpoint")
async def form_endpoint(name: str = Form(...), presence: str = Form(...)):
    message = f"Нові дані з форми:\nІм'я: {name}\nEmail: {presence}"
    await send_to_telegram(message)
    return {"message": "Дані успішно оброблені та відправлені до бота"}
