import storage from './../storage'
/**
 * 更新公司码
 * @param state
 * @param payload
 * @constructor
 */
export const UPDATE_CORP_CODE = (state, payload) => {
  storage.set('CORP_CODE', payload)
  state.corpCode = payload
}
/**
 * 更新auth_token
 * @param state
 * @param payload
 * @constructor
 */
export const UPDATE_AUTH_TOKEN = (state, payload) => {
  storage.set('AUTH_TOKEN', payload, { 'expireDays': 7 })
  state.authToken = payload
}
/**
 * 更新用户uid
 * @param state
 * @param payload
 * @constructor
 */
export const UPDATE_UID = (state, payload) => {
  storage.set('UID', payload, { 'expireDays': 7 })
  state.uid = payload
}
/**
 * 更新公司ID
 * @param state
 * @param payload
 * @constructor
 */
export const UPDATE_CORP_ID = (state, payload) => {
  storage.set('CORP_ID', payload)
  state.corpId = payload
}
/**
 * 更新服务列表（服务发现）
 * @param state
 * @param serviceList
 * @constructor
 */
export const UPDATE_SERVICE_LIST = (state, serviceList) => {
  storage.set('SERVICE_LIST', serviceList)
  state.serviceList = serviceList
}

/**
 * 更新loading，主要用于非组件内
 * @param state
 * @param status
 * @constructor
 */
export const UPDATE_LOADING = (state, status) => {
  state.loadingCount += (status ? 1 : state.loadingCount > 0 ? -1 : 0)
}
