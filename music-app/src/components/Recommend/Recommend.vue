<template>
<div>
  <p>路由的N中写法</p>
  <!--1-->
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
  <router-link to="/foo">1,to="/foo"</router-link>
  <hr>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!--<router-view></router-view>-->
  <!--2动态路由匹配-->
  <router-link to="/user/12">2,动态路由匹配</router-link>
  <hr>
  <!--3,嵌套路由,在user里面,点击上面的链接-->
  <router-link to="/user/12">3,嵌套路由,在user里面,请点击</router-link>
  <hr>
  <!--4,编程式路由 -->
  <p @click="$router.push('/foo')">4编程式路由- 字符串</p>
  <p @click="$router.push({ path: 'foo' })">4编程式路由-对象</p>
  <!--命名的路由,name和路由name一致-->
  <p @click="$router.push({ name: 'User', params: { id: 123 } })">4编程式路由-命名的路由</p>
  <a @click="BcShow = true" style="line-height: 20px; color: blueviolet">注意：如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path</a>
  <img src="/static/images/bcrouter.jpg" v-if="BcShow" alt="">
  <p style="color: bisque">router.replace(location, onComplete?, onAbort?)
    跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。</p>
  <p @click="$router.push({ path: 'foo', query: { plan: 'private' } })">4编程式路由-带查询参数</p>
  <p @click="pushClick">4编程式路由-命令(点击)路由</p>
  <hr>
  <!--5,视图路由 -->
  <router-link to="/Shitu">5,视图路由,在Shitu里面,请点击</router-link>
  <hr>
  <p>重定向与别名的关系见路由router/index</p>
</div>
</template>
<script>

export default {
  data () {
    return {
      BcShow: false
    }
  },
  methods: {
    pushClick () {
      this.$router.push('/foo')
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforRouteEnter')
    // console.log(this) // 结果为undefined，因为在执行beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行beforeCreate
    next((vm) => { // 参数vm就是当前组件的实例。
      vm.test = '我被改变了'
      console.log(vm)
    })
    // react to route changes...
    // don't forget to call next()
  },
  // 组件生命周期函数
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  },
  beforeRouteLeave (to, from, next) { // 离开组件的时候触发
    // 什么都不写的时候，不会离开(走下一步)
    console.log('beforeRouteLeave')
    next()
  },
  // watch: {
  //   $route (to, from) {
  //     console.log(to)
  //     if (to.params.id === '12') {
  //       // debugger
  //       to.params.id = 1
  //       // 这样写只有to.params.id变了，数据以及路由都没有变化
  //     }
  //     console.log(from)
  //   }
  // },
  components: {

  },
  created () {

  }
}
</script>
<style scoped>
  a{
    color: #fff;
    line-height: 40px;
  }
</style>
