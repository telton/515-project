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
