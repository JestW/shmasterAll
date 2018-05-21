// /*
// import axios from 'axios'
// // import { ERR_OK } from '../net/config'
// // import router from '@/router'
// // const serviceList;
// const url = 'http://api.shengtex.com/Service/GetService'
// // 拦截请求
// // var ajax = axios.create({
// //   timeout: 10000,
// //   headers: {'X-Custom-Header': 'foobar'}
// // })
// var ajax = axios.create({
//   timeout: 10000,
//   header: {
//     'Content-Type': 'application/json1123'
//   },
//   // `transformRequest`选项允许我们在请求发送到服务器之前对请求的数据做出一些改动
//   // 该选项只适用于以下请求方式：`put/post/patch`
//   // 数组里面的最后一个函数必须返回一个字符串、-一个`ArrayBuffer`或者`Stream`
//   transformRequest: [],
//   // transformResponse: [upperToLowerCamelCase],
//   // `validateStatus`定义了是否根据http相应状态码，来resolve或者reject promise
//   // 如果`validateStatus`返回true(或者设置为`null`或者`undefined`),那么promise的状态将会是resolved,否则其状态就是rejected
//   validateStatus: function (status) {
//     return status >= 200 && status < 300 // default
//   }
// })
//
// ajax.defaults.headers.common['Authorization'] = 'hD+d3pojZbjwwV6smigxAltYBU+FZh9i5jEwNsErhDcn6oYvVnhRSAQ233EwUxBiLak3NNIfMiflvCZPDg+nE/cvjG7xe7TbilyjgTJGK5tc2o8/zpRPH/3lcZogHha6PqgJlqjOm7nXAbrkI4cY+/uEXAtxbr0OQyueoWdjO3C0WX0u5lrBdw=='
// // 连接数据库
// export function _getService () {
//   const data = {
//     code: 1001,
//     version: '1.0.0',
//     r: Math.random()
//   }
//   // debugger
//   return ajax.get(url, {
//     params: data
//   }).then((res) => {
//     // debugger
//     return Promise.resolve(res.data)
//   })
// }
// // 封装post请求
// // export function getServer (name, params) {
// //   _getService().then((res) => {
// //     if (res.code === ERR_OK) {
// //       const serverList = res.data
// //       const url = findUrl(name, serverList)
// //       // const eurl = findUrl('GetEmployeeShifts', serverList)
// //       // this.getLogin(url)
// //       // this.getEmployee(eurl)
// //       axios.post(url, params).then(function (response) {
// //         console.log(response)
// //       })
// //         .catch(function (error) {
// //           console.log(error)
// //         })
// //     }
// //   })
// // }
// // export function getUrl () {
// //   getService().then((res) => {
// //     if (res.code === ERR_OK) {
// //       // this.discList = res.data.list
// //       const serverList = res.data
// //       // debugger
// //       const url = findUrl(name, serverList)
// //       this.getLogin(url)
// //     }else {
// //       // error
// //       throw message(error())
// //     }
// //   })
// // }
// export function findUrl (name, serviceList) {
//   let obj = serviceList.find(function (item) {
//     return item.name === name
//   })
//   return obj ? obj.url : ''
// }
// // export function getServer () {
// //   // const url = 'http://api.shengtex.com/Service/GetService'
// //   const data = {
// //     code: 1001,
// //     version: '1.0.0',
// //     r: Math.random()
// //   }
// //   // debugger
// //   return axios.get(url, {
// //     params: data
// //   }).then((res) => {
// //     return Promise.resolve(res.data)
// //   })
// // }
// // 拦截请求
//
// // axios.interceptors.request.use(function (config) {
// //   // serializeRequest(config) // 修改请求头和请求参数的方式进行参数序列化
// //   config.headers['Authorization'] = storage.get('AUTH_TOKEN') || ''
// //   // return config
// // }, function (error) {
// //   return Promise.reject(error)
// // })
// // function findUrl (name, serviceList) {
// //   let obj = serviceList.find(function (item) {
// //     return item.name === name
// //   })
// //   return obj ? obj.url : ''
// // }
// */
