<template>
  <div>
    <div v-for="(item) in data" :key="item"></div>
    <x-table  style="background-color:#fff;border-top:none; font-size: 14px; ">
      <tbody>
        <!--<tr>-->
          <!--<td>{{ key }}</td>-->
          <!--<td>{{ key }}</td>-->
        <!--</tr>-->
        <tr v-for="(row) in rows" :key="row" class="slist-cell">
          <!--<td>{{index}}</td>-->
          <td style="width: 80px;" v-html="row.field"></td>
          <!--<td>{{item[row.name]}}</td>-->
          <td v-for = "(val) in noEmptyData" :key="val" style="text-align: left;padding: 0 4px;">
            <span>{{ val[row.name] ? val[row.name] : val[row.name] !== 0 ? ' ': 0 }}</span>
          </td>
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
  },
  computed: {
    noEmptyData () {
      return this.data && this.data.length ? this.data : [{}]
    }
  },
  methods: {
  }
}

</script>
<style scoped>
  .slist-cell:first-child{
    border-top: none;
  }
  .vux-table:after{
    border-top:none
  }
</style>
