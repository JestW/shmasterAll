<template>
<div style="margin-top: 50%">
  <div style="width:90%; margin: auto">
    <group>
      <x-input
        title="手机号码"
        label-width="100px"
        name="mobile"
        placeholder="请输入手机号码"
        keyboard="number"
        :max="11"
        is-type="china-mobile"></x-input>
    </group>
    <group>
      <x-input
        title="密码"
        label-width="100px"
        name="password"
        placeholder="请输入密码"
        keyboard="number"
        is-type="china-mobile"></x-input>
    </group>
    <group>
      <x-button
        type="primary"
        style="margin-top: 2px;"
        @click.native="onlogin"
      >submit</x-button>
    </group>
  </div>
</div>
</template>

<script>
import { XButton, Group, XInput } from 'vux'
export default {
  name: 'Login',
  components: {
    XButton,
    Group,
    XInput
  },
  methods: {
    onlogin () {
      console.log(0)
      this.$router.push('./home')
    }
  }
}
</script>
<style scoped>
</style>
