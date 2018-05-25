<template>
<div>
  this is user id
  <br>
  User {{ $route.params.id }}
  <img src="/static/images/routeid.jpg" alt="">
  <router-view></router-view>
</div>
</template>
<script>
export default {
  // beforeRouteUpdate (to, from, next) {
  //   console.log('beforeRouteUpdate')
  //   next()
  // }
}
</script>

<style scoped>
img{
  width: 100%;
}
</style>
