<template>
  <div class="home">
    <div class="flex">
      <div id="meme-upload">
        <meme-upload />
      </div>
      <div
        class="flex lg:flex-col mt-12 mr-8 overflow-y-scroll h-screen shadow-lg border border-teal-dark rounded-lg"
        id="meme-detail">
        <meme-detail
          v-for="(meme, index) in this.memes"
          :key="index"
          :url="meme.url"
          :title="meme.title"
          :created_at="meme.created_at"
         />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MemeUpload from '@/components/MemeUpload.vue'
import MemeDetail from '@/components/MemeDetail.vue'
import Api from '@/Api'

export default {
  name: 'home',
  data() {
    return {
      memes: []
    }
  },
  mounted() {
    Api.get('api/memes')
      .then(response => {
        if (response.status === 200) {
          response.data.data.forEach(element => {
            let url = element.photo_url
            let fileName = url.split(process.env.VUE_APP_CLOUDINARY_IMAGE_URL)[1]
            url = `${process.env.VUE_APP_CLOUDINARY_IMAGE_URL}/${process.env.VUE_APP_CLOUDINARY_RESIZE}/${fileName}`

            this.memes.push({
              title: element.title,
              url: url,
              tags: element.tags,
              user_id: element.user_id,
              created_at: element.created_at
            })
          })
        }
      })
      .catch(() => {
        this.$notify({
          type: 'error',
          title: 'Error!',
          text: 'There was an error fetching uploaded memes.',
          duration: 5000
        })
      })
  },
  components: {
    MemeUpload,
    MemeDetail
  }
}
</script>

<style scoped>
@media (min-width: 800px) {
  #meme-upload {
    min-width: 750px;
  }
}
</style>

