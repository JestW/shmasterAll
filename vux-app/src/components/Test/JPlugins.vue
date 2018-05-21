<template>
  <div class="form-group">
    <label class="col-sm-2 control-label">用户名</label>
    <div class="col-sm-10">
      <input type="text" v-model="username" v-on:change="userNameChange" class="form-control" :placeholder="username">
      <label class="label label-danger" v-if="showErrorLabel">用户不合法</label>
    </div>
  </div>
</template>

<script>
export default{

  props: ['placeholder'],
  data: function () {
    return {
      username: '',
      showErrorLabel: false
    }
  },
  methods: {
    userNameChange () {
      // 用户名改变的方法里判断 用户名是否复合要求
      if (this.checkUserName(this.username)) {
        this.showErrorLabel = true // 如果验证没有通过就显示错误提示
      } else {
        this.showErrorLabel = false
      }
      console.log(this.showErrorLabel)
      // 调用父组件的方法
      this.$emit('childChange', 'username', this.username)
    }
  }
}
</script>

<style scoped>

</style>
