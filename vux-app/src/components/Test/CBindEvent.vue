<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    data () {
      return {
        counter: 0
      }
    },
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
}
</script>

<style scoped>

</style>
