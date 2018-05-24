import ajax from '../../net/ajax'
import storage from '../../storage'

const work = {
  namespaced: true,
  state () {
    return {
      workshopList: [],
      currentWorkShop: storage.get('CURRENT_WORKSHOP') || {},
      processList: [],
      currentProcess: storage.get('CURRENT_PROCESS') || {}
    }
  },
  mutations: {
    UPDATE_WORHSHOP_LIST: (state, payload) => {
      state.workshopList = payload
    }
  },
  actions: {
    GET_WORKSHOP_LIST: async ({commit, state}) => {
      await ajax.post('GetWorkShop', {})
        .then(res => {
          let content = res.data
          if (content.isSucceed) {
            let workshops = (content.data || [])
            commit('UPDATE_WORKSHOP_LIST', workshops)
          }
        })
      // if (!state.currentWorkShop.value)
    }
  }
}
export default work
