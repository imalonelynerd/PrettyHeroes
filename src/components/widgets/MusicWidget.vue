<script setup>
import { onBeforeMount, ref } from 'vue'
import ListenButton from '@/components/special/ListenButton.vue'
import { changeLoc } from '@/assets/js/linkTools.js'

const props = defineProps({
  ytUrl: {
    type: String,
    required: true
  },
  fontColor: {
    type: String,
    default: 'var(--text)'
  }
})

const isError = ref(false)
const fetchedData = ref({
  thumbnail_url: '',
  title: '',
  author_name: '',
  author_url: '',
  provider_name: '',
  provider_url: '',
  url: ''
})

onBeforeMount(async () => {
  let res = await fetch('https://noembed.com/embed?url=' + props.ytUrl)
  if (!res.ok) {
    isError.value = true
    return
  }
  let json = await res.json()
  console.log(json)
  let test = (tags) => {
    for (let e in tags) {
      if (!Object.prototype.hasOwnProperty.call(json, tags[e])) {
        return false
      }
    }
    return true
  }
  if (!test(Object.keys(fetchedData.value))) {
    isError.value = true
    return
  }
  fetchedData.value = json
})
</script>

<template>
  <h1 v-if="isError">Error</h1>
  <div v-else class="MusicWidget">
    <img
      :src="fetchedData.thumbnail_url"
      :alt="fetchedData.thumbnail_url"
    />
    <!-- .replace('awa', 'maxresdefault') -->
    <div>
      <h1>{{ fetchedData.title }}</h1>
      <p>
        <a :href="fetchedData.author_url">{{ fetchedData.author_name }}</a> - from
        <a :href="fetchedData.provider_url">{{ fetchedData.provider_name }}</a>
      </p>
    </div>
    <ListenButton @click="changeLoc(fetchedData.url)" />
  </div>
</template>

<style lang="sass">
.MusicWidget
  display: flex
  flex-direction: row
  justify-content: stretch
  align-items: stretch
  gap: 24px
  color: v-bind(fontColor)

  *
    margin: 0

  > img
    width: 96px
    height: 96px
    border-radius: var(--radius-widget)
    object-fit: cover

  > div:first-of-type
    flex: 1 1
    display: flex
    flex-direction: column
    justify-content: start
    align-items: start
    gap: 4px

    a
      font-weight: 600

  > div:last-of-type
    align-self: end
</style>
