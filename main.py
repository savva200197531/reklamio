import requests
import json
from flask import Flask, render_template, url_for, request, Response, send_from_directory
from flask.views import MethodView
import os

# from dotenv import load_dotenv
# load_dotenv()

app = Flask(__name__)
CHAT_ID = os.environ.get('CHAT_ID')
TOKEN = os.environ.get('TOKEN')
TELEGRAM_URL = f'https://api.telegram.org/bot{TOKEN}/sendMessage'


def parse_text(text_message):
    pass


def send_message(chat_id, message):
    session = requests.Session()
    r = session.get(TELEGRAM_URL, params=dict(chat_id=chat_id, text=message, parse_mode='Markdown'))
    return r.json()


@app.route('/', methods=["POST", "GET"])
def index():
    if request.method == "POST":
        response = request.values
        if response:
            if response.get('phone'):
                message = f'''
Заявка с сайта - ЖК Краснообский
Телефон: {response.get('phone')}
            '''

                        '''
            send_message(CHAT_ID, message)
            return render_template('index.html')
    return render_template('index.html')


@app.route('/robots.txt')
@app.route('/sitemap.xml')
def static_from_root():
    return send_from_directory(app.static_folder, request.path[1:])


@app.route('/car', methods=["POST"])
def send_car():
    response = request.form
    print(response)
    message = f'''
Нужен самогруз {response.get("text")}
Номер клиента {response.get("phone")}
        '''
    send_message(CHAT_ID, message)
    return {'status': 'ok'}


class BotApi(MethodView):
    def get(self):
        return 'Hi BOT class'

    def post(self):
        response = request.get_json()
        print(response['message']['chat']['id'])
        text_message = response['message']['text']
        chat_id = response['message']['chat']['id']
        tmp = parse_text(text_message)
        if tmp:
            send_message(chat_id, tmp)
        # print(response)
        return 'hi telega class'


# app.add_url_rule('/token/', view_func=BotApi.as_view('bot'))
app.add_url_rule(f'/{TOKEN}/', view_func=BotApi.as_view('bot'))

if __name__ == '__main__':
    # app.run()
    app.run(port=5000, debug=True, use_reloader=True)
