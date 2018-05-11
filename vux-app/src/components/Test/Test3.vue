<template>
  <div>
    <Public
      :increase="onClick"
      :data = 'data.posts'
      :val = val
      :id = 'data.id'
      v-on:click="increase"
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
      total: 0,
      incrementTotal: 10,
      name: {},
      val: [{
        name: 'field'
      },
      {
        name: 'name'
      }],
      data: {
        id: 123456,
        key: 123,
        // posts: [
        //   { id: 1, title: 'My journey with Vue' },
        //   { id: 2, title: 'Blogging with Vue' },
        //   [
        //     { id: 4, title: 'My journey with Vue' },
        //     { id: 5, title: 'Blogging with Vue' }
        //   ]
        // ]
        posts: [
          {
            field: 'name1',
            name: 'jest'
          },
          {
            field: 'name2',
            name: 'wang'
          },
          {
            field: 'name3',
            name: 'li'
          }
        ]
      }
    }
  },
  methods: {
    change () {
      console.log(0)
    },
    onClick () {
      alert(1)
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
