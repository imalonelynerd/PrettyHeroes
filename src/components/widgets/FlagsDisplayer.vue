<script setup lang="ts">
import ItemElement from '@/components/elements/ItemElement.vue'
import ItemContainer from '@/components/widgets/ItemContainer.vue'
import PronounsButton from '@/components/special/PronounsButton.vue'
import flagMatches from '@/assets/json/flag-matches.json'

import { changeLocation, isValidColorName } from '@/assets/ts/common-tools'
import { type PrideFlag } from '@/assets/ts/common-types'

defineProps({
  flags: {
    type: Array<string>,
    required: true
  },
  background: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--widget)'
  },
  fontColor: {
    type: String,
    validator: (value: string): boolean => isValidColorName(value),
    default: 'var(--text)'
  },
  pronounsUser: {
    type: String,
    default: ''
  }
})

const flagsMap: Map<string, PrideFlag> = new Map(Object.entries(flagMatches))

const getFlag = (tag: string): PrideFlag => {
  let matchedFlag = flagsMap.get(tag)
  return matchedFlag
    ? matchedFlag
    : {
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
