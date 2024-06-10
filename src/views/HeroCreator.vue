<script setup lang="ts">
import PrettyStringInput from '@/components/inputs/PrettyStringInput.vue'
import { type Ref, ref } from 'vue'
import { getGenericHero, type Hero } from '@/assets/code/hero/hero-factory'
import PrettyImageInput from '@/components/inputs/PrettyImageInput.vue'
import InputsContainer from '@/components/editor/InputsContainer.vue'
import CreatorFrame from '@/components/frames/CreatorFrame.vue'
import DummyHero from '@/components/editor/DummyHero.vue'
import LinksSection from '@/components/sections/LinksSection.vue'
import VideosSection from '@/components/sections/VideosSection.vue'
import TitleSection from '@/components/sections/TitleSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import DescSection from '@/components/sections/DescSection.vue'
import ExtrasSection from '@/components/sections/ExtrasSection.vue'
import InputsSet from '@/components/editor/InputsSet.vue'
import { Highlighter as HL } from '@/assets/code/common-types'
import PrettyOptionalInput from '@/components/inputs/PrettyOptionalInput.vue'
import PrettyArrayInput from '@/components/inputs/PrettyArrayInput.vue'
import PrettyField from '@/components/inputs/PrettyField.vue'
import RowInputsContainer from '@/components/editor/RowInputsContainer.vue'
import PrettyToggle from '@/components/inputs/PrettyToggle.vue'

const heroRef: Ref<Hero> = ref(getGenericHero())
const highlightRef: Ref<HL> = ref(HL.NONE)

const changeHighlight = (hl: HL) => (highlightRef.value = hl === highlightRef.value ? HL.NONE : hl)

let savedDesc = {
  link: '',
  desc: ''
}

const defineAsExternal = () => {
  if (heroRef.value.about.isExternal) {
    heroRef.value.about.isExternal = false
    savedDesc.link = heroRef.value.about.desc
    heroRef.value.about.desc = savedDesc.desc
  } else {
    heroRef.value.about.isExternal = true
    savedDesc.desc = heroRef.value.about.desc
    heroRef.value.about.desc = savedDesc.link
  }
}
</script>

<template>
  <CreatorFrame>
    <InputsContainer>
      <InputsSet title="Title Widget" @highlightRequested="changeHighlight(HL.TITLE)">
        <PrettyImageInput
          :input="heroRef.title.image"
          placeholder="Avatar"
          @inputUpdated="(e) => (heroRef.title.image = e)"
        ></PrettyImageInput>
        <PrettyStringInput
          placeholder="Title"
          :input="heroRef.title.title"
          @inputUpdated="(e) => (heroRef.title.title = e)"
        ></PrettyStringInput>
        <RowInputsContainer :columns="2">
          <PrettyOptionalInput
            placeholder="Subtitle"
            :input="heroRef.title.subtitle"
            @inputBlocked="() => (heroRef.title.subtitle = '')"
            @inputUpdated="(e) => (heroRef.title.subtitle = e)"
          ></PrettyOptionalInput>
          <PrettyOptionalInput
            placeholder="Age"
            :input="heroRef.title.age"
            @inputBlocked="() => (heroRef.title.age = '')"
            @inputUpdated="(e) => (heroRef.title.age = e)"
          ></PrettyOptionalInput>
        </RowInputsContainer>
        <PrettyOptionalInput
          :input="heroRef.title.pronouns"
          placeholder="Pronouns"
          @inputBlocked="() => (heroRef.title.pronouns = '')"
          @inputUpdated="(e) => (heroRef.title.pronouns = e)"
        ></PrettyOptionalInput>
        <PrettyOptionalInput
          :input="heroRef.title.catchphrase"
          placeholder="Catchphrase"
          @inputBlocked="() => (heroRef.title.catchphrase = '')"
          @inputUpdated="(e) => (heroRef.title.catchphrase = e)"
        ></PrettyOptionalInput>
      </InputsSet>
      <InputsSet title="About Widget" @highlightRequested="changeHighlight(HL.ABOUT)">
        <RowInputsContainer :columns="2">
          <PrettyOptionalInput
            :input="heroRef.about.work"
            placeholder="Work"
            @inputBlocked="() => (heroRef.about.work = '')"
            @inputUpdated="(e) => (heroRef.about.work = e)"
          ></PrettyOptionalInput>
          <PrettyOptionalInput
            :input="heroRef.about.location"
            placeholder="Location"
            @inputBlocked="() => (heroRef.about.location = '')"
            @inputUpdated="(e) => (heroRef.about.location = e)"
          ></PrettyOptionalInput>
          <PrettyOptionalInput
            :input="heroRef.about.timezone"
            placeholder="Timezone"
            @inputBlocked="() => (heroRef.about.timezone = '')"
            @inputUpdated="(e) => (heroRef.about.timezone = e)"
          ></PrettyOptionalInput>
          <PrettyOptionalInput
            :input="heroRef.about.status"
            placeholder="Status"
            @inputBlocked="() => (heroRef.about.status = '')"
            @inputUpdated="(e) => (heroRef.about.status = e)"
          ></PrettyOptionalInput>
        </RowInputsContainer>
        <PrettyArrayInput
          :input="heroRef.about.flags"
          placeholder="Flags"
          element-placeholder="Flag"
          @listExtended="() => heroRef.about.flags.push('')"
          @listReduced="() => heroRef.about.flags.pop()"
          @listUpdated="(v, i) => (heroRef.about.flags[i] = v)"
        ></PrettyArrayInput>
        <PrettyOptionalInput
          :input="heroRef.about.proPage"
          placeholder="pronouns.page account"
          @inputBlocked="() => (heroRef.about.proPage = '')"
          @inputUpdated="(e) => (heroRef.about.proPage = e)"
        ></PrettyOptionalInput>
      </InputsSet>
      <InputsSet title='"About Me" Widget' @highlightRequested="changeHighlight(HL.DESC)">
        <PrettyToggle
          :input="heroRef.about.isExternal"
          @toggleUpdated="() => defineAsExternal()"
          placeholder="Get description from external source"
        />
        <PrettyStringInput
          v-if="heroRef.about.isExternal"
          @inputUpdated="(e) => (heroRef.about.desc = e)"
          placeholder="Description source"
          :input="heroRef.about.desc"
        />
        <PrettyField
          v-else
          :input="heroRef.about.desc"
          @fieldUpdated="(e) => (heroRef.about.desc = e)"
          placeholder="Description"
          :rows="10"
        />
      </InputsSet>
      <InputsSet title="Videos Widget" @highlightRequested="changeHighlight(HL.VIDEOS)"></InputsSet>
      <InputsSet title="Links Widget" @highlightRequested="changeHighlight(HL.LINKS)"></InputsSet>
      <InputsSet title="Colors" :has-highlight="false"></InputsSet>
      <InputsSet title="Extras" @highlightRequested="changeHighlight(HL.EXTRAS)">
        <PrettyToggle
          placeholder="Enable sharing"
          :input="heroRef.extras.enableSharing"
          @toggleUpdated="() => (heroRef.extras.enableSharing = !heroRef.extras.enableSharing)"
        />
        <PrettyToggle
          placeholder="Enable snapshots"
          :input="heroRef.extras.enableSnapshot"
          @toggleUpdated="() => (heroRef.extras.enableSnapshot = !heroRef.extras.enableSnapshot)"
        />
      </InputsSet>
    </InputsContainer>
    <DummyHero>
      <TitleSection
        :title-section="heroRef.title"
        :is-highlighted="highlightRef === HL.TITLE"
      ></TitleSection>
      <AboutSection
        :about-section="heroRef.about"
        :is-highlighted="highlightRef === HL.ABOUT"
      ></AboutSection>
      <DescSection
        :about-section="heroRef.about"
        :is-highlighted="highlightRef === HL.DESC"
      ></DescSection>
      <VideosSection
        :online-section="heroRef.online"
        :is-highlighted="highlightRef === HL.VIDEOS"
      ></VideosSection>
      <LinksSection
        :online-section="heroRef.online"
        :is-highlighted="highlightRef === HL.LINKS"
      ></LinksSection>
      <ExtrasSection
        :extras-section="heroRef.extras"
        :is-highlighted="highlightRef === HL.EXTRAS"
      />
      <FooterSection />
    </DummyHero>
  </CreatorFrame>
</template>
