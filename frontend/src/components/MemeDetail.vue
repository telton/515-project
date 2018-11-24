<template>
  <div>
    <div class="flex flex-row items-center justify-between">
      <h1 class="py-2 pl-6 tracking-wide">{{ title }}</h1>
      <small class="pr-8"><em>{{ created_at | fromNow }}</em></small>
    </div>
    <img :src="url" :alt="title" class="px-6 flex mx-auto" />
  </div>
</template>

<script>
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
      type: Date
    }
  },
  filters: {
    fromNow(date) {
      return moment(date).fromNow()
    }
  }
}
</script>
