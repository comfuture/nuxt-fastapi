---
title: Getting started
description: Write your server code with flask
---

## API Proxy module

Presentation (via Nuxt) and Logic (via FastAPI) are automacally branched by [content negotiation][Content Negotiation]

> /server.py
```python
from fastapi import FastAPI

app = FastAPI()

@app.get('/hello')
def hello(name: str = 'World'):
  return {'greet': f'Hello, {name}'}
```

Of course, server-side code can be implemented by [APIRouter] when your application became larger.

> /pages/hello.vue
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

Defaults to all requests that accept first to json will proxied to backend.
If you have any other rule to want to be processed by api, define a function `apiProxy.proxyRule` at nuxt config.

```javascript
apiProxy: {
  proxyRule(pathname, req) {
    return req.method !== 'GET' || pathname.endsWith('.do')
  }
}
```

## api plugin

It provides a unified SSR / CSR interface that integrated in the nuxt context.

When page opens on browser at the first, `asyncData()` or `fetch()` method will be called on server-side.
So that, `ctx.$api()` call that defined within these methods will make a request from nuxt to flask.
The `$api()` plugin copies almost all headers that comes from user's request and forward it to Flask, so that stateful informations of individual client request will maintained.

After that, in remain navigations through vue-router, `$api()` acts just like a normal axios function.


### Find out more

- [Content Negotiation]
- [APIRouter]
- [nuxt]


[Content Negotiation]: https://developer.mozilla.org/ko/docs/Web/HTTP/Content_negotiation
[APIRouter]: https://fastapi.tiangolo.com/ko/tutorial/bigger-applications/
[nuxt]: https://nuxtjs.org
