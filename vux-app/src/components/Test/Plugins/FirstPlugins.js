// 这是我的插件对象，它可以导出到任何地方
// import MyComponent from './MyComponent.vue'
// const MyPlugin = {
//   install (Vue, options) {
//     // install方法是必须的
//     // 包含两个参数，Vue构造器，一个可选的选项对象
//     Vue.component(MyComponent.name, MyComponent)
//     // 这个是引用组件的方法参考下面语句的写法以及LoadingPlugins
//     // Vue.component('Loading', LoadingComponent)
//     Vue.mixin({
//     //   // 使用mixin将功能注入到所有组件
//     //   // 添加到mixin中的任何内容将被注入到组件中
//     //   // 这个例子中，mounted方法将在组件被挂载到DOM后调用
//       mounted () {
//         console.log('MyPlugins')
//       }
//     })
//   }
// }
const MyPlugin = {
  install (Vue, options) {
    Vue.prototype.$myAddedProperty = 'Example Property'
    Vue.prototype.$myAddedMethod = function () {
      return Vue.myAddedProperty
    }
  }
}
export default MyPlugin
