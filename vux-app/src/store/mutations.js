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
