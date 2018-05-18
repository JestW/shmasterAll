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
// import Test from '@/components/Test/Test'
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
      path: '/jScroll',
      component: resolve => require(['../components/Common/JScroll'], resolve)
    },
    {
      path: '/test3',
      name: 'Test3',
      component: resolve => require(['../components/Test/Test3'], resolve)
    },
    {
      path: '/test/jScroll',
      component: resolve => require(['../components/Test/JScroll'], resolve)
    },
    {
      path: '/test4',
      name: 'Test4',
      component: resolve => require(['../components/Test/Test4'], resolve)
    },
    {
      path: '/empList',
      name: 'EmpList',
      component: resolve => require(['../components/Employee/EmpList'], resolve)
    },
    // 考勤
    {
      path: '/empAtt',
      name: 'EmpAttendance',
      component: resolve => require(['../components/Employee/EmpAttendance'], resolve)
    },
    // 报工
    {
      path: '/empReport',
      name: 'EmpReport',
      component: resolve => require(['../components/Employee/EmpReport'], resolve)
    },
    // 替岗
    {
      path: '/empSub',
      name: 'EmpSubstitute',
      component: resolve => require(['../components/Employee/EmpSubstitute'], resolve)
    },
    {
      path: '/bindEve',
      name: 'BindEvent',
      component: resolve => require(['../components/Test/BindEvent'], resolve)
    },
    // ref的用法
    {
      path: '/jRef',
      name: 'JRef',
      component: resolve => require(['../components/Test/JRef'], resolve)
    },
    // props-validates的用法
    {
      path: '/jProps',
      name: 'JProps',
      component: resolve => require(['../components/Test/JProps'], resolve)
    },
    {
      path: '/test',
      name: 'Test',
      component: resolve => require(['../components/Test/Test'], resolve),
      direction: '/test/test2',
      children: [
        {
          path: '/test/test2',
          name: 'Test2',
          component: resolve => require(['../components/Test/Test2'], resolve)
        }
      ]
    }

  ]
})
