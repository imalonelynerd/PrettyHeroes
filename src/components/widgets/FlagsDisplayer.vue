<script setup>
import ItemElement from '@/components/elements/ItemElement.vue'
import ItemContainer from '@/components/widgets/ItemContainer.vue'
import PronounsButton from '@/components/special/PronounsButton.vue'

import flagsMatches from '@/assets/json/flagsMatches.json'

import { changeLocation } from '@/assets/js/linkTools.js'

defineProps({
  flags: {
    type: Array,
    required: true
  },
  background: {
    type: String,
    default: 'var(--widget)'
  },
  fontColor: {
    type: String,
    default: 'var(--text)'
  },
  pronounsUser: {
    type: String,
    default: ''
  }
})

function getFlag(tag) {
  if (tag in flagsMatches) {
    return flagsMatches[tag]
  }
  return {
    img: '/flags/unknown.png',
    name: tag
  }
}
</script>

<template>
  <ItemContainer>
    <ItemElement :background="background" :font-color="fontColor" v-for="(e, i) in flags" :key="i">
      <img :src="getFlag(e).img" :alt="getFlag(e).img" />
      <p>{{ getFlag(e).name }}</p>
    </ItemElement>
    <PronounsButton
      v-if="pronounsUser !== ''"
      @click="changeLocation('https://pronouns.page/@' + pronounsUser)"
    />
  </ItemContainer>
</template>
