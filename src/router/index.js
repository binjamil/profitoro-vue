import Vue from 'vue'
import Router from 'vue-router'

const PomodoroTimer = () =>
  import(/* webpackChunkName: "home" */ '@/components/main/sections/PomodoroTimer')
const Settings = () =>
  import(/* webpackChunkName: "settings" */ '@/components/main/sections/Settings')
const Statistics = () =>
  import(/* webpackChunkName: "statistics" */ '@/components/main/sections/Statistics')
const Workouts = () =>
  import(/* webpackChunkName: "workouts" */ '@/components/main/sections/Workouts')

import store from '@/store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      component: PomodoroTimer,
      path: '/'
    },
    {
      name: 'settings',
      component: Settings,
      path: '/settings',
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'statistics',
      component: Statistics,
      path: '/statistics',
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'workouts',
      component: Workouts,
      path: '/workouts',
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.user || store.state.user.isAnonymous) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
