import os
from typing import *
from flask import Flask, request, jsonify


def create_app(*, config: Optional[Mapping] = None, config_file: Optional[str] = None) -> Flask:
    app = Flask(__name__)
    if config:
        app.config.update(config)
    elif config_file:
        app.config.from_pyfile(config_file)

    @app.route('/hello')
    def hello():
        name = request.values.get('name', 'World')
        return jsonify(greet=f'Hello, {name}!')

    return app


if __name__ == '__main__':
    app = create_app(config_file='config.py')
    app.run(port=os.environ.get('SERVER_PORT', 4000))
