<template>
  <div>
    this is test2
    {{id}}
    {{te()}}
  </div>
</template>

<script>
export default {
  name: 'Test2',
  components: {
  },
  props:{
    id:{
      type:Number,
      required:true
    }
  },
  methods:{
    te(){
      return 11;
    }
  }
}
</script>

<style scoped>

</style>
