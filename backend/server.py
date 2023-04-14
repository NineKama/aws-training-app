from flask import Flask, jsonify
from flask_cors import CORS

import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/problems")
def list_exercise():
    with open('data.json', 'r') as f:
        data = json.load(f)

    return jsonify(data)

# @app.route("/exe1"):
    
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)