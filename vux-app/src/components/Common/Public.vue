<template>
  <div>
    <x-table style="background-color:#fff;">
      <thead>
      </thead>
      <tbody>
        <tr v-for="item in data" class="slist-cell">
          <td style="width:50px;" v-if="!!val" v-html="item.val"></td>
          <td v-if="typeof(item) === 'object' || item.length === 1">{{ item[0].title }}</td>
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
    increase: {
      type: Function
    },
    data: {
      type: Array
    }
  },
  methods: {

  }
}

</script>
<style scoped>
</style>
