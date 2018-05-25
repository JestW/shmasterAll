import Vue from 'vue'
import Router from 'vue-router'
// import checkModuleAuth from '../net/module'
import store from '../store'
// import AjaxPlugin from '../Ajax/AjaxPlugin'
// import getService from '../net/server'
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
// import Demo6 from '@/components/Common/Demo/Demo6'
// import Test from '@/components/Test/Test'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: { requiresAuth: true }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/employee',
      name: 'Employee',
      component: Employee,
      meta: {
        requiresAuth: true,
        moduleId: 101
      }
    },
    {
      path: '/machine',
      name: 'Machine',
      component: Machine,
      meta: { requiresAuth: true }
    },
    {
      path: '/material',
      name: 'Material',
      component: Material,
      meta: { requiresAuth: true }
    },
    {
      path: '/energy',
      name: 'Energy',
      component: Energy,
      meta: { requiresAuth: true }
    },
    {
      path: '/check',
      name: 'Check',
      component: Check,
      meta: { requiresAuth: true }
    },
    {
      path: '/top',
      name: 'Top',
      component: Top,
      meta: { requiresAuth: true }
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
      meta: {
        requiresAuth: true,
        moduleId: 101
      }
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
      path: '/operate/:type',
      name: 'Operate',
      component: resolve => require(['../components/Employee/Operate'], resolve)
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
    // ref的用法
    {
      path: '/jPlugins',
      name: 'JPlugins',
      component: resolve => require(['../components/Test/JPlugins'], resolve)
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
    },
    {
      path: '*',
      component: resolve => require(['../components/Code404'], resolve)
    }
  ]
})
// 控制路由
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let isLoggin = store.state.authToken
    let corpCode = store.state.corpCode
    let corpId = store.state.corpId
    if (!isLoggin || !corpCode || !corpId) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
// 登陆权限的设置

// router.beforeEach((to, from, next) => {
//   checkModuleAuth(to.meta.moduleId)
//     .then(res => {
//       debugger
//       if (res) {
//         console.log(res)
//         next()
//       } else {
//         // this.$vux.toast.show({
//         //   text: '您无权访问此模块'
//         // })
//       }
//     })
// })

export default router
