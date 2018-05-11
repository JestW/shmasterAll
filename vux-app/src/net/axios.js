import axios from 'axios'
// import { ERR_OK } from '../net/config'
// import router from '@/router'
// const serviceList;
const url = 'http://api.shengtex.com/Service/GetService'
// 拦截请求
axios.defaults.headers.common['Authorization'] = 'hD+d3pojZbjwwV6smigxAltYBU+FZh9i5jEwNsErhDcn6oYvVnhRSAQ233EwUxBiLak3NNIfMiflvCZPDg+nE/cvjG7xe7TbilyjgTJGK5tc2o8/zpRPH/3lcZogHha6PqgJlqjOm7nXAbrkI4cY+/uEXAtxbr0OQyueoWdjO3C0WX0u5lrBdw=='
// 连接数据库
export function _getService () {
  const data = {
    code: 1001,
    version: '1.0.0',
    r: Math.random()
  }
  // debugger
  return axios.get(url, {
    params: data
  }).then((res) => {
    // debugger
    return Promise.resolve(res.data)
  })
}
// 封装post请求
// export function getServer (name, params) {
//   _getService().then((res) => {
//     if (res.code === ERR_OK) {
//       const serverList = res.data
//       const url = findUrl(name, serverList)
//       // const eurl = findUrl('GetEmployeeShifts', serverList)
//       // this.getLogin(url)
//       // this.getEmployee(eurl)
//       axios.post(url, params).then(function (response) {
//         console.log(response)
//       })
//         .catch(function (error) {
//           console.log(error)
//         })
//     }
//   })
// }
// export function getUrl () {
//   getService().then((res) => {
//     if (res.code === ERR_OK) {
//       // this.discList = res.data.list
//       const serverList = res.data
//       // debugger
//       const url = findUrl(name, serverList)
//       this.getLogin(url)
//     }else {
//       // error
//       throw message(error())
//     }
//   })
// }
export function findUrl (name, serviceList) {
  let obj = serviceList.find(function (item) {
    return item.name === name
  })
  return obj ? obj.url : ''
}
// export function getServer () {
//   // const url = 'http://api.shengtex.com/Service/GetService'
//   const data = {
//     code: 1001,
//     version: '1.0.0',
//     r: Math.random()
//   }
//   // debugger
//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }
// 拦截请求

// axios.interceptors.request.use(function (config) {
//   // serializeRequest(config) // 修改请求头和请求参数的方式进行参数序列化
//   config.headers['Authorization'] = storage.get('AUTH_TOKEN') || ''
//   // return config
// }, function (error) {
//   return Promise.reject(error)
// })
// function findUrl (name, serviceList) {
//   let obj = serviceList.find(function (item) {
//     return item.name === name
//   })
//   return obj ? obj.url : ''
// }
