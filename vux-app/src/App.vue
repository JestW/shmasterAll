<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
  // methods: {
  //   _getService () {
  //     getService().then((res) => {
  //       if (res.code === ERR_OK) {
  //         // this.discList = res.data.list
  //         const serverList = res.data
  //         // debugger
  //         const url = findUrl('Login', serverList)
  //         const eurl = findUrl('GetEmployeeShifts', serverList)
  //         this.getLogin(url)
  //         this.getEmployee(eurl)
  //       }
  //     })
  //   }
  // }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
