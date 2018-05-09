// import axios from 'axios'
// import store from '../store'
//
// const getServiceUrlByName = async function (serviceName) {
//   if (/\//.test(serviceName)) {
//     return serviceName
//   }
//   let serviceList = store.state.serviceList
//   // 有服务列表缓存并且有此服务
//   if (serviceList.length && findUrl(serviceName, serviceList)) {
//     return findUrl(serviceName, serviceList)
//   } else {
//     try {
//       // 缓存里找不到服务地址则请求服务器
//       serviceList = await getService(true)
//     } catch (e) {
//       throw e
//     }
//
//     let serviceUrl = findUrl(serviceName, serviceList)
//
//     if (serviceUrl) {
//       return serviceUrl
//     } else {
//       throw Object({message: '找不到服务'})
//     }
//   }
// }
//
// function findUrl (name, serviceList) {
//   let obj = serviceList.find(function (item) {
//     return item.name === name
//   })
//   return obj ? obj.url : ''
// }
