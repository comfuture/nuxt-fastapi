import os
import sys
import pytest

project_path = os.path.realpath(os.path.join(os.path.dirname(__file__), '..'))
sys.path.append(project_path)

from server import create_app

@pytest.fixture
def flask_app():
    config = {
        'DEBUG': True
    }
    app = create_app(config=config)
    yield app

@pytest.fixture
def client(flask_app):
    client = flask_app.test_client()
    yield client
