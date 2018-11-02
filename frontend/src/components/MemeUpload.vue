<template>
  <div class="w-full max-w-sm mx-auto mt-12 shadow-md">
    <div class="bg-white border-t-4 border-teal px-4 pt-3">
      <p class="font-bold text-center text-teal-darkest">Upload a New Meme</p>
    </div>
    <form
      class="bg-white rounded-b px-8 pt-6 pb-8 mb-4"
      @keydown.enter.prevent="validateBeforeUpload"
    >
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="title">Title</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          name="title"
          type="text"
          v-model="title"
          v-validate="'required'"
          placeholder="I Can Haz Cheeseburger?"
          required
        >
        <p class="text-red text-xs pt-2" v-if="errors.has('title')">{{ errors.first('title') }}</p>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="image">Image</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="image"
          name="image"
          type="file"
          v-validate="'required|file'"
          required
        >
        <p class="text-red text-xs pt-2" v-if="errors.has('image')">{{ errors.first('image') }}</p>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="tags">Tags</label>
        <v-select id="tags" name="tags" v-model="selectedTags" :options="availableTags" multiple/>
        <p class="text-red text-xs pt-2" v-if="errors.has('tags')">{{ errors.first('tags') }}</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          @click.prevent="validateBeforeUpload"
          :disabled="isUploadButtonDisabled"
          class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          ref="uploadButton"
        >
          <fa icon="upload"/>Upload
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Api from '@/Api';
import vSelect from 'vue-select';

export default {
  name: 'MemeUpload',
  data() {
    return {
      title: '',
      image: null,
      availableTags: [],
      selectedTags: []
    };
  },
  mounted() {
    Api.get('/api/tags')
         .then(response => {
           if (response.status == 200) {
             response.data.data.forEach(element => {
               this.availableTags.push({
                 label: element.tag,
                 value: element.id
               })
             });
           }
         }).catch(err => {
           console.log(err);
         })
  },
  watch: {
    isUploadButtonDisabled: {
      immediate: true,
      handler(newVal) {
        this.$nextTick(() => {
          if (newVal) {
            this.$refs.uploadButton.classList.add('btn-disabled');
          } else {
            this.$refs.uploadButton.classList.remove('btn-disabled');
          }
        });
      },
    },
  },
  computed: {
    isUploadButtonDisabled() {
      return this.title.trim() != '' || this.image != null || this.tags != [];
    }
  },
  methods: {
    validateBeforeUpload() {
      this.$validator.validateAll();

      if (!this.errors.any()) {
        this.uploadMeme();
      }
    },
    uploadMeme() {
      //
    }
  },
  components: {
    vSelect
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
