<template>
  <div>
    <input
      type='text'
      placeholder='Search...'
      class='transition focus:outline-0 border border-teal focus:bg-white focus:border-teal-light placeholder-teal-darkest rounded bg-gray-lighter py-2 pr-4 pl-6 block w-full leading-normal'
      v-model='search'
      @keyup.prevent='handleSearch'
    >
  </div>
</template>

<script>
export default {
  name: "MemeSearch",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    handleSearch() {
      this.$store.dispatch("meme/SEARCH_MEMES", {
        search: this.search
      });
    }
  }
};
</script>
