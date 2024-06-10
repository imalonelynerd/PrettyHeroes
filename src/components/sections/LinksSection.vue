<script setup lang="ts">
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'
import GridContainer from '@/components/widgets/GridContainer.vue'
import GridElement from '@/components/elements/GridElement.vue'
import { changeLocation } from '@/assets/code/common-tools'
import type { PropType } from 'vue'
import type { OnlineSection } from '@/assets/code/hero/hero-factory'

defineProps({
  onlineSection: {
    type: Object as PropType<OnlineSection>,
    required: true
  },
  isHighlighted: {
    type: Boolean,
    default: false
  }
})

const hasLinks = (section) => section.links.length !== 0
</script>

<template>
  <WidgetContainer
    :background="$colorPalette.background"
    v-if="hasLinks(onlineSection)"
    :class="{ highlighted: isHighlighted }"
  >
    <TitleContainer title="Links" :font-color="$colorPalette.text">
      <GridContainer>
        <GridElement
          v-for="(e, i) in onlineSection.links"
          :title="e.url"
          :key="i"
          :font-color="$colorPalette.text"
          :background="$colorPalette.widget"
          :icon-color="$colorPalette.title"
          :hover-color="$colorPalette.hover"
          :is-clickable="true"
          @click="changeLocation(e.url)"
          ><img src="/icons/link.png" alt="Link" />
          <p>{{ e.title }}</p>
        </GridElement>
      </GridContainer>
    </TitleContainer>
  </WidgetContainer>
</template>

<style scoped lang="sass">
.WidgetContainer
  outline: transparent solid 4px

  &.highlighted
    outline-color: var(--hover)
</style>
