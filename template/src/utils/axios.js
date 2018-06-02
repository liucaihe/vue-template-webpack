import axios from 'axios'
import config from '../config'

axios.defaults.baseURL = config.APIURL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.timeout = 100000

// 请求拦截器 (在发送请求之前)
axios.interceptors.request.use((res) => {
  return res
}, (error) => {
  if (error.response) {
    console.log(error.response.status)
  }
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((res) => {
  return res.data
}, (error) => {
  return Promise.reject(error)
})

export default axios