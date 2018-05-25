// import jsonp from '../net/Jsonp'
// import {commonParams, options} from './config'
// import axios from 'axios'
//
// export function getRecommend () {
//   const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
//   const data = Object.assign({}, commonParams, {
//     platform: 'h5',
//     uin: 0,
//     needNewCode: 1
//   })
//   return jsonp(url, data, options)
// }
// //添加一个请求拦截器
// axios.interceptors.request.use(function(config){
//   //在请求发出之前进行一些操作
//   serializeRequest(config) // 修改请求头和请求参数的方式进行参数序列化
//   config.headers['host'] = 'c.y.qq.com',
//   config.headers['referer'] = 'https://c.y.qq.com/'
//   return config;
// },function (err) {
//   //Do something with request error
//   return Promise.reject(error);
// });
// // 拦截响应
// axios.interceptors.response.use(function (config) {
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })
//
// export function getDiscList() {
//   const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
//   const data = Object.assign({}, commonParams, {
//     platform: 'yqq',
//     hostUin: 0,
//     sin: 0,
//     ein: 29,
//     sortId: 5,
//     needNewCode: 0,
//     categoryId: 10000000,
//     rnd: Math.random(),
//     format: 'json'
//   })
//   axios.get(url,{
//     params: data
//   }).then((res) => {
//     debugger
//       return Promise.resolve(res.data)
//   })
// }
//
// // export function getDiscList () {
// //   const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
// //   const data = Object.assign({}, commonParams, {
// //     platform: 'yqq',
// //     hostUin: 0,
// //     sin: 0,
// //     ein: 29,
// //     sortId: 5,
// //     needNewCode: 0,
// //     categoryId: 10000000,
// //     rnd: Math.random(),
// //     format: 'json'
// //   })
//
// //   return axios.get(url, {
// //     params: data
// //   }).then((res) => {
// //     return Promise.resolve(res.data)
// //   })
// // }
//
// export function getSongList (disstid) {
//   const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
//
//   const data = Object.assign({}, commonParams, {
//     disstid,
//     type: 1,
//     json: 1,
//     utf8: 1,
//     onlysong: 0,
//     platform: 'yqq',
//     hostUin: 0,
//     needNewCode: 0
//   })
//
//   return jsonp(url, data, options)
// }
