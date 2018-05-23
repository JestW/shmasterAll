<template>
  <div id="head">
    <x-header class="sh_header">人员考勤<a slot="right">查看</a></x-header>
    <div>
      <group style="margin-top: 0">
        <cell
           disabled
           primary="content"
           :value="setToday"
           :title="'日期: '"></cell>
      </group>
      <group style="margin-top: 0">
        <cell title="员工姓名" primary="content" :value="attendance.empName"></cell>
        <cell title="所属工种" primary="content" :value="attendance.workTypeName"></cell>
        <cell
          v-if="attendance.signStatus === 1"
          title="签退时间"
          primary="content"
          style="padding:0 0 0 15px"
          :value="'123'">
          <datetime v-model="time" @on-change="change"></datetime></cell>
        <cell
          v-if="attendance.signStatus === 0"
          title="签到时间"
          primary="content"
          style="padding:0 0 0 15px"
          :value="'123'">
          <datetime v-model="time" @on-change="change"></datetime></cell>
        <cell title="班次" primary="content" is-link :value="shift" @click.native = "selectShift"></cell>
      </group>
      <group>
        <x-textarea :title="'签退事由'" :placeholder="'请填写'" :show-counter="false" :rows="1" autosize></x-textarea>
      </group>
      <group style="margin-top: 30px">
        <x-button type="primary">签到</x-button>
      </group>
    </div>
    <div v-transfer-dom>
    <j-scroll
      ref="jScroll"
      :isShow = "isShow"
      :data = "shiftList"
      v-on:child = "showMesg"
    ></j-scroll>
    </div>
  </div>
</template>
<!--<actionsheet-->
  <!--v-model="show7"-->
  <!--:menus="menu7"-->
  <!--theme="android"-->
  <!--@on-click-menu="click"-->
  <!--@on-after-hide="log('after hide')"-->
  <!--@on-after-show="log('after show')">-->
<!--</actionsheet>-->
<script>
import { XHeader, XButton, XTable, TransferDom, Group, Datetime, Actionsheet, XSwitch, Cell, dateFormat, XTextarea } from 'vux'
import JScroll from '../Common/JScroll'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Group,
    XTable,
    Datetime,
    Actionsheet,
    dateFormat,
    XButton,
    XSwitch,
    JScroll,
    Cell,
    XTextarea
  },
  data () {
    return {
      attendance: {},
      setToday: dateFormat(new Date()),
      time: dateFormat(new Date(), 'YYYY-MM-DD'),
      shiftList: [],
      shift: '',
      isShow: false,
      showShift: false,
      show7: false,
      menu7: {
        menu1: '北京烤鸭',
        menu2: '陕西油泼面',
        menu3: '西安肉夹馍'
      },
      data: [ 'China1', 'Japan1', 'America1', 'China2', 'Japan2', 'America2', 'China3', 'Japan3', 'America3', 'China4', 'Japan4', 'America4', 'China5', 'Japan5', 'America5' ]
    }
  },
  mounted () {
    this.getEmpAttention()
  },
  methods: {
    change (value) {
      this.time = value
    },
    showMesg (data) {
      this.shift = data
    },
    selectShift () {
      this.$refs.jScroll.isShow = true
    },
    // getAttention () {
    //   getService.post('GetMachinesByWorkShopIDAndProcessID', {
    //     WorkShopID: this.attendance.workshopId,
    //     ProcessID: this.attendance.processId
    //   })
    // },
    // __getServer () {
    //   const _this = this
    //   debugger
    //   getService('GetAttendanceBasicInfo', {
    //     CorpID: 12
    //   }).then(function (response) {
    //     debugger
    //     _this.attendance = response.data.data
    //   })
    // }
    async getEmpAttention () {
      const _this = this
      await this.$http.post('GetAttendanceBasicInfo', {
      }).then((response) => {
        let content = response.data
        if (content.isSucceed) {
          this.attendance = content.data
          this.shiftList = content.data.shiftsList.map(x => x.name)
          // debugger
          console.log(_this.shiftList)
        }
      })
    }
  }
}
</script>
<style scoped>
/*#head{*/
  /*background-color: #32c5e2;*/
/*}*/
div.weui-cells:after{
  border:none;
}
</style>
