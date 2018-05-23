<template>
  <!--<div>-->
    <!--13-->
  <!--</div>-->
  <div class="j_head" style="height: 50%" v-if="isShow">
    <popup-header style="background-color: #404040" :left-text="'取消'" :right-text="'确定'" @on-click-left="leftClick" @on-click-right="rightClick"></popup-header>
    <div style="height: 100% ;position: relative;overflow-y: scroll;text-align: left">
        <checklist :options="data" ref="check" :max="1" @on-change="change"></checklist>
    </div>
  </div>
</template>
<script>
// 上下滑动，可以采用slideUp
import { PopupHeader, Checklist } from 'vux'
export default {
  name: 'JScroll',
  data () {
    return {
      isShow: false,
      val: ''
    }
  },
  components: {
    PopupHeader,
    Checklist
  },
  props: {
    // isShow: {
    //   type: Boolean,
    //   default: false
    // },
    height: {
      type: String
    },
    time: {
      type: String
    },
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  computed: {},
  methods: {
    change (val, label) {
      console.log('change', val, label)
      this.val = val.toString()
    },
    leftClick () {
      console.log(0)
      this.isShow = false
    },
    rightClick () {
      this.isShow = false
      console.log(this.val)
      console.log(this.isShow)
      this.$emit('child', this.val)
    }
  }
}
</script>
<style scoped>
.j_head{
  position: fixed;
  bottom: 0;
  /*border-top: 2px solid #2f2b2b;*/
  box-shadow: 0 -1px 8px #2f2b2b;
  width:100%;
  left: 0;
}
</style>
