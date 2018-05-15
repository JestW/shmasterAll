<template>
<div style="color:#fff">
  <swiper>
    <swiper-item
      dots-position="center"
      class="swiper-demo-img"
      v-for="(item, index) in recommends"
      :key="index"><a :href="item.linkUrl"><img style="width: 100%" :src="item.picUrl"></a></swiper-item>
  </swiper>
  <p>this is recommend</p>
</div>
</template>
<script>
import { Swiper, SwiperItem } from 'vux'
import {getRecommend, getDiscList} from '../../api/recommend'
import {ERR_OK} from '../../api/config'
export default {
  data () {
    return {
      recommends: {},
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {

    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
          console.log(this.recommends)
        }
      })
    },
    _getDiscList() {
      getDiscList().then((res) => {
        debugger
        if (res.code === ERR_OK) {
          this.discList = res.data.list
        }
      })
    },
  },
  created () {
    this._getRecommend()
    this._getDiscList()
  }
}
</script>
<style scoped>
</style>
