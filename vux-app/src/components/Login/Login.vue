<template>
<div>
    <img src="/static/images/login-bg.jpg" alt="background-img" style="height:100%;
width:150%">
    <div style="position: absolute;top:10%;margin: 0 auto; width:100%;">
      <div style="text-align: center">
        <img style="width:130px;margin:auto 10%;" src="/static/images/logo.png" alt="logo">
        <p style="margin-bottom:10px;font-size: 20px">您的纺纱智能助手</p>
      </div>
      <div  class="sh_input_group" style="width:90%; margin: auto 5%">
        <group class="sh_input_auth">
          <x-input
            title="公司码"
            label-width="100px"
            name="corpID"
            placeholder="请输入公司码"
            keyboard="number"
            >
            <i slot="label" style="padding-right:10px;display:block;" class="icon iconfont icon-gongsimingcheng"></i>
          </x-input>
          <x-input
            title="手机号码"
            label-width="100px"
            name="mobile"
            placeholder="请输入手机号码"
            keyboard="number"
            :max="11"
            is-type="china-mobile">
            <i slot="label" style="padding-right:10px;display:block;" class="icon iconfont icon-ren"></i></x-input>
          <x-input
            title="密码"
            label-width="100px"
            name="password"
            placeholder="请输入密码"
            keyboard="number"
            @on-enter="doLogin"
            >
            <i slot="label" style="padding-right:10px;display:block;" class="icon iconfont icon-mima"></i>
          </x-input>
        </group>
        <group class="sh_input_login">
          <x-button
            type="primary"
            style="margin-top: 2px;"
            @click.native="doLogin"
          >登陆</x-button>
        </group>
      </div>
    </div>
  </div>
</template>

<script>
import ajax from '../../net/ajax'
import { _getService, findUrl } from '../../net/axios'
import { ERR_OK } from '../../net/config'
import axios from 'axios'
import { XButton, Group, XInput } from 'vux'
export default {
  name: 'Login',
  components: {
    XButton,
    Group,
    XInput
  },
  methods: {
    doLogin () {
      console.log(0)
      this.$router.push('./home')
    }
  }
}
</script>
<style>
  body{
    height:100%;
  }
  .sh_input_group .weui-cells{
    background-color: hsla(0,0%,100%,.5);
  }
  .sh_input_group .sh_input_auth:first-child .weui-cells{
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .sh_input_group .sh_input_auth:last-child .weui-cells{
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .sh_input_login .weui-cells{
    background-color: transparent;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>
