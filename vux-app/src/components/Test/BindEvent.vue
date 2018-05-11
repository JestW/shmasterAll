<template>
    <div>
      <button v-on:click="increment">{{ counter }}</button>
    </div>
</template>
<script>
import CBindEvent from './CBindEvent'
export default {
  data () {
    return {
      counter: 0
    }
  },
  components: {
    CBindEvent
  }
}
</script>

<style scoped>

</style>
