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
import store from '../store'


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
      component: Create,
    meta:{requiresAuth:true}
    },
    {
      path: '/detail/:blogId',
      component: Detail
    },
    {
      path: '/edit/:blogId',
      component: Edit,
      meta:{requiresAuth:true}
    },
    {
      path: '/my',
      component: My,
      meta:{requiresAuth:true}
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user/:userId',
      component: User
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
store.dispatch('checkLogin').then(isLogin=>{
  if (!isLogin) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
