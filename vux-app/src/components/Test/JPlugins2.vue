<template>
    <div>
      <div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
     <!--// 效果没有出来，见网址 https://vuefe.cn/v2/guide/custom-directive.html  -->
    </div>
</template>

<script>
export default {
  install (Vue) {
    Vue.directive('demo', {
      bind: function (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
          'name: ' + s(binding.name) + '<br>' +
          'value: ' + s(binding.value) + '<br>' +
          'expression: ' + s(binding.expression) + '<br>' +
          'argument: ' + s(binding.arg) + '<br>' +
          'modifiers: ' + s(binding.modifiers) + '<br>' +
          'vnode keys: ' + Object.keys(vnode).join(', ')
      }
    })
    new Vue({
      el: '#hook-arguments-example',
      data: {
        message: 'hello!'
      }
    })
  }
}
</script>

<style scoped>

</style>
