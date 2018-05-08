<template>
<div>
  <popup-header :left-text="'返回'" :right-text="'确定'" :title="'123'"></popup-header>
  <!--<popup v-model="show1">-->
    <!--&lt;!&ndash; group already has a top border, so we need to hide header's bottom border&ndash;&gt;-->
    <!--<popup-header-->
      <!--:left-text="'返回'"-->
      <!--:right-text="'确定'"-->
      <!--:title="'123'"-->
      <!--:show-bottom-border="false"-->
      <!--@on-click-left="show1 = false"-->
      <!--@on-click-right="show1 = false"></popup-header>-->
  <!--</popup>-->
</div>
</template>
<script>
import { PopupHeader, Popup, Group, XSwitch, Radio } from 'vux'
export default {
  name: 'Top',
  components: {
    PopupHeader,
    Popup,
    Group,
    XSwitch,
    Radio
  },
  data () {
    return {
      show1: true
    }
  }
}
</script>
<style scoped>
</style>
