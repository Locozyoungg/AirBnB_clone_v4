from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/v1/*": {"origins": "*"}})

@app.route('/')
def index():
    return "Welcome to the API!"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)

