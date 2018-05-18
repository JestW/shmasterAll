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
          name: 'shiftName'
        },
        {
          field: '所属车间',
          name: 'workShopName'
        },
        {
          field: '所属工序',
          name: 'processName'
        },
        {
          field: '看台信息',
          name: 'machineCodes'
        },
        {
          field: '签到时间',
          name: 'signIn'
        },
        {
          field: '签退时间',
          name: 'signOut'
        },
        {
          field: '替岗时间',
          name: 'insteadTime'
        },
        {
          field: '当班产量',
          name: 'outPut'
        },
        {
          field: '计件工资',
          name: 'salary'
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
          axios.post(url, {
            date: dateFormat(new Date()),
            queryDate: '2018-05-11',
            CorpID: 12
          }).then(function (response) {
            const content = response.data.data
            // debugger
            // console.log(content)
            _this.memberInfo = [{
              date: dateFormat(new Date(), 'YYYY-MM-DD'),
              name: content.empName,
              corpName: content.corpName
            }]
            // debugger
            _this.workInfo = (content.userShifs || [])
              .map(x => {
                x.signIn = x.signIn ? x.signIn.split(' ')[1] : '暂无'
                x.signOut = x.signOut ? x.signOut.split(' ')[1] : '暂无'
                // let arr = [...x.signIn]
                return x
              })
          })
            .catch(function (error) {
              console.log(error)
            })
        }
      })
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
