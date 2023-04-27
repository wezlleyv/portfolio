from flask import Flask
from flask import render_template

app = Flask(__name__)

URL_LIST = {
    'github': "https://github.com/wezlleyv",
    'linkedin': "https://www.linkedin.com/in/weslleyvictor/",
    'instagram': "https://www.instagram.com/wezlleyvictor/",
}

@app.route("/")
def home():
    return render_template("index.html", url=URL_LIST)

@app.route("/projects")
def projects():
    return render_template('projects.html', url=URL_LIST)
