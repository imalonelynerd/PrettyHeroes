<script setup lang="ts">
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'
import GridContainer from '@/components/widgets/GridContainer.vue'
import GridElement from '@/components/elements/GridElement.vue'
import { changeLocation } from '@/assets/ts/common-tools'
import type { PropType } from 'vue'
import type { OnlineSection } from '@/assets/ts/hero/hero-factory'

defineProps({
  onlineSection: {
    type: Object as PropType<OnlineSection>,
    required: true
  }
})

const hasLinks = (section) => section.links.length !== 0
</script>

<template>
  <WidgetContainer :background="$colorPalette.background" v-if="hasLinks(onlineSection)">
    <TitleContainer title="Links" :font-color="$colorPalette.text">
      <GridContainer>
        <GridElement
          v-for="(e, i) in onlineSection.links"
          :key="i"
          :font-color="onlineSection.text"
          :background="$colorPalette.widget"
          :icon-color="$colorPalette.title"
          :hover-color="$colorPalette.hover"
          :is-clickable="true"
          @click="changeLocation(e.url)"
        >
          <img src="/icons/link.png" alt="Link" />
          <p>{{ e.title }}</p>
        </GridElement>
      </GridContainer>
    </TitleContainer>
  </WidgetContainer>
</template>
