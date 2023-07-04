import telegram
import flask

telegram_version = telegram.__version__
flask_version = flask.__version__

print("Версія python-telegram-bot:", telegram_version)
print("Версія Flask:", flask_version)
