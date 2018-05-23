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
            name="corpCode"
            v-model="corpCode"
            placeholder="请输入公司码"
            keyboard="number"
            >
            <i slot="label" style="padding-right:10px;display:block;" class="icon iconfont icon-gongsimingcheng"></i>
          </x-input>
          <x-input
            title="手机号码"
            label-width="100px"
            name="mobile"
            v-model="mobile"
            placeholder="请输入手机号码"
            keyboard="number"
            :max="11"
            is-type="china-mobile">
            <i slot="label" style="padding-right:10px;display:block;" class="icon iconfont icon-ren"></i></x-input>
          <x-input
            title="密码"
            label-width="100px"
            name="password"
            v-model="password"
            placeholder="请输入密码"
            keyboard="number"
            @on-enter="doLogin"
            >
            <i slot="label" style="padding-right:10px;display:block;" class="icon iconfont icon-mima"></i>
          </x-input>
        </group>
        <group class="sh_input_login">
         <!--<keep-alive>-->
           <x-button
             type="primary"
             style="margin-top: 2px;"
             @click.native="doLogin"
           >登陆</x-button>
         <!--</keep-alive>-->
        </group>
      </div>
    </div>
  </div>
</template>

<script>
// import getService from '../../net/server'
// import { _getService, findUrl } from '../../net/axios'
// import { ERR_OK } from '../../net/config'
// import axios from 'axios'

import { XButton, Group, XInput } from 'vux'
export default {
  name: 'Login',
  components: {
    XButton,
    Group,
    XInput
  },
  data () {
    return {
      corpCode: this.$store.state.corpCode,
      mobile: this.$store.state.mobile,
      password: ''
    }
  },
  methods: {
    doLogin () {
      const _this = this
      // console.log(this.corpCode)
      let message
      if (!this.corpCode) {
        message = '请输入公司码'
      } else if (!this.mobile || this.mobile.length === 0) {
        message = '请输入手机号码'
      } else if (!this.password || this.password.length === 0) {
        message = '请输入密码'
      }
      if (message) {
        this.$vux.toast.show({
          type: 'text',
          position: 'middle',
          text: message,
          width: 'auto'
        })
        return
      }
      if (this.corpCode) {
        this.$store.commit('UPDATE_CORP_CODE', this.corpCode)
        // 这里需要把corpCode的值给store，对服务进行重加载
        // getService()
        // debugger
        _this.getEmp()
      }
      // this.$router.push('./home')
    },
    async getEmp () {
      const _this = this
      let response
      try {
        // debugger
        response = await this.$http
          .post('Login', {
            userName: this.mobile,
            pwd: this.password
          })
        // debugger
      } catch (e) {
        throw Object({message: '网络错误'})
      }
      if (response || response.data) {
        let content = response.data
        // debugger
        if (content.isSucceed) {
          this.$store.commit('UPDATE_AUTH_TOKEN', content.data.userToken)
          this.$store.commit('UPDATE_CORP_ID', content.data.corpId)
          this.$vux.toast.show({
            text: '登录成功',
            time: 300,
            onHide () {
              _this.$store.commit('UPDATE_UID', _this.mobile)
              _this.$router.push(_this.$route.query.redirect || '/')
            }
          })
        } else {
          this.$vux.toast.show({
            type: 'warn',
            text: content.message
          })
        }
      } else {
        return {success: false, message: '登录失败'}
      }
    },
    async preCheck () {
      let corpCode = this.$store.state.corpCode
      let corpId = this.$store.state.corpId
      let authToken = this.$store.state.authToken
      if (corpCode && corpId && authToken) { // 三个都有就跳走
        this.$router.replace(this.$route.query.redirect || '/')
      }
    }
  },
  mounted () {
    this.preCheck()
  },
  activated () {
    this.preCheck()
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
