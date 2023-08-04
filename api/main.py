from fastapi import FastAPI, Request
from fastapi.responses import  FileResponse
from telegram import Bot, Update
from telegram.ext import Updater, CallbackQueryHandler, CommandHandler,CallbackContext
from telegrammy import send_telegram_message
from excel import create_excel_file, create_sorted_excel_file, create_calculator_excel_file

app = FastAPI()
bot_token = "6139494128:AAFF81pUP18MzObbGas48aBnlQnxn_9C42U"
bot = Bot(token=bot_token)
updater = Updater(token=bot_token, use_context=True)
dispatcher = updater.dispatcher

data=[]
def start(update: Update, context: CallbackContext):
    chat_id = update.effective_chat.id
    response_message = "Привіт! Я бот для отримання даних."
    context.bot.send_message(chat_id=chat_id, text=response_message)
    

@app.post("/submit")
async def submit(request: Request):
    form = await request.form()
    name = form.get("name")
    presence = form.get("presence")
    drinks = form.getlist("drinks")
    car = form.getlist("car")
    # await asyncio.sleep(1) 
    data.append({'name': name, 'presence': presence, 'drinks': drinks, 'car': car})
    create_excel_file(data)
    create_sorted_excel_file(data)
    create_calculator_excel_file(data)
    send_telegram_message(name, presence, drinks,car)
    return {"request": request, "message": "Повідомлення успішно відправлено"}

@app.get("/get-file")
def get_file():
    return FileResponse("data.xlsx", filename="data.xlsx", media_type="application/octet-stream")

@app.get("/get-sorted-file")
def get_sorted_file():
    return FileResponse("sorted_data.xlsx", filename="sorted_data.xlsx", media_type="application/octet-stream")

@app.get("/get-calculator-file")
def get_calculator_file():
    return FileResponse("calculator_data.xlsx", filename="calculator_data.xlsx", media_type="application/octet-stream")

def handle_button_click(update: Update, context: CallbackContext):
    chat_id = update.callback_query.message.chat_id
    bot.send_document(chat_id=chat_id, document=open('data.xlsx', 'rb'))

def handle_sorted_button_click(update: Update, context: CallbackContext):
    chat_id = update.callback_query.message.chat_id
    bot.send_document(chat_id=chat_id, document=open('sorted_data.xlsx', 'rb'))

def handle_calculator_button_click(update: Update, context: CallbackContext):
    chat_id = update.callback_query.message.chat_id
    bot.send_document(chat_id=chat_id, document=open('calculator_data.xlsx', 'rb'))

start_handler = CommandHandler('start', start)
dispatcher.add_handler(start_handler)
updater.start_polling()
dispatcher.add_handler(CallbackQueryHandler(handle_button_click, pattern='get_file'))
dispatcher.add_handler(CallbackQueryHandler(handle_sorted_button_click, pattern='sort_file'))
dispatcher.add_handler(CallbackQueryHandler(handle_calculator_button_click,pattern='calculator_file'))
# if __name__ == "__main__":
#     port = int(os.environ.get("PORT", 8000))
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=port)
   
   
