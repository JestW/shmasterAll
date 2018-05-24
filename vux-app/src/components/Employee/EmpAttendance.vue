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
          :title="['签到时间', '签退时间'][attendance.signStatus]"
          primary="content"
          style="padding:0 0 0 15px"
          :value="'123'">
          <datetime v-model="time" type="primary" plain  @on-change="change"></datetime></cell>
        <cell v-if="attendance.signStatus === 0" title="班次选择" primary="content" is-link :value="shift.name" @click.native = "selectShift()"></cell>
        <cell v-if="attendance.signStatus === 1" title="班次" primary="content" :value="attendance.shiftName" ></cell>
        <cell v-if="attendance.signStatus === 0" title="上班时间" primary="content" :value="shift.workFrom"></cell>
        <cell v-if="attendance.signStatus === 0" title="下班时间" primary="content" :value="shift.workTo"></cell>
      </group>
      <group v-if="attendance.signStatus ===1">
        <x-textarea :title="'签退事由'" :placeholder="'请填写'" :show-counter="false" :rows="1" autosize></x-textarea>
      </group>
      <group style="margin-top: 30px">
        <x-button
          style="background-color: #404c4e"
          :text="['签到', '签退'][attendance.signStatus] || '考勤'"
          @click.native="signInOut(['in', 'out'][attendance.signStatus])"
          type="primary"></x-button>
      </group>
      <div style="margin:30px 10%;width: 80%">
        <textarea style="width: 100%" name="tishi" id="" cols="30" rows="10">
          友情提示:常日班和终点班，不能手动报工
        </textarea>
      </div>
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
<script>
import { XHeader, XButton, XTable, TransferDom, Group, Datetime, XSwitch, Cell, dateFormat, XTextarea } from 'vux'
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
      setToday: dateFormat(new Date(), 'YYYY-MM-DD HH-mm'),
      time: dateFormat(new Date(), 'hh:mm'),
      shiftList: [],
      // machine: {
      //   list: [],
      //   checked: [],
      //   name: '选择看台',
      //   type: 'checkbox'
      // },
      shift: [],
      isShow: false
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
      // console.log(data)
    },
    selectShift () {
      this.$refs.jScroll.isShow = true
      if (this.shift) {
        // this.shiftList[this.shift.id] === checked
        // debugger
      }
    },
    signInOut (type) {
      let message
      let param = {}
      // debugger
      if (this.attendance.signStatus === 0) {
        if (this.shift.length === 0) {
          message = '请选择班次'
        }
      }
      if (message) {
        this.$vux.toast.show({
          text: message
        })
        return
      }
      let signTime = dateFormat(new Date(), `YYYY-MM-DD HH:mm:ss`)
      if (this.attendance.signStatus === 0) {
        param.ShiftId = this.shift.id
        // 数据时从机器列表中获取的
        // debugger
        // param.MachineCodes = this.machine.checked.map(item => item.code)
      }
      if (type === 'in') {
        param.Status = 1
        param.SignIn = signTime
      }
      if (type === 'out') {
        param.Status = 0
        param.SignOut = signTime
      }
      // debugger
      const _this = this
      this.$vux.confirm.show({
        title: `确定签${{'in': '到', 'out': '退'}[type]}?`,
        // text: '',
        onCancel () {
          console.log('plugins-Cancle')
        },
        async onConfirm () {
          // debugger
          await _this.$http.post('SignInOut', param)
            .then(res => {
              let content = res.data
              if (content.succeed) {
                _this.$vux.toast.show({
                  type: 'text',
                  position: 'middle',
                  time: 2000,
                  text: {'in': '签到成功', 'out': '签退成功'}[type],
                  onHide: function () {
                    _this.$router.back()
                  }
                })
                // debugger
              } else if (content.code === -1) {
                _this.$vux.alert.show({
                  content: content.message
                })
              }
            }).catch(e =>
              _this.$vux.toast.show({
                type: 'text',
                position: 'middle',
                time: 2000,
                text: '网络错误'
              })
            )
        }
      })
    },
    async getEmpAttention () {
      // const _this = this
      await this.$http.post('GetAttendanceBasicInfo', {
      }).then((response) => {
        let content = response.data
        if (content.isSucceed) {
          this.attendance = content.data
          // console.log(content.data.shiftsList)
          this.shiftList = content.data.shiftsList
          // console.log(this.shiftList)
          // let obj = this.shiftList.find(item => item.name = this.shift) { return obj }
          // // debugger
          // console.log(_this.shiftList)
          if (!this.attendance.machinesList) {
          } else {
            // this.machine.checked = this.attendance.machinesList
          }
        } else {
          this.$vux.toast.show({
            text: content.message,
            position: 'middle'
          })
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
