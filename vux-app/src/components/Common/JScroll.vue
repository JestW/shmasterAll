<template>
  <!--<div>-->
    <!--13-->
  <!--</div>-->
  <div class="j_head" style="height: 60%" v-if="isShow">
    <popup-header :left-text="'取消'" :right-text="'确定'" @on-click-left="leftClick" @on-click-right="rightClick"></popup-header>
    <div style="height: 100% ;position: relative;overflow-y: scroll;text-align: left">
        <checklist :options="data" :max="1" @on-change="change"></checklist>
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
      vai: ''
      // isShow: true
    }
  },
  components: {
    PopupHeader,
    Checklist
  },
  props: {
    // leftClick: {
    //   type: Function
    // },
    // rightClick: {
    //   type: Function
    // },
    isShow: {
      type: Boolean,
      default: false
    },
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
      this.val = val
    },
    leftClick () {
      console.log(0)
      this.isShow = false
      // console.log(this.isShow)
    },
    rightClick () {
      console.log(1)
      // console.log(this.val)
      this.isShow = false
      console.log(this.isShow)
      this.$emit('child', this.val)
    }
    // JRightClick () {
    //   console.log(1)
    // }
  }
}
</script>

<style scoped>
.j_head{
  position: fixed;
  bottom: 0;
  border-top: 2px solid #e9e9e9;
  box-shadow: 0 -1px 1px #a9a9a1;
  width:100%;
  left: 0;
}
</style>
