import os
from fastapi import FastAPI

app = FastAPI()


@app.get('/hello')
def hello(name: str = 'World'):
    return {'greet': f'Hello, {name}!'}


if __name__ == '__main__':
    import uvicorn
    uvicorn.run('server:app', port=os.environ.get('SERVER_PORT', 4000), log_level='info')
