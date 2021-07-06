import axios from 'axios'

export default (ctx, inject) => {
  const api = function(url, options = {}, method = 'get', data = null) {
    options['headers'] = Object.assign({}, options['headers'], {Accept: 'application/json'})

    // XXX Only axios GET request alleviates some discomfort of using options.params instead of options.query among options.
    if (Object.prototype.hasOwnProperty.call(options, 'query')) {
      options['params'] = {...options['query']}
      delete options['query']
    }

    if (process.server) {
      // - [x] set baseURL to localhost:PORT
      // - [x] paste cookies and the other headers except `accept` to server-side axios request
      const headers = {...ctx.req.headers}
      delete headers['accept']
      headers['Accept'] = 'application/json'
      // eslint-disable-next-line
      const port = <%= options.backendPort %>
      const http = axios.create({
        baseURL: `http://localhost:${port}`,
        headers
      })
      return http(url, options, method, data).then(r => r.data)
    }
    return axios(url, options, method, data).then(r => r.data)
  }

  /**
   * @typedef BodylessMethod
   * @type {<T=any>(url: string, config?: Options) => Promise<Response<T>>}
   */

  /**
   * @typedef BodyMethod
   * @type {<T=any>(url: string, body?: any, config?: Options) => Promise<Response<T>>}
   */

  /** @public @type {BodylessMethod} */
  api.get = (url, options = {}) => api(url, options, 'get')

  /** @public @type {BodylessMethod} */
  api.delete = (url, options = {}) => api(url, options, 'delete')

  /** @public @type {BodylessMethod} */
  api.head = (url, options = {}) => api(url, options, 'head')

  /** @public @type {BodylessMethod} */
  api.options = (url, options = {}) => api(url, options, 'options')

  /** @public @type {BodyMethod} */
  api.post = (url, data, options = {}) => api(url, options, 'post', data)

  /** @public @type {BodyMethod} */
  api.put = (url, data, options = {}) => api(url, options, 'put', data)

  /** @public @type {BodyMethod} */
  api.patch = (url, data, options = {}) => api(url, options, 'patch', data)

  /** @public */
  api.all = Promise.all.bind(Promise)

  inject('api', api)
}
