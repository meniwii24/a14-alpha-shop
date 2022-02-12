import Vue from 'vue'
import Router from 'vue-router'
import CheckoutPage from '../views/CheckoutPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/CheckoutPage'
    },
    {
      path: '/CheckoutPage',
      name: 'CheckoutPage',
      component: CheckoutPage
    }
  ]
})