<template>
  <div class="hello">
    <group title="123">
      <x-input title="姓名" name="username" placeholder="请输入姓名"></x-input>
    </group>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
export default {
  name: 'HelloWorld',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
