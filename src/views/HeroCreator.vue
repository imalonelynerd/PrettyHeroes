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

const heroRef: Ref<Hero> = ref(getGenericHero())
</script>

<template>
  <CreatorFrame>
    <InputsContainer>
      <InputsSet title="About Section">
        <PrettyStringInput
          placeholder="Title"
          :input="heroRef.title.title"
          @inputUpdated="(e) => (heroRef.title.title = e)"
        />
        <PrettyStringInput
          placeholder="Subtitle - optional"
          :input="heroRef.title.subtitle"
          @inputUpdated="(e) => (heroRef.title.subtitle = e)"
        />
        <PrettyStringInput
          placeholder="Age - optional"
          :input="heroRef.title.age"
          @inputUpdated="(e) => (heroRef.title.age = e)"
        />
        <PrettyImageInput
          :input="heroRef.title.image"
          placeholder="Avatar"
          @inputUpdated="(e) => (heroRef.title.image = e)"
        />
        <PrettyImageInput
          :input="heroRef.title.image"
          placeholder="Avatar"
          @inputUpdated="(e) => (heroRef.title.image = e)"
        />
      </InputsSet>
      <InputsSet title="About Section">
        <PrettyStringInput
          placeholder="Title"
          :input="heroRef.title.title"
          @inputUpdated="(e) => (heroRef.title.title = e)"
        />
        <PrettyStringInput
          placeholder="Subtitle -"
          :input="heroRef.title.subtitle"
          @inputUpdated="(e) => (heroRef.title.subtitle = e)"
        />
        <PrettyStringInput
          placeholder="Age"
          :input="heroRef.title.age"
          @inputUpdated="(e) => (heroRef.title.age = e)"
        />
        <PrettyImageInput
          :input="heroRef.title.image"
          placeholder="Avatar"
          @inputUpdated="(e) => (heroRef.title.image = e)"
        />
        <PrettyImageInput
          :input="heroRef.title.image"
          placeholder="Avatar"
          @inputUpdated="(e) => (heroRef.title.image = e)"
        />
      </InputsSet>
    </InputsContainer>
    <DummyHero>
      <TitleSection :title-section="heroRef.title" />
      <AboutSection :about-section="heroRef.about" />
      <DescSection :about-section="heroRef.about" />
      <VideosSection :online-section="heroRef.online" />
      <LinksSection :online-section="heroRef.online" />
      <ExtrasSection :extras-section="heroRef.extras" />
      <FooterSection />
    </DummyHero>
  </CreatorFrame>
</template>
