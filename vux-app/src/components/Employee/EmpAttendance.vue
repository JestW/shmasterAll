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
        <!--<cell title="班次" primary="content">-->
          <!--<x-switch v-model="showShift"></x-switch>-->
        <!--</cell>-->
        <group>
          <!--<x-switch :title="'Android Theme'" v-model="show7"></x-switch>-->
        </group>
      </group>
      <group>
        <x-textarea :title="'签退事由'" :placeholder="'请填写'" :show-counter="false" :rows="1" autosize></x-textarea>
      </group>
    </div>
    <div v-transfer-dom>
    <j-scroll
      :isShow = "isShow"
      :data = "shiftList"
      :leftClick = "onCancel"
      :rightClick = "onOk"
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
import { XHeader, XTable, TransferDom, Group, Datetime, Actionsheet, XSwitch, Cell, dateFormat, XTextarea } from 'vux'
import JScroll from '../Common/JScroll'
import { _getService, findUrl } from '../../net/axios'
import { ERR_OK } from '../../net/config'
import axios from 'axios'
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
  created () {
    this.__getServer()
  },
  methods: {
    onCancel () {
      console.log('onCancel')
    },
    onOk () {
      console.log('onOk')
    },
    showMesg (data) {
      this.shift = data
    },
    change (value) {
      this.time = value
    },
    selectShift () {
      this.isShow = true
    },
    __getServer () {
      const _this = this
      _getService().then((res) => {
        if (res.code === ERR_OK) {
          const serverList = res.data
          const url = findUrl('GetAttendanceBasicInfo', serverList)
          axios.post(url, {
            CorpID: 12
          }).then(function (response) {
            _this.attendance = response.data.data
            // console.log(_this.attendance.EmpName)
            // debugger
            _this.shiftList = response.data.data.shiftsList.map( x => x.name)
            console.log(_this.shiftList)
          })
        }
      })
    }
    // _selectShift () {
    //   const _this = this
    //   _getService().then((res) => {
    //     if (res.code === ERR_OK) {
    //       const serverList = res.data
    //       const url = findUrl('GetAttendanceBasicInfo', serverList)
    //       axios.post(url, {
    //         CorpID: 12
    //       }).then(function (response) {
    //         _this.attendance = response.data.Data
    //         console.log(_this.attendance.EmpName)
    //         // debugger
    //       })
    //     }
    //   })
    // }
  }
}
</script>

<style scoped>
#head{
  background-color: #32c5e2;
}
div.weui-cells:after{
  border:none;
}
</style>
