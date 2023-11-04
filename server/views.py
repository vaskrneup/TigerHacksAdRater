from flask import render_template
from config import server_config

app = server_config.app


@app.route("/")
def home():
    return render_template("home.html")
