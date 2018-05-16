<template>
  <div>
    13
  </div>
  <!--<div class="j_head" style="height:50%;">-->
    <!--<popup-header :left-text="'取消'" :right-text="'确定'" @on-click-left="JLeftClick" @on-click-right="JRightClick"></popup-header>-->
    <!--<div style="height: 100% ;position: relative;overflow-y: scroll">-->
        <!--<checklist :options="commonList" :max="1" @on-change="change"></checklist>-->
    <!--</div>-->
  <!--</div>-->
</template>
<script>
// 上下滑动，可以采用slideUp
import { PopupHeader, Checklist } from 'vux'
export default {
  name: 'JScroll',
  data () {
    return {
      commonList: [ 'China1', 'Japan1', 'America1', 'China2', 'Japan2', 'America2', 'China3', 'Japan3', 'America3', 'China4', 'Japan4', 'America4', 'China5', 'Japan5', 'America5' ]
    }
  },
  components: {
    PopupHeader,
    Checklist
  },
  props: {
    time: {
      type: String
    },
    height: {
      type: Number
    }
  },
  computed: {},
  methods: {
    change (val, label) {
      console.log('change', val, label)
    },
    JLeftClick () {
      console.log(0)
    },
    JRightClick () {
      console.log(1)
    }
  }
}
</script>

<style scoped>
.j_head{
  position: fixed;
  bottom: 0;
  border-top: 2px solid #e9e9e9;
  box-shadow: 0px -1px 1px #a9a9a1;
}
</style>
