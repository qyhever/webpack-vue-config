import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './plugins'
// the styles must be after the element-ui
import './assets/styles/index.less'
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
