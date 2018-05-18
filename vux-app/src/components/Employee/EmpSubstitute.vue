<template>
<div>
  <x-header class="sh_header">报工<a slot="right">查看</a></x-header>
  <group :title="'现岗位信息'">
    <cell style="border-top: 1px solid silver" :title="'在岗人员'" :value="Employees[0].Name" is-link></cell>
    <cell :title="'车间信息'" :value="Employees[0].WorkShopName"></cell>
    <cell :title="'所属工种'" :value="Employees[0].WorktypeName"></cell>
    <cell :title="'所属班次'" :value="Employees[0].Name"></cell>
    <cell :title="'替岗时间'" is-link></cell>
  </group>
</div>
</template>
<script>
import { _getService, findUrl } from '../../net/axios'
import { ERR_OK } from '../../net/config'
import axios from 'axios'
import { Cell, Group, XHeader } from 'vux'
export default {
  components: {
    Group,
    Cell,
    XHeader
  },
  data () {
    return {
      Employees: []
    }
  },
  created () {
    this.__getServer()
  },
  methods: {
    __getServer () {
      const _this = this
      _getService().then((res) => {
        if (res.code === ERR_OK) {
          const serverList = res.data
          const url = findUrl('GetEmployees', serverList)
          axios.post(url, {
            IsInWork: 1,
            CorpID: 12
          }).then(function (response) {
            console.log(response.data)
            debugger
            _this.Employees = response.data.Data
            // console.log(_this.attendance.EmpName)
            // debugger
            // _this.shiftList = response.data.Data.ShiftsList.map( x => x.Name)
            // console.log(_this.shiftList)
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
