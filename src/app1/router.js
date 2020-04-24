import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/top/Home.vue'
import Contact from './views/top/Contact.vue'
import Profile from './views/top/Profile.vue'
import Work from './views/top/Work.vue'



Vue.use(Router)
Vue.config.devtools = true

export default new Router({
 // mode: 'history',
  base: '/app1',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        //requiresAuth: true
      }
    },

    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },

    {
      path: '/work',
      name: 'work',
      component: Work
    },
   
  ]
})
