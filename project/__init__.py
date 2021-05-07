import os

from flask import Flask


def create_app(config=None):
    app = Flask(__name__)
    app.config.from_object('project.init')
    if 'FLASK_CONF' in os.environ:
        app.config.from_envvar('FLASK_CONF')
    if config is None:
        if isinstance(config, dict):
            app.config.update(config)
        elif config.endswith('.py'):
            app.config.from_pyfile(config)
    return app
