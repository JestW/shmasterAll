<template>
<div>
  <blog-post title="My journey with Vue"></blog-post>
  <blog-post
    v-for="post in posts"
    v-bind:key="post.id"
    v-bind:title="post.title"
  >
  </blog-post>
</div>
</template>
<script>
import Vue from 'vue'
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>',
  data () {
    return {
      posts: [
        {id: 1, title: 'My journey with Vue1'},
        {id: 2, title: 'Blogging with Vue2'},
        {id: 3, title: 'Why Vue is so fun3'}
      ]
    }
  }
})
export default {
  name: 'Demo5'
  // data () {
  //   return {
  //     posts: [
  //       { id: 1, title: 'My journey with Vue1' },
  //       { id: 2, title: 'Blogging with Vue2' },
  //       { id: 3, title: 'Why Vue is so fun3' }
  //     ]
  //   }
  // }
}
</script>

<style scoped>

</style>
