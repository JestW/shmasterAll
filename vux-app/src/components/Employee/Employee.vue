<template>
<div>
  <x-header class="sh_header">人员<a slot="right">考察明细</a></x-header>
  <x-table style="background-color:#fff;">
    <thead>
    </thead>
    <tbody>
      <tr class="slist-cell" v-for="(item) in Slist">
        <td>{{ item.field }}</td>
        <td>${{ item.name }}</td>
      </tr>
    </tbody>
    <tbody>
    <tr class="slist-cell" v-for="(item) in Slist">
      <td>{{ item.field }}</td>
      <td>${{ item.name }}</td>
    </tr>
    </tbody>
  </x-table>
</div>
</template>
<script>
import { XHeader, XTable } from 'vux'
export default {
  name: 'Employee',
  data () {
    return {
      Slist: [
        {
          field: '日期',
          name: 13
        },
        {
          field: '员工姓名',
          name: 14
        },
        {
          field: '所属公司',
          name: 15
        },
        {
          field: '所属班次',
          name: 16
        },
        {
          field: '所属车间',
          name: 16
        },
        {
          field: '所属工序',
          name: 16
        },
        {
          field: '看台信息',
          name: 16
        },
        {
          field: '签到时间',
          name: 16
        },
        {
          field: '签退时间',
          name: 16
        },
        {
          field: '替岗时间',
          name: 16
        },
        {
          field: '当班产量',
          name: 16
        },
        {
          field: '计件工资',
          name: 16
        }
      ]
    }
  },
  components: {
    XHeader,
    XTable
  }
}
</script>
<style scoped>
.slist-cell td:first-child{
  width:70px;
  font-size: 14px;
  line-height: 24px;
}
.slist-cell:nth-child(even){
  background-color: aliceblue;
}
</style>
