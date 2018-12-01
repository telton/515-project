<template>
  <div class="w-full max-w-sm mx-auto mt-12 shadow-md">
    <div class="bg-white border-t-4 border-teal px-4 pt-3">
      <p class="font-bold text-center text-teal-darkest">Upload a New Meme</p>
    </div>
    <form
      class="bg-white rounded-b px-8 pt-6 pb-8 mb-4"
      @keydown.enter.prevent="validateBeforeUpload"
      enctype="multipart/form-data"
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
          id="meme"
          name="meme"
          type="file"
          ref="meme"
          @change="onFileChange"
          v-validate="'required'"
          required
        >
        <p class="text-red text-xs pt-2" v-if="errors.has('meme')">{{ errors.first('meme') }}</p>
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
import vSelect from 'vue-select'

export default {
  name: 'MemeUpload',
  data() {
    return {
      title: '',
      meme: null,
      selectedTags: []
    }
  },
  mounted() {
    this.$store.dispatch('tag/FETCH_TAGS')
  },
  watch: {
    isUploadButtonDisabled: {
      immediate: true,
      handler(newVal) {
        this.$nextTick(() => {
          if (newVal) {
            this.$refs.uploadButton.classList.add('btn-disabled')
          } else {
            this.$refs.uploadButton.classList.remove('btn-disabled')
          }
        })
      }
    }
  },
  computed: {
    isUploadButtonDisabled() {
      return this.title.trim() === '' || this.meme === null
    },
    availableTags() {
      let availableTags = []
      let tags = this.$store.getters['tag/tags']

      tags.forEach(element => {
        availableTags.push({
          label: element.tag,
          value: element.id
        })
      })

      return availableTags
    }
  },
  methods: {
    onFileChange() {
      if (this.$refs.meme.files.length === 0) return

      this.meme = this.$refs.meme.files[0]
    },
    validateBeforeUpload() {
      this.$validator.validateAll()

      if (!this.errors.any()) {
        this.uploadMeme()
      }
    },
    uploadMeme() {
      if (!this.isUploadButtonDisabled) {
        this.$refs.uploadButton.classList.add('btn-disabled')
        this.$refs.uploadButton.classList.add('spinner')

        let tags = []
        this.selectedTags.forEach(element => {
          tags.push(element.value)
        })

        this.$store
          .dispatch('meme/UPLOAD_MEME', {
            title: this.title,
            user_id: this.$store.getters['auth/user'].uid,
            meme: this.meme,
            tags: tags
          })
          .then(res => {
            if (res.status === 201) {
              this.$notify({
                type: 'success',
                title: 'Success!',
                text: 'Your meme has been successfully uploaded!',
                duration: 5000
              })

              let { data } = res.data

              this.$store.commit('meme/ADD_MEME', data)
            }
          })
          .catch(() => {
            this.$notify({
              type: 'error',
              title: 'Error!',
              text: 'There was an error uploading your meme.',
              duration: 5000
            })
          })
          .finally(() => {
            this.$refs.uploadButton.classList.remove('btn-disabled')
            this.$refs.uploadButton.classList.remove('spinner')
          })
      }
    }
  },
  components: {
    vSelect
  }
}
</script>
