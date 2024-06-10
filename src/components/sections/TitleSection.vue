<script setup lang="ts">
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleWidget from '@/components/widgets/TitleWidget.vue'
import type { PropType } from 'vue'
import type { TitleSection } from '@/assets/ts/hero/hero-factory'

defineProps({
  titleSection: {
    type: Object as PropType<TitleSection>,
    required: true
  },
  isHighlighted: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <WidgetContainer :background="$colorPalette.background" :class="{ highlighted: isHighlighted }">
    <TitleWidget
      :image="titleSection.image"
      :title="titleSection.title"
      :subtitle="titleSection.subtitle"
      :age="titleSection.age"
      :catchphrase="titleSection.catchphrase"
      :pronouns="titleSection.pronouns"
      :font-color="$colorPalette.text"
      :title-color="$colorPalette.title"
    ></TitleWidget>
  </WidgetContainer>
</template>

<style scoped lang="sass">
.WidgetContainer
  outline: transparent solid 4px

  &.highlighted
    outline-color: var(--hover)
</style>
