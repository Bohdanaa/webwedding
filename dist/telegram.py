from fastapi import FastAPI, Form, HTTPException
from telegram import Bot
from telegram.utils.request import Request

API_KEY = "6139494128:AAFF81pUP18MzObbGas48aBnlQnxn_9C42U"  # Замініть на свій токен бота
CHAT_ID = "500842187"  # Замініть на ID вашого телеграм-чату

app = FastAPI()
bot = Bot(token=API_KEY, request=Request(con_pool_size=8))

def send_to_telegram_channel(chat_id, message):
    bot.send_message(chat_id=chat_id, text=message)

@app.post('/submit')
def webhook(name: str = Form(...), presence: str = Form(...), drinks: str = Form(...), car: str = Form(...)):
    # Форматуємо повідомлення, яке будемо відправляти в чат
    message = f"Ім'я: {name}\nПрисутність: {presence}\nНапої: {drinks}\nДоїзд: {car}"

    send_to_telegram_channel(CHAT_ID, message)
    return {'status': 'success'}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
