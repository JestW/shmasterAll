<template>
    <div>
      <x-header
        class="sh_header"
        :title="currentTab === 'open' ? '品种开台': '品种了机'"><a slot="right">确定</a></x-header>
      <div>
        <tab-selector></tab-selector>
      </div>
    </div>
</template>
<script>
import { XHeader } from 'vux'
import TabSelector from '../Common/TabSelector'
export default {
  components: {
    XHeader,
    TabSelector
  },
  data () {
    return {
      currentTab: 'open'
    }
  }
}
</script>
<style scoped>
</style>
