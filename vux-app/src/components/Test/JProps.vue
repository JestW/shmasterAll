<template>
  <div>
    <!--// 静态数据-->
    <child-props my-message="这里是父组件的数据1"></child-props>
    <child-props my-message="这里是父组件的数据2"></child-props>
    <!--// 动态数据-->
    <!--模板中，要动态地绑定父组件的数据到子模板的 props，与绑定到任何普通的HTML特性相类似，就是用 v-bind。每当父组件的数据变化时，该变化也会传导给子组件-->
    <child-props :message="data"></child-props>
  </div>
</template>

<script>
import ChildProps from './Child/ChildProps'
export default {
  components: {
    ChildProps
  },
  data () {
    return {
      data: '这是个变量'
    }
  }
}
</script>

<style scoped>

</style>
