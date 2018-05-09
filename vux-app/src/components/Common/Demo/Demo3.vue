<template>
  <div id="app3">
    <my-component :showname="showname" :data="data" :shownone="shownone"></my-component>
  </div>
</template>

<script>
import Vue from 'vue'
var mycom2 = Vue.extend({
  template: '{{data.name}}<br/>{{data.age}}<br/>{{showname}}<br/>{{bname}}<br/>{{bdata.bchild}}',
  props: ['showname', 'data', 'bname', 'bdata']
})
var bind_data = {
  bname: '外部绑定的名字在这里(来自mycom组件并且是外部定义的var，试试console里修改bind_data.bname=XXXX)',
  bdata: {
    bchild: '外部的child(来自mycom组件并且是外部定义的var，试试console里修改bind_data.bdata.bchild=XXXX)'
  }
}
var mycom = Vue.component('my-component', {
  template: '{{showname}}：<br/><my-component2 :data="data" :bname="bname" :bdata="bdata" showname="直接显示名字(来自直接传递)"></my-component2><br/>shownone:{{shownone}}',
  props: ['showname', 'data'],
  components: {
    'my-component2': mycom2
  },
  data: function () {
    return  bind_data;
  }
})
new Vue({
  el: '#app3',
  data: {
    'showname': '测试通信(来自vue)',
    'data': {
      name: '名字(来自vue)',
      age: '年龄(来自vue)'
    },
    'shownone': '这段显示不出来'
  }
})
</script>
<style scoped>
</style>
