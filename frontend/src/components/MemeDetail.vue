<template>
  <div id="meme-detail" class="mx-4">
    <div class="flex flex-row items-center justify-between">
      <h1 class="py-2 pl-6 tracking-wide">{{ title }}</h1>
      <small class="pr-8"><em>{{ created_at | fromNow }}</em></small>
    </div>
    <img :src="url" :alt="title" class="px-6 flex mx-auto"/>
    <div id="tags" class="ml-6 mt-1">
      <meme-tag
        v-for="(tag, index) in tags"
        :key="index"
        :tag="tag.tag"
      />
    </div>
  </div>
</template>

<script>
import MemeTag from '@/components/MemeTag'
import moment from 'moment'

export default {
  name: 'MemeDetail',
  props: {
    url: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    created_at: {
      required: true,
      type: String
    },
    tags: {
        required: false,
        type: Array,
        default() {
            return []
        }
    }
  },
  filters: {
    fromNow(date) {
      return moment(date).fromNow()
    }
  },
  components: {
      MemeTag
  }
}
</script>
