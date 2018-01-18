import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/pages/demo'
import Index from '@/pages/index'
import Msg from '@/pages/msg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/msg',
      name: 'Msg',
      component: Msg
    }
  ]
})
