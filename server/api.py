from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/text')
def text():
    return json.dumps({'data': 'This message is from backend!'})

if __name__ == '__main__':
    app.run(port='8080', debug=True)