<script setup lang="ts">
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'
import ItemContainer from '@/components/widgets/ItemContainer.vue'
import PronounceButton from '@/components/special/PronounceButton.vue'
import ItemElement from '@/components/elements/ItemElement.vue'
import type { PropType } from 'vue'
import type { ExtrasSection } from '@/assets/ts/hero/hero-factory'

defineProps({
  extrasSection: {
    type: Object as PropType<ExtrasSection>,
    required: true
  },
  fromPronounce: {
    type: Boolean,
    default: false
  },
  isHighlighted: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <WidgetContainer :background="$colorPalette.background" :class="{ highlighted: isHighlighted }">
    <TitleContainer title="Extras" :font-color="$colorPalette.text">
      <ItemContainer>
        <PronounceButton v-if="fromPronounce"></PronounceButton>
        <ItemElement
          :font-color="$colorPalette.text"
          :background="$colorPalette.widget"
          :icon-color="$colorPalette.title"
          :hover-color="$colorPalette.hover"
          :is-clickable="true"
          ><img src="/icons/share.png" alt="Share" />
          <p>Share</p>
        </ItemElement>
        <ItemElement
          :font-color="$colorPalette.text"
          :background="$colorPalette.widget"
          :icon-color="$colorPalette.title"
          :hover-color="$colorPalette.hover"
          :is-clickable="true"
          ><img src="/icons/file.png" alt="Source" />
          <p>See source file</p>
        </ItemElement>
        <ItemElement
          v-if="extrasSection.enableSnapshot"
          :font-color="$colorPalette.text"
          :background="$colorPalette.widget"
          :icon-color="$colorPalette.title"
          :hover-color="$colorPalette.hover"
          :is-clickable="true"
          ><img src="/icons/file.png" alt="Snapshot" />
          <p>Get snapshot</p>
        </ItemElement>
      </ItemContainer>
    </TitleContainer>
  </WidgetContainer>
</template>

<style scoped lang="sass">
.WidgetContainer
  outline: transparent solid 4px

  &.highlighted
    outline-color: var(--hover)
</style>
