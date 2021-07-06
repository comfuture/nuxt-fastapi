import os
import sys
import pytest

project_path = os.path.realpath(os.path.join(os.path.dirname(__file__), '..'))
sys.path.append(project_path)

from fastapi.testclient import TestClient
from server import app

@pytest.fixture
def fastapi_app():
    yield app

@pytest.fixture
def client(fastapi_app):
    yield TestClient(fastapi_app)
