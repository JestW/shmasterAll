// export default {
//   install (Vue) {
//     Vue.prototype.$myName = 'zhangsan'
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
// })
//       bind：在指令第一次绑定到元素时调用，只会调用一次。可以在此钩子函数中，执行一次性的初始化设置。
//        inserted：在已绑定的元素插入到父节点时调用（只能保证父节点存在，不一定存在于 document 中）。
//        update：在包含指令的组件的 VNode 更新后调用，但可能之前其子组件已更新。指令的值可能更新或者还没更新，然而可以通过比较绑定的当前值和旧值，来跳过不必要的更新（参考下面的钩子函数）。
//          componentUpdated：在包含指令的组件的 VNode 更新后调用，并且其子组件的 VNode 已更新。
//     unbind：在指令从元素上解除绑定时调用，只会调用一次。
//   }
// }
// import ChildPluginsComponent from './ChildPlugins'
// export default {
//   install (vue) {
//     const ChildPlugins = vue.extend(ChildPluginsComponent)
//   }
// }
