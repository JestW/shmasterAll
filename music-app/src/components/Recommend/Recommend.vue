<template>
<div style="color:#fff">
  <swiper loop auto
    :list="demo06_list"
    :index="demo06_index"
    @on-index-change="demo06_onIndexChange"></swiper>
</div>
</template>

<script>
import { Swiper } from 'vux'
import {getRecommend} from '../../api/recommend'
import {ERR_OK} from '../../api/config'
export default {
  data () {
    return {
      demo06_index: {}
    }
  },
  components: {
    Swiper
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          const content = res.data.slider
          console.log(content)
          // demo06_index = {}d
          debugger
          this.demo06_index = (content || []).map(item => {
            item.url = item.linkUrl
            return item
          })
        }
      })
    },
    demo06_onIndexChange (index) {
      this.demo06_index = index
    }
  },
  created () {
    this._getRecommend()
  }
}
</script>

<style scoped>

</style>
