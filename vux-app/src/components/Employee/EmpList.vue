<template>
  <div>
    <x-header class="sh_header">人员列表<a slot="right">查看</a></x-header>
    <div  style="margin-top: 50%;">
      <grid>
        <grid-item link="/employee" :label="'人员'">
          <img slot="icon" src="../../assets/grid_icon.png">
        </grid-item>
        <grid-item link="/empAtt" :label="'考勤'">
          <img slot="icon" src="../../assets/grid_icon.png">
        </grid-item>
      </grid>
      <!--<group-title>3 columns</group-title>-->
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item link="/empSub" :label="'替岗'">
          <img slot="icon" src="../../assets/grid_icon.png">
        </grid-item>
        <grid-item :link="{ path: '/empReport'}" :label="'报工'">
          <img slot="icon" src="../../assets/grid_icon.png">
        </grid-item>
        <grid-item link="/empDist" @on-item-click="onItemClick">
          <img slot="icon" src="../../assets/grid_icon.png">
          <span slot="label">分配</span>
        </grid-item>
      </grid>
    </div>
  </div>
</template>
<script>
import { Grid, GridItem, GroupTitle, dateFormat, XHeader } from 'vux'

export default {
  name: 'home',
  data () {
    return {
      url: {}
    }
  },
  components: {
    Grid,
    GridItem,
    dateFormat,
    GroupTitle,
    XHeader
  },
  created () {

  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }

  }
}
</script>
<style scoped>
</style>
