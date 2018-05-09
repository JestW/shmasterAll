<template>
  <div>
    <div id="components-demo">
      <blog-post title="My journey with Vue"></blog-post>
      <blog-post title="Blogging with Vue"></blog-post>
      <blog-post title="Why Vue is so fun"></blog-post>
    </div>
    <!--<button-counter></button-counter>-->
    this is demo
    <div>
      <blog-post
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:title="post.title"
      ></blog-post>
    </div>
    <div>
      <blog-post v-bind="post"></blog-post>
      <blog-post
        v-bind:id="post.id"
        v-bind:title="post.title"
      ></blog-post>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('blog-post', {
  // posts: [
  //   {id: 1, title: 'My journey with Vue'},
  //   {id: 2, title: 'Blogging with Vue'},
  //   {id: 3, title: 'Why Vue is so fun'}
  // ],
  post: {
    id: 1,
    title: 'My Journey with Vue'
  },
  data: function () {
    return {
    }
  },
  template: '<h3>{{ title }}</h3>'
})

export default {
  name: 'Demo2'
}
</script>
<style scoped>
</style>
