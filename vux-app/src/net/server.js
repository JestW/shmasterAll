import axios from 'axios'
import store from '../store'
const GET_SERVICE_URL = `http://api.shengtex.com/Service/GetService`
const getService = async function () {
  let res
  try {
    let url
    url = GET_SERVICE_URL
    // debugger
    url += '?code=' + store.state.corpCode
    url += '&version=1.0.0'
    url += '&r=' + Math.random()
    res = await axios.get(url)
  } catch (e) {
    throw Object({message: '网络错误'})
  }
  // debugger
  if (res) {
    let content = res.data
    if (content.isSucceed && content.data) {
      let serviceList = content.data
      // debugger
      // 注意这里的提交方式，与Vue不一致
      store.commit('UPDATE_SERVICE_LIST', serviceList)
      return serviceList
    } else {
      throw Object({message: content.message})
    }
  } else {
    throw Object({message: '接口错误'})
  }
}
export default getService
