import pytest


def test_hello_api(client):
    # invoke without query
    rv = client.get('/hello')
    assert rv.status_code == 200
    data = rv.json()
    assert data.get('greet') == 'Hello, World!'

    # invoke with query `name`
    rv = client.get('/hello?name=comfuture')
    assert rv.status_code == 200
    data = rv.json()
    assert data.get('greet') == 'Hello, comfuture!'
