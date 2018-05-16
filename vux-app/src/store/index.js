import Vue from 'vue'
import Vuex from 'vuex'
import storage from '@/storage'

Vue.use(Vuex)
const state = {
  planOrder: {}, // 生产单号
  orientation: 'portrait', // 'landscape' : 'portrait',
  loadingCount: 0,
  serviceList: '',
  authToken: storage.get('AUTH_TOKEN') || ''
}
const store = new Vuex.Store({
  state
})

export default store
