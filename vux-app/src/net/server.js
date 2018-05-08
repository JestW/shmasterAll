// import axios from 'axios'
//
// // `transformResponse`选项允许我们在数据传送到`then/catch`方法之前对数据进行改动
//
// // const ajaxInstance = axios.create({
// //   transformResponse: [upperToLowerCamelCase]
// // })
// // /**
// //  * 将返回信息的首字母转换为小写
// //  * @param response
// //  */
// // function upperToLowerCamelCase (response) {
// //   let responseString = response.replace(/(?!")[$_a-zA-Z0-9]+(?=":)/ig, function (str) {
// //     return str.replace(/^[A-Z]/, function (char) {
// //       return char.toLowerCase()
// //     })
// //   })
// //   return JSON.parse(responseString)
// // }
//
// // 测试环境
// const GET_SERVICE_URL = `http://api.shengtex.com/Service/GetService`
//
// const getService = async function () {
//   let res
//   try {
//     let url
//     url = GET_SERVICE_URL
//     url += '?code=' + 1001
//     url += '&version=1.0.0'
//     url += '&r=' + Math.random()
//     res = await axios.get(url)
//   } catch (e) {
//     throw Object({message: '网络错误'})
//   }
//   return res
// }
