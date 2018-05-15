<template>
<div>
  <x-header class="sh_header">人员<a slot="right">考察明细</a></x-header>
  <Public
    :rows= "Slist"
    :data = "memberInfo"
  ></Public>
  <Public
    :rows= "Swork"
    :data = "workInfo"
  ></Public>
  <!--<x-table>-->
    <!--<thead>-->
    <!--</thead>-->

    <!--&lt;!&ndash;<tbody v-for="(member) in memberInfo">&ndash;&gt;-->
      <!--&lt;!&ndash;<tr class="slist-cell" >&ndash;&gt;-->
        <!--&lt;!&ndash;<td>日期</td>&ndash;&gt;-->
        <!--&lt;!&ndash;<td> {{member.date}}</td>&ndash;&gt;-->
      <!--&lt;!&ndash;</tr>&ndash;&gt;-->
        <!--&lt;!&ndash;<tr class="slist-cell">&ndash;&gt;-->
          <!--&lt;!&ndash;<td> 员工姓名</td>&ndash;&gt;-->
          <!--&lt;!&ndash;<td> {{member.name}}</td>&ndash;&gt;-->
        <!--&lt;!&ndash;</tr>&ndash;&gt;-->
        <!--&lt;!&ndash;<tr class="slist-cell">&ndash;&gt;-->
          <!--&lt;!&ndash;<td> 所属公司</td>&ndash;&gt;-->
          <!--&lt;!&ndash;<td> {{member.corpName}}</td>&ndash;&gt;-->
        <!--&lt;!&ndash;</tr>&ndash;&gt;-->
    <!--&lt;!&ndash;</tbody>&ndash;&gt;-->
    <!--&lt;!&ndash;<tbody v-for="(work) in workInfo">&ndash;&gt;-->
    <!--&lt;!&ndash;<tr class="slist-cell" >&ndash;&gt;-->
      <!--&lt;!&ndash;<td>所属公司</td>&ndash;&gt;-->
      <!--&lt;!&ndash;<td>{{ work.ProcessName }}</td>&ndash;&gt;-->
    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
    <!--&lt;!&ndash;<tr class="slist-cell" >&ndash;&gt;-->
      <!--&lt;!&ndash;<td>所属班次</td>&ndash;&gt;-->
      <!--&lt;!&ndash;<td>{{ work.ShiftName }}</td>&ndash;&gt;-->
    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
    <!--&lt;!&ndash;<tr class="slist-cell" >&ndash;&gt;-->
      <!--&lt;!&ndash;<td>所属车间</td>&ndash;&gt;-->
      <!--&lt;!&ndash;<td>{{ work.WorkShopName }}</td>&ndash;&gt;-->
    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
    <!--&lt;!&ndash;<tr class="slist-cell" >&ndash;&gt;-->
      <!--&lt;!&ndash;<td>所属工序</td>&ndash;&gt;-->
      <!--&lt;!&ndash;<td>{{ work.ProcessName }}</td>&ndash;&gt;-->
    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
    <!--&lt;!&ndash;<tr class="slist-cell" >&ndash;&gt;-->
      <!--&lt;!&ndash;<td>看台信息</td>&ndash;&gt;-->
      <!--&lt;!&ndash;<td>{{ work.MachineCodes }}</td>&ndash;&gt;-->
    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
    <!--&lt;!&ndash;<tr class="slist-cell" >&ndash;&gt;-->
      <!--&lt;!&ndash;<td>签到时间</td>&ndash;&gt;-->
      <!--&lt;!&ndash;<td>{{ work.SignIn }}</td>&ndash;&gt;-->
    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
    <!--&lt;!&ndash;<tr class="slist-cell" >&ndash;&gt;-->
      <!--&lt;!&ndash;<td>签退时间</td>&ndash;&gt;-->
      <!--&lt;!&ndash;<td>{{ work.SignOut }}</td>&ndash;&gt;-->
    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
    <!--&lt;!&ndash;<tr class="slist-cell" >&ndash;&gt;-->
      <!--&lt;!&ndash;<td>替岗时间</td>&ndash;&gt;-->
      <!--&lt;!&ndash;<td>{{ work.InsteadTime }}</td>&ndash;&gt;-->
    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
    <!--&lt;!&ndash;<tr class="slist-cell" >&ndash;&gt;-->
      <!--&lt;!&ndash;<td>当班产量</td>&ndash;&gt;-->
      <!--&lt;!&ndash;<td>{{ work.OutPut }}</td>&ndash;&gt;-->
    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
    <!--&lt;!&ndash;<tr class="slist-cell" >&ndash;&gt;-->
      <!--&lt;!&ndash;<td>计件工资</td>&ndash;&gt;-->
      <!--&lt;!&ndash;<td>{{ work.Salary }}</td>&ndash;&gt;-->
    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
    <!--&lt;!&ndash;</tbody>&ndash;&gt;-->
  <!--</x-table>-->
</div>
</template>
<script>
import { XHeader, XTable, dateFormat } from 'vux'
import { _getService, findUrl } from '../../net/axios'
import { ERR_OK } from '../../net/config'
import axios from 'axios'
import Public from '../Common/Public'
export default {
  name: 'Employee',
  data () {
    return {
      memberInfo: [],
      workInfo: [],
      Slist: [
        {
          field: '日期',
          name: 'date'
        },
        {
          field: '员工姓名',
          name: 'name'
        },
        {
          field: '所属公司',
          name: 'corpName'
        }
      ],
      Swork: [
        {
          field: '所属班次',
          name: 'ShiftName'
        },
        {
          field: '所属车间',
          name: 'WorkShopName'
        },
        {
          field: '所属工序',
          name: 'ProcessName'
        },
        {
          field: '看台信息',
          name: 'MachineCodes'
        },
        {
          field: '签到时间',
          name: 'SignIn'
        },
        {
          field: '签退时间',
          name: 'SignOut'
        },
        {
          field: '替岗时间',
          name: 'InsteadTime'
        },
        {
          field: '当班产量',
          name: 'OutPut'
        },
        {
          field: '计件工资',
          name: 'Salary'
        }
      ]
    }
  },
  components: {
    XHeader,
    XTable,
    Public,
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
            // console.log(content)
            _this.memberInfo = [{
              date: dateFormat(new Date(), 'YYYY-MM-DD'),
              name: content.EmpName,
              corpName: content.CorpName
            }]
            // console.log(content)
            // console.log(_this.memberInfo[0].name)
            // console.log(_this.memberInfo[0].corpName)
            // debugger
            // console.log(_this.memberInfo)
            // _this.workInfo = (content.UserShifs || [])
            _this.workInfo = (content.UserShifs || [])
              .map(x => {
                x.SignIn = x.SignIn ? x.SignIn.split(' ')[1] : '暂无'
                x.SignOut = x.SignOut ? x.SignOut.split(' ')[1] : '暂无'
                // let arr = [...x.signIn]
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
