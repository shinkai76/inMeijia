import Vue from 'vue'
import Router from 'vue-router'
import Page01 from 'pages/Page01.vue'
import Page02 from 'pages/Page02.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page01',
      component: Page01
    },
    {
      path: '/home',
      name: 'Page02',
      component: Page02
    }
  ]
})
