<template>
    <div>
      <group>
        <cell :title="'Notifications'" is-link></cell>
        <cell :title="'Privacy'" is-link></cell>
      </group>
    </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  components: {
    Cell,
    Group
  }
}
</script>

<style scoped>

</style>
