// export default{
//   install (Vue) {
//     // Vue.prototype.$myName = "zhagngsan";
//     Vue.prototype.checkUserName = (value) => {
//       if (value === '123') {
//         return true // 如果没有填写,默认为true
//       } else {
//         return false
//       }
//     }
//     Vue.directive('uname', {
//       bind () {
//         console.log('bind') // 只会调用一次
//       }
//     })
//   }
// }
import ChildPluginsComponent from './ChildPlugins'
export default {
  install (vue) {
    const ChildPlugins = vue.extend(ChildPluginsComponent)
  }
}
