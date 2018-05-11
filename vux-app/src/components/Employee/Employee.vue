<template>
<div>
  <x-header class="sh_header">人员<a slot="right">考察明细</a></x-header>
  <x-table style="background-color:#fff;">
    <thead>
    </thead>
    <tbody v-for="(member) in memberInfo">
      <tr class="slist-cell" >
        <td>日期</td>
        <td> {{member.date}}</td>
      </tr>
        <tr class="slist-cell" >
          <td> 员工姓名</td>
          <td> {{member.name}}</td>
        </tr>
        <tr class="slist-cell" >
          <td> 所属公司</td>
          <td> {{member.corpName}}</td>
        </tr>
    </tbody>
    <tbody v-for="(work) in workInfo">
    <tr class="slist-cell" >
      <td>所属公司</td>
      <td>{{ work.ProcessName }}</td>
    </tr>
    <tr class="slist-cell" >
      <td>所属班次</td>
      <td>{{ work.ShiftName }}</td>
    </tr>
    <tr class="slist-cell" >
      <td>所属车间</td>
      <td>{{ work.WorkShopName }}</td>
    </tr>
    <tr class="slist-cell" >
      <td>所属工序</td>
      <td>{{ work.ProcessName }}</td>
    </tr>
    <tr class="slist-cell" >
      <td>看台信息</td>
      <td>{{ work.MachineCodes }}</td>
    </tr>
    <tr class="slist-cell" >
      <td>签到时间</td>
      <td>{{ work.SignIn }}</td>
    </tr>
    <tr class="slist-cell" >
      <td>签退时间</td>
      <td>{{ work.SignOut }}</td>
    </tr>
    <tr class="slist-cell" >
      <td>替岗时间</td>
      <td>{{ work.InsteadTime }}</td>
    </tr>
    <tr class="slist-cell" >
      <td>当班产量</td>
      <td>{{ work.OutPut }}</td>
    </tr>
    <tr class="slist-cell" >
      <td>计件工资</td>
      <td>{{ work.Salary }}</td>
    </tr>
    </tbody>
  </x-table>
</div>
</template>
<script>
import { XHeader, XTable, dateFormat } from 'vux'
import { _getService, findUrl } from '../../net/axios'
import { ERR_OK } from '../../net/config'
import axios from 'axios'

export default {
  name: 'Employee',
  data () {
    return {
      memberInfo: [],
      workInfo: [],
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
    XTable,
    dateFormat
  },
  methods: {
    __getServer () {
      const _this = this
      _getService().then((res) => {
        if (res.code === ERR_OK) {
          const serverList = res.data
          const url = findUrl('GetEmployeeShifts', serverList)
          // const eurl = findUrl('GetEmployeeShifts', serverList)
          // this.getLogin(url)
          // this.getEmployee(eurl)
          axios.post(url, {
            date: dateFormat(new Date()),
            queryDate: '2018-05-11',
            CorpID: 12
          }).then(function (response) {
            const content = response.data.Data
            // debugger
            console.log(content)
            _this.memberInfo = [{
              name: content.EmpName,
              corpName: content.CorpName
            }]
            // console.log(content)
            // console.log(_this.memberInfo[0].name)
            // console.log(_this.memberInfo[0].corpName)
            debugger
            // console.log(_this.memberInfo)
            // _this.workInfo = (content.UserShifs || [])
            this.workInfo = (content.UserShifs || [])
              .map(x => {
                x.signIn = x.signIn ? x.signIn.split(' ')[1] : '暂无'
                x.signOut = x.signOut ? x.signOut.split(' ')[1] : '暂无'
                // let arr = [...x.signIn]
                debugger
                return x
              })
            // if (content.UserShifs) {
            //   _this.workInfo = [{
            //     ProcessName: content.UserShifs[0].ProcessName,
            //     ShiftName: content.UserShifs[0].ShiftName,
            //     ShiftsId: content.UserShifs[0].ShiftsId,
            //     SignIn: content.UserShifs[0].SignIn,
            //     SignOut: content.UserShifs[0].SignOut,
            //     WorkShopName: content.UserShifs[0].WorkShopName,
            //     MachineCodes: content.UserShifs[0].MachineCodes,
            //     OutPut: content.UserShifs[0].OutPut,
            //     Salary: content.UserShifs[0].Salary,
            //     InsteadTime: content.UserShifs[0].InsteadTime
            //   }]
            // }
          })
            .catch(function (error) {
              console.log(error)
            })
        }
      })
      // getServer('GetEmployeeShifts', {
      //   queryDate: '2018-05-11',
      //   CorpID: 12
      // })
    }
  },
  mounted () {
    this.__getServer()
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
