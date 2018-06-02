/**
 * 系统配置文件
 */

/**
 * 1. 请求相关
 * @param {String} APIURL API请求地址
 */

let APIURL

// 配置生产环境 or 测试环境 API URL
if (process.env.NODE_ENV === 'production') APIURL = 'https://api.npms.io'
else APIURL = 'https://api.npms.io'

/**
 * 路由相关
 * @param {String} RBASE 配置路由的路径
 * @param {String} RMODE 配置路由的模式 (hash 模式 | history 模式)
 */
const RBASE = '/'
const RMODE = 'history'

export default {
  APIURL,
  RBASE,
  RMODE
}
