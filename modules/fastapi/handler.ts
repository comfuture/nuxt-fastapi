export default defineEventHandler(async (event) => {
  const url = 'http://<%= options.backendHost %>:<%= options.backendPort %>' +
              event.req.url.replace(/^\/_fastapi/, '')
  if (['POST', 'PUT', 'PATCH'].includes(event.req.method)) {
    // use body
    const body = await useBody(event)
  }
  console.log('calling _fastapi handler', event)
  return fetch(url, {
    method: event.req.method
  }).then((res) => res.json())
    .catch((reason) => '')
})
