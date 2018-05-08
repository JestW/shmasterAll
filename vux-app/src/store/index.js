import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  planOrder: {}, // 生产单号
  orientation: 'portrait', // 'landscape' : 'portrait',
  loadingCount: 0
}
const store = new Vuex.Store({
  state
})

export default store
