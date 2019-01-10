import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/page2.html',
      component:Home
    },
    {
      path: '/index',
      beforeEnter() {
        window.location = "/"
      }
    },
    {
      path: '/page1',
      beforeEnter() {
        window.location = "/page1.html"
      }
    }
  ]
})
