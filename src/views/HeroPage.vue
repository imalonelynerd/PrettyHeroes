<script setup lang="ts">
import HeroFrame from '@/components/frames/HeroFrame.vue'
import TitleSection from '@/components/sections/TitleSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import DescSection from '@/components/sections/DescSection.vue'
import VideosSection from '@/components/sections/VideosSection.vue'
import LinksSection from '@/components/sections/LinksSection.vue'
import ExtrasSection from '@/components/sections/ExtrasSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import { type Hero } from '@/assets/ts/hero/hero-factory'
import FetchableUrls from '@/assets/json/fetchable-urls.json'

import { type Ref, ref } from 'vue'
import { useRoute } from 'vue-router'
import { convertDataToObject, fetchData, convertObjectToHero } from '@/assets/ts/hero/hero-importer'
import { getColorPalette } from '@/assets/ts/color-palette'
import { type FetchableUrl, LoadingState } from '@/assets/ts/common-types'

let hero: Ref<Hero>
let loadingState: Ref<LoadingState> = ref(LoadingState.LOADING)

let fetchableLinks: FetchableUrl[] = FetchableUrls.links

//TODO : temporary
const userTag: string = useRoute().params.user as string
let res: string
let obj: Object
let convertedHero: Hero

for (let e of fetchableLinks) {
  let url = e.url.replace(new RegExp('##USR', 'g'), userTag)
  try {
    res = await fetchData(url)
    obj = convertDataToObject(res)
    convertedHero = convertObjectToHero(obj)
    hero = ref(convertedHero)
    getColorPalette().fromHeroColors(convertedHero.colors)
    loadingState.value = LoadingState.RESOLVED
    break
  } catch (err: any) {
    console.log(err)
    loadingState.value = LoadingState.ERROR
  }
}
</script>

<template>
  <HeroFrame :background="hero.colors.bgimg">
    <TitleSection :title-section="hero.title"></TitleSection>
    <AboutSection :about-section="hero.about"></AboutSection>
    <DescSection :about-section="hero.about"></DescSection>
    <VideosSection :online-section="hero.online"></VideosSection>
    <LinksSection :online-section="hero.online"></LinksSection>
    <ExtrasSection :extras-section="hero.extras"></ExtrasSection>
    <FooterSection></FooterSection>
  </HeroFrame>
</template>
