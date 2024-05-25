<script setup lang="ts">
import HeroContainer from '@/components/HeroContainer.vue'
import TitleSection from '@/components/sections/TitleSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import DescSection from '@/components/sections/DescSection.vue'
import VideosSection from '@/components/sections/VideosSection.vue'
import LinksSection from '@/components/sections/LinksSection.vue'
import ExtrasSection from '@/components/sections/ExtrasSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import { getGenericHero, type Hero } from '@/assets/ts/hero/hero-factory'

import { type Ref, ref } from 'vue'
import { useRoute } from 'vue-router'
import { convertDataToObject, fetchData, convertObjectToHero } from '@/assets/ts/hero/hero-importer'
import { getColorPalette } from '@/assets/ts/color-palette'

let hero: Ref

//TODO : temporary
const userTag = useRoute().params.user
const url = `https://raw.githubusercontent.com/${userTag}/${userTag}/main/hero.yml`

let res: string
let obj: Object
let convertedHero: Hero

try {
  res = await fetchData(url)
  obj = convertDataToObject(res)
  convertedHero = convertObjectToHero(obj)
  hero = ref(convertedHero)
  getColorPalette().fromHeroColors(convertedHero.colors)
} catch (err: any) {
  console.log(err)
  hero = ref(getGenericHero())
  getColorPalette().fromHeroColors(getGenericHero().colors)
}
</script>

<template>
  <HeroContainer :background="hero.colors.bgimg">
    <TitleSection :title-section="hero.title" />
    <AboutSection :about-section="hero.about" />
    <DescSection :about-section="hero.about" />
    <VideosSection :online-section="hero.online" />
    <LinksSection :online-section="hero.online" />
    <ExtrasSection :extras-section="hero.extras" />
    <FooterSection />
  </HeroContainer>
</template>
