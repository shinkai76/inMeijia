import 'babel-polyfill'
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import 'assets/main.less'
import Icon from 'vue-svg-icon/Icon.vue'
import axios from 'axios'
import fastclick from 'fastclick'

Vue.prototype.$ajax = axios
Vue.component('icon', Icon)
Vue.use(Mint)
fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
