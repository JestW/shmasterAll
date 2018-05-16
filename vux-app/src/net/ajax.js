import axios from 'axios'
import router from '@/router'
import storage from '@/storage'
import store from '@/store'

var serviceList = []
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

// 拦截请求
ajax.interceptors.request.use(function (config) {
  serializeRequest(config) // 修改请求头和请求参数的方式进行参数序列化
  config.headers['Authorization'] = 'hD+d3pojZbjwwV6smigxAltYBU+FZh9i5jEwNsErhDcn6oYvVnhRSAQ233EwUxBiLak3NNIfMiflvCZPDg+nE/cvjG7xe7TbilyjgTJGK5tc2o8/zpRPH/3lcZogHha6PqgJlqjOm7nXAbrkI4cY+/uEXAtxbr0OQyueoWdjO3C0WX0u5lrBdw=='
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加一个响应拦截器
ajax.interceptors.response.use(function (res) {
  // 在这里对返回的数据进行处理
  return res
}, function (err) {
  // Do something with response error
  return Promise.reject (error)
})

// const proxy = {
//   async get (serviceName, ...rest) {
//     try {
//       const serviceUrl = await getServiceUrlByName(serviceName)
//       return await ajax.get(serviceUrl, ...rest)
//     } catch (e) {
//       throw e
//     }
//   },
//   /**
//    * 包装axios的post方法
//    * @param serviceName 服务名
//    * @param rest
//    * @returns {*}
//    */
//   async post (serviceName, ...rest) {
//     const serviceUrl = await Service.getServiceUrlByName(serviceName)
//     async function doPost (count = 0) {
//       try {
//         return await ajax.post(serviceUrl, ...rest)
//       } catch (e) {
//         if (count >= 2) {
//           throw e
//         } else {
//           return await doPost(count + 1)
//         }
//       }
//     }
//     return await doPost()
//   }
// }
// export default proxy

/**
 * 序列化请求参数
 * @param config
 */
// function serializeRequest (config) {
//   let request = config.data
//   let arr = config.url.split('/')
//   let api = arr[arr.length - 1]
//
//   let useJson = JSON_TYPE_SERVICE_LIST.indexOf(api) > -1
//   Object.assign(config, {
//     data: useJson ? JSON.stringify(request) : qs.stringify(Object.assign({}, request, { CorpID: storage.get('CORP_ID') }), {arrayFormat: 'repeat'}),
//     headers: {
//       'Content-Type': useJson ? 'application/json' : 'application/x-www-form-urlencoded'
//     }
//   })
// }

const getService = async function () {
  let url
  url = `http://api.shengtex.com/Service/GetService`
  url += '?code=' + 1000
  url += '&version=1.0.0'
  url += '&r=' + Math.random()
  axios.get(url)
    .then(function (response) {
      console.log(response)
      serviceList = response.data.data
      debugger
      return serviceList
    })
    .catch(function (err) {
      console.log(err)
    })
}
const getServiceUrlByName = async function (serviceName) {
  // if (/\//.test(serviceName)) {
  //   return serviceName
  // }
  // let serviceList = store.state.serviceList
  // 有服务列表缓存并且有此服务
  // if (serviceList.length && findUrl(serviceName, serviceList)) {
  //   return findUrl(serviceName, serviceList)
  // } else {
  //   try {
  //     // 缓存里找不到服务地址则请求服务器
  serviceList = await getService(true)
  //   } catch (e) {
  //     throw e
  //   }
  let serviceUrl = findUrl(serviceName, serviceList)
  if (serviceUrl) {
    return serviceUrl
  } else {
    throw Object({message: '找不到服务'})
  }
  // }
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
    const serviceUrl = await getServiceUrlByName(serviceName)
    async function doPost (count = 0) {
      try {
        return await ajax.post(serviceUrl, ...rest)
      } catch (e) {
        if (count >= 2) {
          throw e
        } else {
          return await doPost(count + 1)
        }
      }
    }
    return await doPost()
  }
}
export default proxy
/**
 * 从服务列表里根据服务名称找到对应服务地址
 * @param name 服务名
 * @param serviceList 服务列表
 * @returns {string}
 */
function findUrl (name, serviceList) {
  let obj = serviceList.find(function (item) {
    return item.name === name
  })
  return obj ? obj.url : ''
}

/**
 * 将返回信息的首字母转换为小写
 * @param response
 */
// function upperToLowerCamelCase (response) {
//   let responseString = response.replace(/(?!")[$_a-zA-Z0-9]+(?=":)/ig, function (str) {
//     return str.replace(/^[A-Z]/, function (char) {
//       return char.toLowerCase()
//     })
//   })
//
//   let res = JSON.parse(responseString)
//
//   if (res.code === 401) {
//     store.commit('UPDATE_TOP_TOAST', {
//       show: true,
//       message: '登录失效'
//     })
//     router.replace({
//       name: 'login',
//       query: { redirect: 123 } // router.history.current.fullPath
//     })
//   }
//   return res
// }
