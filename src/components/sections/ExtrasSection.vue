<script setup>
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'
import ItemContainer from '@/components/widgets/ItemContainer.vue'
import PronounceButton from '@/components/special/PronounceButton.vue'
import ItemElement from '@/components/elements/ItemElement.vue'

defineProps({
  extrasSection: {
    type: Object,
    required: true
  },
  colors: {
    type: Object,
    required: true
  },
  fromPronounce: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <WidgetContainer :background="colors.background">
    <TitleContainer title="Extras" :font-color="colors.text">
      <ItemContainer>
        <PronounceButton v-if="fromPronounce" />
        <ItemElement
          :font-color="colors.text"
          :background="colors.widget"
          :icon-color="colors.title"
          :hover-color="colors.hover"
          :is-clickable="true"
        >
          <img src="/icons/share.png" alt="Share" />
          <p>Share</p>
        </ItemElement>
        <ItemElement
          :font-color="colors.text"
          :background="colors.widget"
          :icon-color="colors.title"
          :hover-color="colors.hover"
          :is-clickable="true"
        >
          <img src="/icons/file.png" alt="Source" />
          <p>See source file</p>
        </ItemElement>
        <ItemElement
          v-if="extrasSection.enableSnapshot"
          :font-color="colors.text"
          :background="colors.widget"
          :icon-color="colors.title"
          :hover-color="colors.hover"
          :is-clickable="true"
        >
          <img src="/icons/file.png" alt="Snapshot" />
          <p>Get snapshot</p>
        </ItemElement>
      </ItemContainer>
    </TitleContainer>
  </WidgetContainer>
</template>
