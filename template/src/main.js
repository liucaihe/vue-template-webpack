{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
{{#axios}}
import Axios from './utils/axios'
{{/axios}}
import FastClick from 'fastclick'
import filters from './utils/filter'

{{#cookie}}
import cookie from 'js-cookie'
{{/cookie}}

// normalize.css
import 'normalize.css/normalize.css'

// 注册过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

{{#cookie}}
/**
 * 设置 Cookie 过期时间及路径
 * https://github.com/js-cookie/js-cookie
 */
cookie.attr = {
  path: '/',
  expires: 1
}
Vue.prototype.$cookie = cookie
{{/cookie}}
{{#axios}}
Vue.prototype.axios = Axios
{{/axios}}
/**
 * 消除物理点击和 click 移动浏览器上的事件触发之间的300毫秒延迟
 */
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

// productionTip 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
}).$mount('#main')
