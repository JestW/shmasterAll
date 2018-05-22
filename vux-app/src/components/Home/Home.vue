<template>
  <div>
    <div style="position: relative;top: 0;left: 0;overflow: hidden">
      <img style="position: relative; top:0; left:0;width: 100%;" src="/static/images/banner.jpg" alt="">
      <div style="position: absolute;top:0;left: 0;width: 100%">
        <div style="margin-top: 20px;margin-left: 30px;">
          <span>当天本车间产量<br><strong style="font-size: 20px">10000</strong><span>公斤</span></span>
        </div>
        <img style="position: absolute;left: auto;right: 20px;top:20px;" src="/static/images/icon-earphone.svg" alt="icon-ear">
       <div style="position: absolute;top:90px;width: 90%;left: 5%;">
         <search
           style=""
           @on-result-click="resultClick"
           :results="results"
           v-model="value"
           :autoFixed="false"
           @on-submit="onSubmit"
           ref="search"></search>
       </div>
      </div>
    </div>
    <div>
      <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item link="/component/cell" :label="'人员'">
          <img slot="icon" src="/static/icon/emp.png/">
        </grid-item>
        <grid-item :link="{ path: '/component/cell'}" :label="'考勤'">
          <img slot="icon" src="/static/icon/emp.png/">
        </grid-item>
        <grid-item link="/component/cell" @on-item-click="onItemClick">
          <img slot="icon" src="/static/icon/emp.png/">
          <span slot="label">{{ '开台' }}</span>
        </grid-item>
        <grid-item link="/component/cell" :label="'了机'">
          <img slot="icon" src="/static/icon/emp.png/">
        </grid-item>
        <grid-item link="/component/cell" :label="'产量报工'">
          <img slot="icon" src="/static/icon/emp.png/">
        </grid-item>
        <grid-item :link="{ path: '/component/cell'}" :label="'工艺信息'">
          <img slot="icon" src="/static/icon/emp.png/">
        </grid-item>
        <grid-item link="/component/cell" @on-item-click="onItemClick">
          <img slot="icon" src="/static/icon/emp.png/">
          <span slot="label">{{ '更多' }}</span>
        </grid-item>
      </grid>
    </div>
    <div>
      <flexbox style="background-color: rgb(249, 249, 249);">
        <flexbox-item :span="4" style="overflow: hidden"><div class="flex-demo">
          <img style="width: 100%;height: 100%;" src="/static/signin.jpg" alt="">
        </div></flexbox-item>
        <flexbox-item><div class="flex-demo">
          <ul>
            <li style="margin-bottom: 5px">今日在岗人数<span>165</span>人</li>
            <li style="margin-bottom: 5px">今日报工人数<span>165</span>人</li>
            <li>今日在岗人数<span>165</span>人</li>
          </ul>
        </div></flexbox-item>
      </flexbox>
      </div>
    <div>
      <flexbox v-for="i in 2" :key="i" style=" margin-top: 10px">
        <flexbox-item style="background-color: rgb(249, 249, 249);overflow: hidden">
          <flexbox>
            <flexbox-item>
              <div class="flex-demo">
                <div>
                  <p style="margin-bottom: 5px">开台设备<span>16{{i}}</span>台</p>
                  <p style="margin-bottom: 5px">维修设备<span>165</span>台</p>
                  <p>保养设备<span>165</span>台</p>
                </div>
              </div>
              </flexbox-item>
            <flexbox-item :span="4" style="overflow: hidden">
              <img style="width: 100%;height: 100%;" src="/static/repair.jpg" alt="">
            </flexbox-item>
          </flexbox>
        </flexbox-item>
        <flexbox-item  style="background-color: rgb(249, 249, 249);overflow: hidden">
          <flexbox>
            <flexbox-item>
              <div class="flex-demo">
                <div>
                  <p style="margin-bottom: 5px">开台设备<span>165</span>台</p>
                  <p style="margin-bottom: 5px">维修设备<span>165</span>台</p>
                  <p>保养设备<span>165</span>台</p>
                </div>
              </div>
            </flexbox-item>
            <flexbox-item :span="4" style="overflow: hidden">
              <img style="width: 100%;height: 100%;" src="/static/repair.jpg" alt="">
            </flexbox-item>
          </flexbox>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>
import { Search, Grid, GridItem, Flexbox, FlexboxItem } from 'vux'
export default {
  name: 'home',
  data () {
    return {
      results: [],
      value: '123'
    }
  },
  components: {
    Search,
    Grid,
    GridItem,
    FlexboxItem,
    Flexbox
  },
  created () {
    // alert(this.$myName)
  },
  methods: {
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onItemClick () {
      console.log('on item click')
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    }
  }
}
function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>
<style>
  div.weui-search-bar{
    /*background-color: transparent;*/
    padding: 5px 8px;
    border-radius: 5px;
  }
  .weui-grids .weui-grid:after{
    border-bottom: none;
  }
  .weui-grid{
    text-decoration: none;
  }
</style>
