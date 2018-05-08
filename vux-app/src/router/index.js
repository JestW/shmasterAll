import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import Login from '@/components/Login/Login'
import Employee from '@/components/Employee/Employee'
import Machine from '@/components/Machine/Machine'
import Material from '@/components/Material/Material'
import Energy from '@/components/Energy/Energy'
import Check from '@/components/Check/Check'
import Top from '@/components/Common/Top'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
