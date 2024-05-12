<script setup>
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'
import GridContainer from '@/components/widgets/GridContainer.vue'
import GridElement from '@/components/elements/GridElement.vue'
import { changeLocation } from '@/assets/js/linkTools.js'

defineProps({
  onlineSection: {
    type: Object,
    required: true
  },
  colors: {
    type: Object,
    required: true
  }
})

const hasLinks = (section) => section.links.length !== 0
</script>

<template>
  <WidgetContainer :background="colors.background" v-if="hasLinks(onlineSection)">
    <TitleContainer title="Links" :font-color="colors.text">
      <GridContainer>
        <GridElement
          v-for="(e, i) in onlineSection.links"
          :key="i"
          :font-color="onlineSection.text"
          :background="colors.widget"
          :icon-color="colors.title"
          :hover-color="colors.hover"
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
