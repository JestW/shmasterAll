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
        <cell title="员工姓名" primary="content" is-link :value="'123'"></cell>
        <cell title="所属工种" primary="content" is-link :value="'123'"></cell>
        <cell title="签退时间" primary="content" is-link :value="'123'"></cell>
        <cell title="班次" primary="content" is-link :value="'123'"></cell>
      </group>
      <group>
        <x-textarea :title="'签退事由'" :placeholder="'请填写'" :show-counter="false" :rows="1" autosize></x-textarea>
      </group>
    </div>
  </div>
</template>
<script>
import { XHeader, XTable, Group, Cell, dateFormat, XTextarea } from 'vux'
export default {
  components: {
    XHeader,
    Group,
    XTable,
    dateFormat,
    Cell,
    XTextarea
  },
  data () {
    return {
      setToday: dateFormat(new Date())
    }
  },
  methods: {
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
