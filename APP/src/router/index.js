import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminView from '../views/AdminView.vue'
import ManagerView from '../views/ManagerView.vue'
// import Settings from '../components/Settings.vue'
import Docs from '../components/Docs.vue'
import Profile from '../components/Profile.vue'
import Sources from '../components/admin_components/Sources.vue'
// import Main from '../components/Main.vue'
import AdminMain from '../components/admin_components/AdminMain.vue'
import ManagerMain from '../components/manager_components/ManagerMain.vue'
// import Modal from '../components/Modal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main',
    name: 'admin',
    component: AdminView,
    children: [
      {
        path: 'docs',
        name: 'docs',
        component: Docs
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'main',
        name: 'main',
        component: AdminMain
      },
      {
        path: 'sources',
        name: 'sources',
        component: Sources
      }
    ]
  },
  {
    path: '/manager',
    name: 'manager',
    redirect: '/manager/manager_main',
    component: ManagerView,
    children: [
      {
        path: 'manager_docs',
        name: 'manager_docs',
        component: Docs
      },
      {
        path: 'manager_profile',
        name: 'manager_profile',
        component: Profile
      },
      {
        path: 'manager_main',
        name: 'manager_main',
        component: ManagerMain
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
