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
          name: 'empName'
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
    async getServer () {
      await this.$http.post('GetEmployeeShifts', {
        date: dateFormat(new Date(), 'YYYY-MM-DD')
        // queryDate: '2018-05-11'
      }).then(response => {
        // debugger
        this.$store.commit('UPDATE_LOADING', true)
        const content = response.data
        if (content.isSucceed) {
          this.memberInfo = [{
            date: dateFormat(new Date(), 'YYYY-MM-DD'),
            empName: content.data.empName,
            corpName: content.data.corpName
          }]
          this.workInfo = (content.data.userShifs || [])
            .map(x => {
              x.signIn = x.signIn ? x.signIn.split(' ')[1] : '暂无'
              x.signOut = x.signOut ? x.signOut.split(' ')[1] : '暂无'
              // let arr = [...x.signIn]
              return x
            })
        }
        this.$store.commit('UPDATE_LOADING', false)
      })
    }
  },
  mounted () {
    this.getServer()
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
