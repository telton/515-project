<template>
  <div class='search m-4'>
    <meme-search/>
    <div
      class='flex mt-6 overflow-y-scroll h-screen shadow-lg border border-teal-dark rounded-lg py-4 mx-auto flex-col'
      v-if='searchMemes.length !== 0'
    >
      <meme-detail
        v-for='(meme, index) in searchMemes'
        :key='index'
        :url='meme.url'
        :title='meme.title'
        :created_at='meme.created_at'
        :tags='meme.tags'
      />
    </div>
    <div
      v-else
      class='mt-4 bg-red-lightest border border-red-light text-center text-red-dark px-4 py-3 rounded relative'
      role='alert'
    >
      <strong class='font-bold pr-2'>Sorry!</strong>
      <span class='block sm:inline'>No memes matched your search.</span>
    </div>
  </div>
</template>

<script>
import MemeSearch from "@/components/MemeSearch.vue";
import MemeDetail from "@/components/MemeDetail.vue";

export default {
  name: "search",
  mounted() {
    this.$store.dispatch("meme/SEARCH_MEMES", {
      search: ""
    });
  },
  computed: {
    searchMemes() {
      return this.$store.getters["meme/searchMemes"];
    }
  },
  components: {
    MemeSearch,
    MemeDetail
  }
};
</script>
