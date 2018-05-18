<template>
    <div>
      <!--用于获取指定的标签-->
      <div id="app">
        <input type="text" v-model="val" ref="input1" id="input1"/>
        <br>
        <span>{{ val }}</span><br>
        <button @click="add">添加</button>
      </div>
      <!--// 实例在引用一个子组件的情况下-->
      <!--当v-for用于元素或者组件的时候，引用信息将是包含DOM节点或组件实例的数组-->
      <!--关于ref注册时间的重要说明，因为ref本身是-->
      <!--https://www.cnblogs.com/xumqfaith/p/7743387.html-->
      <button @click="fetchChild">获取子组件的数据</button>
      <j-ref ref="child"></j-ref>
    </div>
</template>

<script>
import JRef from './Child/ChildRef'
export default {
  data () {
    return {
      val: '',
      data: 'this is 父组件'
    }
  },
  components: {
    JRef
  },
  mounted () {
    console.log(this.$refs)
  },
  methods: {
    fetchChild () {
      console.log(this.$refs.child.data)
    },
    add () {
      console.log(this.val)
      this.$refs.input1.value = '22'
      console.log(this.$refs.child)
      console.log(this.$refs.input1) // <input type="text" id="input1">
      console.log(document.getElementById('input1')) // <input type="text" id="input1">
      // console.log(this.$refs.input1.value = 123)
    // this.$refs.input1  减少获取dom节点的消耗
    }
  }
}
</script>

<style scoped>

</style>
