<template>
    <div>
      <flexbox style="text-align: center;background-color: #e9e9e9;height: 40px;line-height: 40px">
        <flexbox-item class="vux-1px-l"><div class="flex-demo">演示车间</div></flexbox-item>
        <flexbox-item><div class="flex-demo">品种</div></flexbox-item>
      </flexbox>
      <div v-transfer-dom>
        <div v-if="show = true">
          <group>
            <cell :title="123"></cell>
            <cell :title="123"></cell>
            <cell :title="123"></cell>
          </group>
        </div>
      </div>
    </div>
</template>
<script>
import { Flexbox, FlexboxItem, Group, TransferDom, Cell } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Flexbox,
    FlexboxItem,
    Group,
    Cell
  },
  mounted () {
    this.GetWorkshop()
    this.GetProcesses()
  },
  methods: {
    async GetWorkshop () {
      this.$http.post('GetWorkShop', {})
        .then(res => {
          let content = res.data
          if (content.isSucceed) {
            console.log(1)
          }
        })
    },
    async GetProcesses () {
      this.$http.post('GetProcesses', {})
        .then(res => {
          let content = res.data
          if (content.isSucceed) {
            console.log(1)
          }
        })
    }
  }
}
</script>
<style scoped>
  .vux-1px-l{
    /*background-color: #e9e9e9;*/
    /*line-height: 40px;*/
    /*height: 40px;*/
    border-right: 1px solid #fff;
  }
</style>
