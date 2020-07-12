import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login'
import Create from '../pages/Create'
import Detail from '../pages/Detail'
import Edit from '../pages/Edit'
import Index from '../pages/Index'
import My from '../pages/My'
import Register from '../pages/Register'
import User from '../pages/User'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Index
  },

    {
      path: '/login',
      component: Login
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user',
      component: User
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
