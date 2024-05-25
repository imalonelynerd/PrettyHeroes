<script setup lang="ts">
import WidgetContainer from '@/components/containers/WidgetContainer.vue'
import TitleContainer from '@/components/containers/TitleContainer.vue'
import ItemContainer from '@/components/widgets/ItemContainer.vue'
import FlagDisplayer from '@/components/widgets/FlagsDisplayer.vue'
import ItemElement from '@/components/elements/ItemElement.vue'
import type { AboutSection } from '@/assets/ts/hero/hero-factory'
import type { PropType } from 'vue'

defineProps({
  aboutSection: {
    type: Object as PropType<AboutSection>,
    required: true
  }
})

const hasInformations = (section: AboutSection) =>
  section.work !== '' || section.location !== '' || section.timezone !== '' || section.status !== ''

const hasFlags = (aboutSection: AboutSection) =>
  aboutSection.flags.length > 0 || aboutSection.propage !== ''
</script>

<template>
  <WidgetContainer
    :background="$colorPalette.background"
    v-if="hasInformations(aboutSection) || hasFlags(aboutSection)"
  >
    <TitleContainer
      title="General information"
      :font-color="$colorPalette.text"
      v-if="hasInformations(aboutSection)"
    >
      <ItemContainer>
        <ItemElement
          v-if="aboutSection.work !== ''"
          :font-color="$colorPalette.text"
          :background="$colorPalette.widget"
          :icon-color="$colorPalette.title"
        >
          <img src="/icons/work.png" alt="Work" />
          <p>{{ aboutSection.work }}</p>
        </ItemElement>
        <ItemElement
          v-if="aboutSection.location !== ''"
          :font-color="$colorPalette.text"
          :background="$colorPalette.widget"
          :icon-color="$colorPalette.title"
        >
          <img src="/icons/location.png" alt="Location" />
          <p>{{ aboutSection.location }}</p>
        </ItemElement>
        <ItemElement
          v-if="aboutSection.timezone !== ''"
          :font-color="$colorPalette.text"
          :background="$colorPalette.widget"
          :icon-color="$colorPalette.title"
        >
          <img src="/icons/timezone.png" alt="Timezone" />
          <p>{{ aboutSection.timezone }}</p>
        </ItemElement>
        <ItemElement
          v-if="aboutSection.status !== ''"
          :font-color="$colorPalette.text"
          :background="$colorPalette.widget"
          :icon-color="$colorPalette.title"
        >
          <img src="/icons/status.png" alt="Status" />
          <p>{{ aboutSection.status }}</p>
        </ItemElement>
      </ItemContainer>
    </TitleContainer>
    <TitleContainer title="Terms" :font-color="$colorPalette.text" v-if="hasFlags(aboutSection)">
      <FlagDisplayer
        :flags="aboutSection.flags"
        :font-color="$colorPalette.text"
        :background="$colorPalette.widget"
        :pronouns-user="aboutSection.propage"
      />
    </TitleContainer>
  </WidgetContainer>
</template>
