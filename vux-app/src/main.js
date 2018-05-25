// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import './app.css'
import './assets/iconfont/iconfont.css'
// import extra from './extra'
import store from './store'
import router from './router'
// import Icon from 'vue-awesome/components/Icon'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
// import es6-promise from 'es6-promise'
import AjaxPlugin from './Ajax/AjaxPlugin'
import ValidatePlugin from './components/Test/Child/ChildPlugins'
// 引入的loadingPlugins
import Loading from './components/Test/LoadingPlugins'
// 引入的Toastplugins
import Toastplugins from './components/Test/ToastPlugins/Toast'
// 引入的FirstPlugins
import FirstPlugins from './components/Test/Plugins/FirstPlugins'
import './components/Test/ToastPlugins/toast.css'
import {
  DevicePlugin,
  ToastPlugin,
  AlertPlugin,
  ConfirmPlugin,
  LoadingPlugin,
  DatetimePlugin
} from 'vux'
Vue.use(Loading)
Vue.use(Toastplugins)
Vue.use(FirstPlugins)
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AjaxPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(DatetimePlugin)

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ValidatePlugin)
// Vue.component('icon', Icon)
/* eslint-disable no-new */

// 需要注意的是axios是基于Promise的，因此如果你需要兼容低版本浏览器(caniuse)，需要引入polyfill。Polyfill 推荐使用 es6-promise
// require('es6-promise').polyfill()

// 添加 Fastclick 移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

// Effortlessly keep vue-router and vuex store in sync.主要是把vue-router的状态放进vuex的state中，这样就可以透过改变state来进行路由的一些操作，当然直接使用像是$route.go之类的也会影响到state，会同步的是这几个属性
// 以下3个可以从vuex取得并使用
// store.state.route.path   // current path (string)
// store.state.route.params // current params (object)
// store.state.route.query  // current query (object)
sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
