from telegram import Bot, InlineKeyboardButton, InlineKeyboardMarkup
import requests

bot_token = "6139494128:AAFF81pUP18MzObbGas48aBnlQnxn_9C42U"
bot = Bot(token=bot_token)
def send_telegram_message(name: str, presence: str, drinks: list, car:list):
    message = f"Імя: {name}\nПрисутність: {presence}\nНапої: {', '.join(drinks)}\nДоїзд: {', '.join(car)}"
    bot_token = "6139494128:AAFF81pUP18MzObbGas48aBnlQnxn_9C42U"
    chat_id = "500842187"
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    data = {"chat_id": chat_id, "text": message}
    keyboard = InlineKeyboardMarkup([[InlineKeyboardButton("Отримати Excel файл", callback_data="get_file")],
                                 [InlineKeyboardButton("Отримати відсортований Excel файл", callback_data="sort_file")],
                                 [InlineKeyboardButton("Отримати підрахунок",callback_data="calculator_file")]])
    response = requests.post(url, json=data)
    bot.send_message(chat_id=chat_id, text=message, reply_markup=keyboard)
    return response.json()