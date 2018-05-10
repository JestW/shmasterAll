<template>
  <div>
    <Public
      :id='data.id'
    ></Public>
  </div>
</template>

<script>
import Public from '../Common/Public'
export default {
  name: 'Test3',
  components: {
    Public
  },
  data () {
    return {
      data: {
        id: 123456
      }
    }
  }
}
</script>

<style scoped>

</style>
