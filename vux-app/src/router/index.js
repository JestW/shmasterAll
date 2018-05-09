import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Login from '@/components/Login/Login'
import Employee from '@/components/Employee/Employee'
import Machine from '@/components/Machine/Machine'
import Material from '@/components/Material/Material'
import Energy from '@/components/Energy/Energy'
import Check from '@/components/Check/Check'
import Top from '@/components/Common/Top'
import Demo from '@/components/Common/Demo/Demo'
import Demo2 from '@/components/Common/Demo/Demo2'
import Demo5 from '@/components/Common/Demo/Demo5'
import Demo6 from '@/components/Common/Demo/Demo6'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/employee',
      name: 'Employee',
      component: Employee
    },
    {
      path: '/machine',
      name: 'Machine',
      component: Machine
    },
    {
      path: '/material',
      name: 'Material',
      component: Material
    },
    {
      path: '/energy',
      name: 'Energy',
      component: Energy
    },
    {
      path: '/check',
      name: 'Check',
      component: Check
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/demo2',
      name: 'Demo2',
      component: Demo2
    },
    {
      path: '/demo5',
      name: 'Demo5',
      component: Demo5
    },
    {
      path: '/demo6',
      name: 'Demo6',
      component: Demo6
    }
  ]
})
