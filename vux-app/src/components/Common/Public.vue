<template>
  <div>
    this is a public template
    {{ id }}
    <x-table style="background-color:#fff;">
      <thead>
      </thead>
      <tbody>
        <tr class="slist-cell" v-for="(item) in Slist">
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <tbody>
        <tr class="slist-cell" v-for="item in HList">
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>
<script>
import { XHeader, XTable } from 'vux'
export default {
  name: 'Public',
  components: {
    XHeader,
    XTable
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    HList: {
      type: Array,
      required: true
    }
  },
  methods: {
    te () {
      return 11
    }
  }
}
</script>
<style scoped>
</style>
