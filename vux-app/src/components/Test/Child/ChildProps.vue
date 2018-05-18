<template>
    <div>
      <!--静态信息-->
      <div>{{MyMessage}}</div>
      <!--动态信息-->
      <div>{{message}}</div>
    </div>
</template>
<!--https://www.cnblogs.com/xiaohuochai/p/7388866.html-->
<script>
export default {
  data () {
    return {
      // message: '这里是子组件的数据'
    }
  },
  props: {
    MyMessage: {
      type: String
    },
    message: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
