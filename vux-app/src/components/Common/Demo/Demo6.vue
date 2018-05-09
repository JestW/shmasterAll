<template>
  <div id="blog-posts-events-demo">
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
      ></blog-post>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button>
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
export default {
  name: 'Demo6',
  data () {
    return {
      posts: [/* ... */],
      postFontSize: 1
    }
  }
}
</script>
<style scoped>
</style>
