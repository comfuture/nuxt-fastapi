---
title: Getting started
description: Write your server code with flask
---

## API Proxy module

Presentation (via Nuxt) and Logic (via Flask) are automacally branched by [content negotiation][Content Negotiation]

> /server.py
```python
@app.route('/hello')
def hello():
    name = request.values.get('name', 'World')
    return jsonify(greet=f'Hello, {name}!')
```

Of course, server-side code can be implemented by [Blueprint] when your application became larger.

> /pages/hello.vue
```vue
<template>
  <div>{{ greet }}</div>
</template>
<script>
export default {
  asyncData({app, route:{fullPath}}) {
    return app.$api(fullPath)
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
- [Blueprint]
- [nuxt]


[Content Negotiation]: https://developer.mozilla.org/ko/docs/Web/HTTP/Content_negotiation
[Blueprint]: https://flask.palletsprojects.com/en/1.1.x/tutorial/views/
[nuxt]: https://nuxtjs.org