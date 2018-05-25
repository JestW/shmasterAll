import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/Recommend/Recommend'
import Singer from '@/components/Singer/Singer'
import Search from '@/components/Search/Search'
import Rank from '@/components/Rank/Rank'
import Foo from '@/components/Router/Foo'
import Bar from '@/components/Router/Bar'
import User from '@/components/Router/User'
import Shitu from '@/components/Router/ShituRoute'
import Shitu1 from '@/components/Router/Shitu/Shitu1'
import Shitu2 from '@/components/Router/Shitu/Shitu2'
import Shitu3 from '@/components/Router/Shitu/Shitu3'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '',
      // 重定向路由的3种写法
      // redirect: '/recommend'
      // redirect: {name: 'Recommend'}
      redirect: to => '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend,
      // 别名 /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
      alias: '/home'
    },
    {
      path: '/singer/',
      name: 'Singer',
      component: Singer,
      meta: { requiresAuth: true }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: { requiresAuth: true }
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank,
      meta: { requiresAuth: true }
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo,
      meta: { requiresAuth: true }
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar,
      meta: { requiresAuth: true }
    },
    {
      path: '/shitu',
      name: 'Shitu',
      component: Shitu,
      children: [
        {
          path: '',
          components: {
            default: Shitu1,
            a: Shitu2,
            b: Shitu3
          },
          meta: { requiresAuth: true }
        }
      ]
      // components: {
      //   default: Shitu1,
      //   a: ShiTu2,
      //   b: ShiTu3
      // }
    },
    {
      path: '/user/:id',
      name: 'User',
      components: User,
      children: [
        {
          path: '',
          component: resolve => require(['../components/Router/User1'], resolve)
        },
        {
          path: 'user2',
          component: resolve => require(['../components/Router/User2'], resolve)
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router
