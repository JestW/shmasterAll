import axios from 'axios'
import store from '../store'
// import server from './server'
// const serviceList = ''
const ajax = axios.create({
  timeout: 10000,
  header: {
    'Content-Type': 'application/json'
  },
  // `transformRequest`选项允许我们在请求发送到服务器之前对请求的数据做出一些改动
  // 该选项只适用于以下请求方式：`put/post/patch`
  // 数组里面的最后一个函数必须返回一个字符串、-一个`ArrayBuffer`或者`Stream`
  transformRequest: [],
  // transformResponse: [upperToLowerCamelCase],
  // `validateStatus`定义了是否根据http相应状态码，来resolve或者reject promise
  // 如果`validateStatus`返回true(或者设置为`null`或者`undefined`),那么promise的状态将会是resolved,否则其状态就是rejected
  validateStatus: function (status) {
    return status >= 200 && status < 300 // default
  }
})

ajax.defaults.headers.common['Authorization'] = 'hD+d3pojZbjwwV6smigxAltYBU+FZh9i5jEwNsErhDcn6oYvVnhRSAQ233EwUxBiLak3NNIfMiflvCZPDg+nE/cvjG7xe7TbilyjgTJGK5tc2o8/zpRPH/3lcZogHha6PqgJlqjOm7nXAbrkI4cY+/uEXAtxbr0OQyueoWdjO3C0WX0u5lrBdw=='
// 拦截请求
// ajax.interceptors.request.use(function (config) {
//   serializeRequest(config) // 修改请求头和请求参数的方式进行参数序列化
//   config.headers['Authorization'] = 'hD+d3pojZbjwwV6smigxAltYBU+FZh9i5jEwNsErhDcn6oYvVnhRSAQ233EwUxBiLak3NNIfMiflvCZPDg+nE/cvjG7xe7TbilyjgTJGK5tc2o8/zpRPH/3lcZogHha6PqgJlqjOm7nXAbrkI4cY+/uEXAtxbr0OQyueoWdjO3C0WX0u5lrBdw=='
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

// 添加一个响应拦截器
ajax.interceptors.response.use(function (res) {
  // 在这里对返回的数据进行处理
  return res
}, function (e) {
  // Do something with response error
  return Promise.reject(e)
})
const GET_SERVICE_URL = `http://api.shengtex.com/Service/GetService`
// const getService = async function () {
//   let url = GET_SERVICE_URL
//   const data = {
//     code: 1001,
//     version: '1.0.0',
//     r: Math.random()
//   }
//   ajax.get(url, {
//     params: data
//   }).then((res) => {
//     debugger
//     if (res) {
//       let serviceList = res.data.data
//       console.log(serviceList)
//       return serviceList
//     } else {
//       throw Object({message: '接口错误'})
//     }
//   })
// }
const getService = async function () {
  let res
  try {
    let url
    url = GET_SERVICE_URL
    // debugger
    url += '?code=' + store.state.corpCode
    url += '&version=1.0.0'
    url += '&r=' + Math.random()
    debugger
    res = await axios.get(url)
  } catch (e) {
    throw Object({message: '网络错误'})
  }
  // debugger
  if (res) {
    let content = res.data
    if (content.isSucceed && content.data) {
      let serviceList = content.data
      return serviceList
    } else {
      throw Object({message: content.message})
    }
  } else {
    throw Object({message: '接口错误'})
  }
}

const proxy = {
  async get (serviceName, ...rest) {
    try {
      const serviceUrl = await getServiceUrlByName(serviceName)
      return await ajax.get(serviceUrl, ...rest)
    } catch (e) {
      throw e
    }
  },
  async post (serviceName, ...rest) {
    debugger
    const serviceUrl = await getServiceUrlByName(serviceName)
    // async function doPost (count = 0) {
    try {
      return await ajax.post(serviceUrl, ...rest)
    } catch (e) {
      throw e
    }
    // }
    // return await doPost()
  }
}
// export default
export default {
  proxy,
  getService: getService
}

const getServiceUrlByName = async function (serviceName) {
  // debugger
  if (/\//.test(serviceName)) {
    return serviceName
  }
  // let serviceList = ''
  // 有服务列表缓存并且有此服务
  // debugger
  // if (serviceList.length && findUrl(serviceName, serviceList)) {
  //   return findUrl(serviceName, serviceList)
  // } else {
  try {
    // 缓存里找不到服务地址则请求服务器
    var serviceList = await getService(true)
  } catch (e) {
    throw e
  }
  let serviceUrl = findUrl(serviceName, serviceList)
  if (serviceUrl) {
    return serviceUrl
  } else {
    throw Object({message: '找不到服务'})
  }
}
function findUrl (name, serviceList) {
  // debugger
  console.log(serviceList)
  let obj = serviceList.find(function (item) {
    return item.name === name
  })
  return obj ? obj.url : ''
}
// export default {
//   // getService: getService,
//   getServiceUrlByName: getServiceUrlByName
// }
