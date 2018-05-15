<template>
  <div id="app">
    <router-view class="router-view"/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      drawerVisible: false
    }
  },
  computed: {

  },
  methods: {
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.router-view {
  position: relative;
  width: 100%;
  height: 100%;
  /*top: 46px;*/
}
</style>
