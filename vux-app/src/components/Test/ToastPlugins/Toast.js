// // import SelectorComponent from './Selector'
// // const Selector = {} // 创建一个表格
// // const selectorVM = null // 存储selector vm
// // const showSelect = false // 表格的显示状态
// export default Selector
// // Selector.install = function (Vue, options) {
// //   const Ser = {
// //     allData : [],
// //     duration: '2500'
// //   } // 设置一个默认的样式
// //   for (const property in options) {
// //     Ser[property] = options[property]
// //   } // 使用options的配置
// //   Vue.prototype.$Selector = function (item) {
// //     // let selectorTmp = Vue.extend(SelectorComponent)
// //     let selectorTmp = '<div v-show="show" v-for="item in data">{{item}}</div>'
// //     if (showSelect) {
// //       // 如果toast还在，则不再执行
// //       return
// //     }
// //     if (!selectorVM) {
// //       var selectorTpl = Vue.extend({
// //         data: function () {
// //           return {
// //             data : allData
// //           }
// //         },
// //         template: selectorTmp
// //       })
// //       selectorVM = new selectorTpl()
// //       const tpl = selectorVM.$mount().$el
// //       document.body.appendChild(tpl)
// //     }
// //     // selectorVM.data = allData
// //   }
// //   // Vue.prototype.$toast[type] = function (tips) {
// //   //   return Vue.prototype.$toast(tips, type)
// //   // }
// // }

//
// import SelectorComponent from './Selector'
// var Toast = {}
// Toast.install = function (Vue, options) {
//   let opt = {
//     defaultType: 'bottom', // 默认显示位置
//     duration: '2500' // 持续时间
//   }
//   for (let property in options) {
//     opt[property] = options[property] // 使用 options 的配置
//   }
//   Vue.prototype.$toast = (tips, type) => {
//     if (type) {
//       opt.defaultType = type // 如果有传type，位置则设为该type
//     }
//     if (document.getElementsByClassName('vue-toast').length) {
//       // 如果toast还在，则不再执行
//       return
//     }
//     // let toastTpl = Vue.extend({
//     //   template: '<div class="vue-toast toast-'+opt.defaultType+'">' + tips + '</div>'
//     // })
//     let toastTpl = Vue.extend(SelectorComponent)
//     let tpl = new toastTpl().$mount().$el
//     document.body.appendChild(tpl)
//     setTimeout(function () {
//       document.body.removeChild(tpl)
//     }, opt.duration)
//   }
//   ['bottom', 'center', 'top'].forEach(type => {
//     Vue.prototype.$toast[type] = (tips) => {
//       return Vue.prototype.$toast(tips, type)
//     }
//   })
// }
// module.exports = Toast
