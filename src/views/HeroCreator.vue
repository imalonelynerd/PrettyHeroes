<script setup lang="ts">
import PrettyStringInput from '@/components/inputs/PrettyStringInput.vue'
import { type Ref, ref } from 'vue'
import { getGenericHero, type Hero } from '@/assets/ts/hero/hero-factory'
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
import { Highlighter as HL } from '@/assets/ts/common-types'
import PrettyOptionalInput from '@/components/inputs/PrettyOptionalInput.vue'
import PrettyArrayInput from '@/components/inputs/PrettyArrayInput.vue'
import PrettyField from '@/components/inputs/PrettyField.vue'
import RowInputsContainer from '@/components/editor/RowInputsContainer.vue'

const heroRef: Ref<Hero> = ref(getGenericHero())
const highlightRef: Ref<HL> = ref(HL.NONE)

const changeHighlight = (hl: HL) => (highlightRef.value = hl === highlightRef.value ? HL.NONE : hl)
</script>

<template>
  <CreatorFrame>
    <InputsContainer>
      <InputsSet title="Title Widget" @highlightRequested="changeHighlight(HL.TITLE)">
        <PrettyImageInput
          :input="heroRef.title.image"
          placeholder="Avatar"
          @inputUpdated="(e) =&gt; (heroRef.title.image = e)"
        ></PrettyImageInput>
        <PrettyStringInput
          placeholder="Title"
          :input="heroRef.title.title"
          @inputUpdated="(e) =&gt; (heroRef.title.title = e)"
        ></PrettyStringInput>
        <RowInputsContainer :columns="2">
          <PrettyOptionalInput
            placeholder="Subtitle"
            :input="heroRef.title.subtitle"
            @inputBlocked="() =&gt; (heroRef.title.subtitle = '')"
            @inputUpdated="(e) =&gt; (heroRef.title.subtitle = e)"
          ></PrettyOptionalInput>
          <PrettyOptionalInput
            placeholder="Age"
            :input="heroRef.title.age"
            @inputBlocked="() =&gt; (heroRef.title.age = '')"
            @inputUpdated="(e) =&gt; (heroRef.title.age = e)"
          ></PrettyOptionalInput>
        </RowInputsContainer>
        <PrettyOptionalInput
          :input="heroRef.title.pronouns"
          placeholder="Pronouns"
          @inputBlocked="() =&gt; (heroRef.title.pronouns = '')"
          @inputUpdated="(e) =&gt; (heroRef.title.pronouns = e)"
        ></PrettyOptionalInput>
        <PrettyOptionalInput
          :input="heroRef.title.catchphrase"
          placeholder="Catchphrase"
          @inputBlocked="() =&gt; (heroRef.title.catchphrase = '')"
          @inputUpdated="(e) =&gt; (heroRef.title.catchphrase = e)"
        ></PrettyOptionalInput>
      </InputsSet>
      <InputsSet title="About Widget" @highlightRequested="changeHighlight(HL.ABOUT)">
        <RowInputsContainer :columns="2">
          <PrettyOptionalInput
            :input="heroRef.about.work"
            placeholder="Work"
            @inputBlocked="() =&gt; (heroRef.about.work = '')"
            @inputUpdated="(e) =&gt; (heroRef.about.work = e)"
          ></PrettyOptionalInput>
          <PrettyOptionalInput
            :input="heroRef.about.location"
            placeholder="Location"
            @inputBlocked="() =&gt; (heroRef.about.location = '')"
            @inputUpdated="(e) =&gt; (heroRef.about.location = e)"
          ></PrettyOptionalInput>
          <PrettyOptionalInput
            :input="heroRef.about.timezone"
            placeholder="Timezone"
            @inputBlocked="() =&gt; (heroRef.about.timezone = '')"
            @inputUpdated="(e) =&gt; (heroRef.about.timezone = e)"
          ></PrettyOptionalInput>
          <PrettyOptionalInput
            :input="heroRef.about.status"
            placeholder="Status"
            @inputBlocked="() =&gt; (heroRef.about.status = '')"
            @inputUpdated="(e) =&gt; (heroRef.about.status = e)"
          ></PrettyOptionalInput>
        </RowInputsContainer>
        <PrettyArrayInput
          :input="heroRef.about.flags"
          placeholder="Flags"
          element-placeholder="Flag"
          @listExtended="() =&gt; heroRef.about.flags.push('')"
          @listReduced="() =&gt; heroRef.about.flags.pop()"
          @listUpdated="(v, i) =&gt; heroRef.about.flags[i] = v"
        ></PrettyArrayInput>
        <PrettyOptionalInput
          :input="heroRef.about.propage"
          placeholder="pronouns.page account"
          @inputBlocked="() =&gt; (heroRef.about.propage = '')"
          @inputUpdated="(e) =&gt; (heroRef.about.propage = e)"
        ></PrettyOptionalInput>
      </InputsSet>
      <InputsSet title='"About Me" Widget' @highlightRequested="changeHighlight(HL.DESC)">
        <PrettyField
          :input="heroRef.about.desc"
          @fieldUpdated="(e) =&gt; heroRef.about.desc = e"
          placeholder="Description"
          :rows="10"
        ></PrettyField>
      </InputsSet>
      <InputsSet title="Videos Widget" @highlightRequested="changeHighlight(HL.VIDEOS)"></InputsSet>
      <InputsSet title="Links Widget" @highlightRequested="changeHighlight(HL.LINKS)"></InputsSet>
      <InputsSet title="Colors" :has-highlight="false"></InputsSet>
      <InputsSet title="Extras" :has-highlight="false"></InputsSet>
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
      <ExtrasSection :extras-section="heroRef.extras"></ExtrasSection>
      <FooterSection></FooterSection>
    </DummyHero>
  </CreatorFrame>
</template>
