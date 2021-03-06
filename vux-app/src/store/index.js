import Vue from 'vue'
import Vuex from 'vuex'
import storage from '@/storage'
import work from './modules/work'
import * as mutations from './mutations'
Vue.use(Vuex)
const state = {
  planOrder: {}, // 生产单号
  orientation: 'portrait', // 'landscape' : 'portrait',
  loadingCount: 0,
  serviceList: storage.get('SERVICE_LIST') || [],
  corpCode: storage.get('CORP_CODE') || '',
  uid: storage.get('UID') || '',
  corpId: storage.get('CORP_ID') || '',
  corpName: storage.get('CORP_NAME') || '',
  authModuleList: [],
  authToken: storage.get('AUTH_TOKEN') || ''
}
const store = new Vuex.Store({
  state,
  moodules: {
    work
  },
  mutations
})

export default store
