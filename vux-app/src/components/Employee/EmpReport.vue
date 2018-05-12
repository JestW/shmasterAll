<template>
<div>
  <x-header class="sh_header">报工<a slot="right">查看</a></x-header>
  <div>
    <JTable
      :rows= "WList"
    ></JTable>
  </div>
</div>
</template>

<script>
import JTable from '../Common/JTable'
import { XHeader, dateFormat } from 'vux'
export default {
  components: {
    JTable,
    XHeader,
    dateFormat
  },
  data () {
    return {
      WList: [
        {
          field: '机台'
        },
        {
          field: '品种'
        },
        {
          field: '批次'
        },
        {
          field: '报工产量(KG)'
        },
        {
          field: '报工产量(KG)'
        },
        {
          field: '开始产量(KG)'
        },
        {
          field: '结束产量(KG)'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
