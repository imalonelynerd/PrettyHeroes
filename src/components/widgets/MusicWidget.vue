<script setup lang="ts">
import ListenButton from '@/components/special/ListenButton.vue'

import { type Ref, ref } from 'vue'
import { changeLocation, isValidColorName } from '@/assets/ts/common-tools'
import axios from 'axios'
import type { EmbedFetchedData } from '@/assets/ts/common-types'

const props = defineProps({
  ytUrl: {
    type: String,
    required: true
  },
  fontColor: {
    type: String,
    validator: (value: string) => isValidColorName(value),
    default: 'var(--text)'
  }
})

const isError = ref(false)

let fetchedData: Ref<EmbedFetchedData> = ref({})

let res = await axios.get('https://noembed.com/embed?url=' + props.ytUrl)
if (res.status !== 200) isError.value = true
else Object.assign(fetchedData.value, res.data)
</script>

<template>
  <h1 v-if="isError">Error</h1>
  <div class="MusicWidget" v-else>
    <img :src="fetchedData.thumbnail_url" :alt="fetchedData.thumbnail_url" />
    <div>
      <h1>{{ fetchedData.title }}</h1>
      <p>
        <a :href="fetchedData.author_url">{{ fetchedData.author_name }}</a
        >, from<a :href="fetchedData.provider_url">{{ ' ' + fetchedData.provider_name }}</a>
      </p>
    </div>
    <ListenButton
      @click="changeLocation(fetchedData.url ? fetchedData.url : '')"
      :title="fetchedData.url"
    ></ListenButton>
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
