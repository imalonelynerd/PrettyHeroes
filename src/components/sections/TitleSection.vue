<script setup>
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleWidget from '@/components/widgets/TitleWidget.vue'

defineProps({
  titleSection: {
    type: Object,
    required: true
  },
  colors: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <WidgetContainer :background="colors.background">
    <TitleWidget
      :image="titleSection.image"
      :firstName="titleSection.firstName"
      :lastName="titleSection.lastName"
      :age="titleSection.age"
      :catchphrase="titleSection.catchphrase"
      :pronouns="titleSection.pronouns"
      :font-color="colors.text"
      :title-color="colors.title"
    />
  </WidgetContainer>
</template>
