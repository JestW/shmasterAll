<template>
    <div>
      <p>{{ data }}</p>
      <p ref="hello">这里是ChildRef</p>
      <button @click="getParent">通过parent子组件向父组件索要数据</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      data: 123
    }
  },
  methods: {
    getParent () {
      console.log(this.$parent.data)
    }
  }
}
</script>

<style scoped>

</style>
