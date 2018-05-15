<template>
  <div id="app">
    <x-header
      style="vertical-align:middle"
      :left-options="{showBack: false}">
      <img :src='UrlHead' style="width:30px;" alt="">Children Music</x-header>
    <tab>
      <tab-item @on-item-click="$router.push('/recommend')">推荐</tab-item>
      <tab-item @on-item-click="$router.push('/singer')">歌手</tab-item>
      <tab-item @on-item-click="$router.push('/rank')">排行</tab-item>
      <tab-item @on-item-click="$router.push('/search')">搜索</tab-item>
    </tab>
    <!--keep-alive 防止每次进去都会请求一遍请求-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import { XHeader, Tab, TabItem } from 'vux'
export default {
  name: 'App',
  data () {
    return {
      UrlHead: 'static/images/logo@2x.png'
    }
  },
  components: {
    XHeader,
    Tab,
    TabItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
div.vux-header,  div.vux-tab{
  background-color: transparent;
}
</style>
