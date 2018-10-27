<template>
  <div class="home">
    <meme-upload msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MemeUpload from '@/components/MemeUpload.vue'

export default {
  name: 'home',
  components: {
    MemeUpload
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Electrolize');

html,
body {
  font-family: 'Electrolize', sans-serif;
}
</style>
