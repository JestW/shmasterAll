<template>
  <div>
    this is test111
    <router-view v-bind:id='id'></router-view>
  </div>
</template>

<script>
export default {
  name: 'Test',
  components: {
  },
  data () {
    return {
      id: 123456
    }
  }
}
</script>

<style scoped>

</style>
