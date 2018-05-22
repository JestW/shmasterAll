<template>
  <div style="width: 100%">
    <x-table  style="width:auto; background-color:#fff; overflow: hidden">
      <thead>
        <tr>
          <th style="padding: 5px 10px;" v-for="row in rows"  :key="row"><span>{{ row.field }}</span></th>
        </tr>
      </thead>
      <tbody>
        <!--<tr>-->
          <!--<td v-for="item in data">{{ item.name }}</td>-->
        <!--</tr>-->
      </tbody>
    </x-table>
  </div>
</template>
<script>
import { XTable } from 'vux'
export default {
  name: 'JTable',
  components: {
    XTable
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    rows: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>
</style>
