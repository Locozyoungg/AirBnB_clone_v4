from flask import Flask, render_template

app = Flask(__name__)

@app.route('/3-hbnb/')
def hbnb():
    return render_template('3-hbnb.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

