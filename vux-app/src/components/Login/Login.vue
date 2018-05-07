<template>
  <div>
   <div class="login" style="width:80%;margin:50% auto">
     <group title="登陆界面" >
       <x-input
         title="姓名"
         is-type="china-mobile"
         style="border: 1px solid #ccc;border-top-left-radius: 5px;border-top-right-radius: 5px; border-bottom: none;background-color: azure;"
         :max="11"
         text-align="left"
         placeholder="请输入姓名"
       ></x-input>
       <x-input
         title="密码"
         style="border: 1px solid #ccc;background-color: azure;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px; " name="username"
         type="password"
         text-align="left"
         placeholder="请输入密码"
       ></x-input>
       <!--<x-button @click.native="style = 'color:red;'" type="primary">set red</x-button>-->
       <x-button
         type="primary"
         style="margin-top: 2px;"
         action-type="button"
       >submit</x-button>
     </group>
   </div>
  </div>
</template>
<script>
import { XInput, Group, XButton, Cell } from 'vux'
export default {
  name: 'Login',
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data () {
    return {
      msg: 'Welcome to Vue'
    }
  }
}
</script>

<style scoped>

</style>
