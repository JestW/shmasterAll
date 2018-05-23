import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store'
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
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
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
    }

  ]
})
// 控制路由
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login') {
//     if (!store.state.CorpID || !store.state.corpCode || !store.state.authToken) {
//       next({
//         name: 'login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       try {
//         getService()
//           .then(() => {
//             next()
//           })
//       } catch (e) {
//         alert('获取服务失败！')
//       }
//     }
//   }
// })
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     let isLoginIn = !!store.state.authToken
//     if (!isLoginIn) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })

// // 全局路由守卫
// router.beforeEach((to, from, next) => {
//   // to: Route 即将要进入的目标，路由对象
//   // from: Route 当前导航正要离开的路由
//   // next： Function：一定要调用该方法来resolve这个钩子，执行效果依赖next方法的调用参数
//   let isLoginIn = store.state.authToken
//   // const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile'];
//   if (to.fullPath.indexOf(to.name) >= 0) { // 未登录状态
//     if (!isLoginIn) {
//       console.log('what fuck')
//       router.push({ name: 'login' })
//     }
//   }
//   if (to.name === 'login') { // 当页面到达login页面时，已登陆状态
//     if (isLoginIn) {
//       console.log('已经登陆')
//       router.push({ name: 'home' })
//     }
//   }
//   next()
// })
export default router
