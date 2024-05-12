<script setup>
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'
import ItemContainer from '@/components/widgets/ItemContainer.vue'
import FlagDisplayer from '@/components/widgets/FlagsDisplayer.vue'
import ItemElement from '@/components/elements/ItemElement.vue'

defineProps({
  aboutSection: {
    type: Object,
    required: true
  },
  colors: {
    type: Object,
    required: true
  }
})

const hasInformations = (section) =>
  section.work !== '' || section.location !== '' || section.timezone !== '' || section.status !== ''

const hasFlags = (aboutSection) => aboutSection.flags.length > 0 || aboutSection.propage !== ''
</script>

<template>
  <WidgetContainer
    :background="colors.background"
    v-if="hasInformations(aboutSection) || hasFlags(aboutSection)"
  >
    <TitleContainer
      title="General information"
      :font-color="colors.text"
      v-if="hasInformations(aboutSection)"
    >
      <ItemContainer>
        <ItemElement
          v-if="aboutSection.work !== ''"
          :font-color="colors.text"
          :background="colors.widget"
          :icon-color="colors.title"
        >
          <img src="/icons/work.png" alt="Work" />
          <p>{{ aboutSection.work }}</p>
        </ItemElement>
        <ItemElement
          v-if="aboutSection.location !== ''"
          :font-color="colors.text"
          :background="colors.widget"
          :icon-color="colors.title"
        >
          <img src="/icons/location.png" alt="Location" />
          <p>{{ aboutSection.location }}</p>
        </ItemElement>
        <ItemElement
          v-if="aboutSection.timezone !== ''"
          :font-color="colors.text"
          :background="colors.widget"
          :icon-color="colors.title"
        >
          <img src="/icons/timezone.png" alt="Timezone" />
          <p>{{ aboutSection.timezone }}</p>
        </ItemElement>
        <ItemElement
          v-if="aboutSection.status !== ''"
          :font-color="colors.text"
          :background="colors.widget"
          :icon-color="colors.title"
        >
          <img src="/icons/status.png" alt="Status" />
          <p>{{ aboutSection.status }}</p>
        </ItemElement>
      </ItemContainer>
    </TitleContainer>
    <TitleContainer title="Terms" :font-color="colors.text" v-if="hasFlags(aboutSection)">
      <FlagDisplayer
        :flags="aboutSection.flags"
        :font-color="colors.text"
        :background="colors.widget"
        :pronouns-user="aboutSection.propage"
      />
    </TitleContainer>
  </WidgetContainer>
</template>
