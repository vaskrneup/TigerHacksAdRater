import os

from flask import Flask


class ServerConfig:
    template_dir = os.path.abspath('frontend/pages')

    app = Flask(__name__, template_folder=template_dir)


server_config = ServerConfig()
