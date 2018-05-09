<template>
  <div>
    <div id="components-demo">
      <button-counter title="Jest"></button-counter>
      <button-counter title="vue"></button-counter>
    </div>
    <!--<button-counter></button-counter>-->
    this is demo
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('button-counter', {
  props: ['title'],
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} {{ title }} times.</button>'
})
export default {
  name: 'Demo'
  // components: {
  //   'button-counter': {
  //     template: `<div style="color:red;"><button v-on:click="count++">You clicked me {{ count }} + {{ title }} times.</div>`,
  //     props: ['title'],
  //     data: function () {
  //       return {
  //         count: 0
  //       }
  //     }
  //   }
  // }
}
</script>
<style scoped>
</style>
