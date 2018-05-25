<template>
  <div id="app">
    <div v-transfer-dom>
      <loading :show="isLoading" text=""></loading>
    </div>
    <div>
      <popup v-model="topToast.show" position="top">
        <p>topToast.message</p>
      </popup>
    </div>
    <router-view class="router-view"/>
  </div>
</template>
<script>
import { Loading, TransferDom, Popup } from 'vux'
// import store from './store'
import { mapState } from 'vuex'
export default {
  name: 'app',
  directives: {
    TransferDom
  },
  components: {
    Loading,
    Popup
  },
  data () {
    return {
      topToast: {'show': true}
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.loadingCount > 0
    })
  },
  methods: {
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.router-view {
  position: relative;
  width: 100%;
  height: 100%;
  /*top: 46px;*/
}
</style>
