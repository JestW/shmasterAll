<template>
  <div style="margin-top: 50%;">
    <grid>
      <grid-item link="/employee" :label="'人员'">
        <img slot="icon" src="../../assets/grid_icon.png">
      </grid-item>
      <grid-item link="/machine" :label="'机器'">
        <img slot="icon" src="../../assets/grid_icon.png">
      </grid-item>
    </grid>
    <!--<group-title>3 columns</group-title>-->
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item link="/material" :label="'物料'">
        <img slot="icon" src="../../assets/grid_icon.png">
      </grid-item>
      <grid-item :link="{ path: '/energy'}" :label="'能源'">
        <img slot="icon" src="../../assets/grid_icon.png">
      </grid-item>
      <grid-item link="/check" @on-item-click="onItemClick">
        <img slot="icon" src="../../assets/grid_icon.png">
        <span slot="label">检测</span>
      </grid-item>
    </grid>
  </div>
</template>
<script>
import { Grid, GridItem, GroupTitle } from 'vux'
export default {
  name: 'home',
  components: {
    Grid,
    GridItem,
    GroupTitle
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
