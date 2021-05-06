from flask import Flask


def create_app():
    from . import utils, routes
    app = Flask(__name__)
    utils.init_app(app)
    routes.init_app(app)
    return app
