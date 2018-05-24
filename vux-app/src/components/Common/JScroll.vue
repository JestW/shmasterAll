<template>
  <div class="j_head" ref="select" style="height: 80%;background: #fff;" v-if="isShow">
    <popup-header style="background-color: #404040" :left-text="'取消'" :right-text="'确定'" @on-click-left="leftClick" @on-click-right="rightClick"></popup-header>
    <div style="height: 100% ;position: relative;overflow-y: scroll;text-align: left">
        <checklist :options="data.map(x => x.name)" ref="check" :max="1" @on-change="change"></checklist>
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
      val: '',
      shiftTime: []
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
  computed: { },
  methods: {
    change (val, label) {
      // console.log('change', val, label)
      this.val = val.toString()
    },
    leftClick () {
      console.log(0)
      this.isShow = false
    },
    rightClick () {
      // const _this = this
      this.isShow = false
      if (!this.val) {
        return false
      } else {
        this.shiftTime = this.data.find(item => item.name === this.val)
        // console.log(this.shiftTime)
      }
      this.$emit('child', this.shiftTime)
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
