import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/page/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    }
  ]
})
