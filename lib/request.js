const defaultBaseUrl = 'https://api.bitorange.cn/api/client/'

const createRequestPromise = ({ url, method, baseUrl = defaultBaseUrl, ...rest }) => new Promise((resolve, reject) => {
  wx.request({
    url: baseUrl + url,
    method: method,
    success(res) {
      if (method !== 'HEAD') {
        const body = res.data;
        if (body.code === 2000) {
          resolve(body.data);
        } else {
          reject(body);
        }
      } else {
        resolve(res);
      }
    },
    fail(error) {
      reject(error);
    },
    ...rest
  })
})

export default {
  get: (url, options) => createRequestPromise({ url, method: 'GET', ...options }),
  post: (url, data, options) => createRequestPromise({ url, method: 'POST', data: data, ...options }),
  put: (url, data, options) => createRequestPromise({ url, method: 'PUT', data: data, ...options }),
  delete: (url, data, options) => createRequestPromise({ url, method: 'DELETE', data: data, ...options }),
  head: (url, options) => createRequestPromise({ url, method: 'HEAD', ...options }),
  option: (url, options) => createRequestPromise({ url, method: 'OPTION', ...options }),
  connect: (url, options) => createRequestPromise({ url, method: 'CONNECT', ...options }),
  trace: (url, options) => createRequestPromise({ url, method: 'TRACE', ...options }),
}