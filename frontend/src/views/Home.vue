<template>
  <div class='home m-4'>
    <div class='flex flex-col lg:flex-row' id='meme-container'>
      <div id='meme-upload'>
        <meme-upload/>
      </div>
      <div
        class='flex mt-12 overflow-y-scroll h-screen shadow-lg border border-teal-dark rounded-lg pt-4 mx-auto flex-col'
        v-if='memes.length !== 0'
      >
        <meme-detail
          v-for='(meme, index) in memes'
          :key='index'
          :url='meme.url'
          :title='meme.title'
          :created_at='meme.created_at'
          :tags='meme.tags'
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MemeUpload from "@/components/MemeUpload.vue";
import MemeDetail from "@/components/MemeDetail.vue";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("meme/FETCH_MEMES");
  },
  computed: {
    memes() {
      return this.$store.getters["meme/memes"];
    }
  },
  components: {
    MemeUpload,
    MemeDetail
  }
};
</script>

<style scoped>
@media (min-width: 800px) {
  #meme-upload {
    min-width: 750px;
  }
}

#meme-container > div > #meme-detail:not(last-child) {
  padding-bottom: 1em;
  @apply border-b;
  @apply border-teal-light;
}
</style>

