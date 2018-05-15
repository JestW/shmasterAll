import axios from 'axios'
const ajax = axios.create({
  timeout: 10000,
  header: {
    'Content-Type': 'application/json'
  },
  transformRequest: [],
  transformResponse: [upperToLowerCamelCase],
  validateStatus: function (status) {
    return status >= 200 && status < 300 // default
  }
})
// 添加一个响应拦截器
ajax.interceptors.response.use(function (res) {
  // 在这里对返回的数据进行处理
  return res
}, function (err) {
  // Do something with response error
  return Promise.reject (error)
})
