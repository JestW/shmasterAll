<template>
  <div  class="login">
   <div style="width:90%;margin:50% auto">
     <group>
       <x-input
         title="手机号码"
         labelWidth="70px"
         name="mobile"
         :max="11"
         placeholder="请输入手机号码"
         keyboard="number"
         is-type="china-mobile"
         text-align="left"
       ></x-input>
     </group>
     <group>
       <x-input
         title="密码"
         labelWidth="70px"
         name="password"
         placeholder="请输入密码"
         keyboard="password"
         is-type="number"
         text-align="left"
       ></x-input>
     </group>
     <group>
       <x-button
         type="primary"
         style="margin-top: 2px;"
         @click.native="doLogin"
       >submit</x-button>
     </group>
   </div>
  </div>
</template>
<script>
import { XInput, Group, XButton } from 'vux'
// import axios from 'axios'
export default {
  name: 'Login',
  components: {
    XInput,
    XButton,
    Group
  },
  data () {
    return {
      mobile: '',
      password: '',
      msg: 'Welcome to Vue'
    }
  },
  mounted: {
    doLogin () {
      debugger
    }
  }
}

</script>

<style scoped>

</style>
