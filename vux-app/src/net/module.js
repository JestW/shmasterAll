// import store from '../store'
// import ajax from './ajax'
// // import AjaxPlugin from '../ajax/AjaxPlugin'
// // import Vue from 'vue'
// // Vue.use(AjaxPlugin)
// async function checkModuleAuth (moduleId) {
//   if (!moduleId === void 0) {
//     return true
//   }
//   debugger
//   let authorizedModuleIds = store.state.authModuleList
//   if (!authorizedModuleIds.length) {
//     // let res
//     await ajax
//       .post('GetUserModuleAuthority', {}).then(res => {
//         if (res && res.data && res.data.isSucceed) {
//           if (res.data.data && res.data.data.authorityCode) {
//             authorizedModuleIds = res.data.data.authorityCode.split(/[,]/)
//             // store.commit('UPDATE_AUTH_MODULE_LIST', authorizedModuleIds)
//           } else {
//             authorizedModuleIds = []
//           }
//         } else {
//           throw Object({message: res.data.message})
//         }
//       })
//   }
//   return authorizedModuleIds.indexOf('' + moduleId) > -1
// }
// export default checkModuleAuth
