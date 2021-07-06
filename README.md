# nuxt-fastapi

Webapp template that made with [Nuxt](https://nuxtjs.org/) and [FastAPI](https://fastapi.tiangolo.com/) backend. Out of box, battery included.

```python
from fastapi import FastAPI

app = FastAPI()

@app.route('/hello')
def hello(name: str = 'World'):
    return {'greet': f'Hello, {name}!'}
```

```vue
<template>
  <div>{{ greet }}</div>
</template>
<script>
export default {
  asyncData({$api, route:{fullPath}}) {
    return $api(fullPath)
  }
}
</script>
```

## Getting started

[Getting stared](https://github.com/comfuture/nuxt-fastapi/blob/main/content/getting-started.md)

## Pre requirements

- Python 3.x (with virtualenv)


## Development

```bash
# install npm dependencies
$ npm install

# install python dependencies
$ pip install -r requirements.txt

# serve with hot reload at localhost:3000
$ npm run dev
```

API Server that made with flask will be launched automacally.


----

Copyright &copy; 2021 comfuture under MIT License