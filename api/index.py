from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse,FileResponse,JSONResponse
from fastapi.templating import Jinja2Templates
from telegram import Bot
import requests
from fastapi.middleware.cors import CORSMiddleware
import httpx
import logging
import os
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

app = FastAPI()
netlify_project_url = "https://effervescent-froyo-c010f1.netlify.app"  # Замініть це на URL вашого проекту на Netlify

# Токен бота Телеграм
bot_token = "6139494128:AAFF81pUP18MzObbGas48aBnlQnxn_9C42U"
bot = Bot(token=bot_token)

@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(netlify_project_url)
            response.raise_for_status()
            html_content = response.text
        return HTMLResponse(content=html_content, status_code=response.status_code)
    except httpx.HTTPError as e:
        logger.error(f"HTTP Error: {e}")
        return HTMLResponse(content=f"HTTP Error: {e}", status_code=500)

@app.post("/submit")
async def submit(
    name: str = Form(...),
    presence: str = Form(...),
    drinks: list = Form(...),
    car: list = Form(...)
):
    message = f"Імя: {name}\nПрисутність: {presence}\nНапої: {', '.join(drinks)}\nДоїзд: {', '.join(car)}"

    chat_id = "500842187"
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    data = {"chat_id": chat_id, "text": message}

    # Відправка повідомлення на Telegram канал
    response = requests.post(url, json=data)
    if response.ok:
        return JSONResponse(content={"message": "Дані успішно відправлені на Telegram"})
    else:
        return JSONResponse(content={"error": "Помилка при відправці повідомлення"}, status_code=500)
