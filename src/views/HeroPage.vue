<script setup>
import HeroContainer from '@/components/HeroContainer.vue'
import HeroFooter from '@/components/containers/FooterContainer.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { convertDataToObject, fetchData, convertObjectToHero } from '@/assets/js/heroImporter.js'
import { getEmptyHero } from '@/assets/js/heroFactory.js'
import TitleSection from '@/components/sections/TitleSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import DescSection from '@/components/sections/DescSection.vue'
import VideosSection from '@/components/sections/VideosSection.vue'
import LinksSection from '@/components/sections/LinksSection.vue'
import ExtrasSection from '@/components/sections/ExtrasSection.vue'

const hero = ref(getEmptyHero())

//TODO : temporary
const userTag = useRoute().params.user
const url = `https://raw.githubusercontent.com/${userTag}/${userTag}/main/hero.yml`
let res = await fetchData(url)
if (res !== null) {
  let obj = convertDataToObject(res)
  if (obj !== null) {
    hero.value = convertObjectToHero(obj)
  }
}
</script>

<template>
  <HeroContainer :background="hero.colors.bgimg">
    <TitleSection :colors="hero.colors" :title-section="hero.title" />
    <AboutSection :colors="hero.colors" :about-section="hero.about" />
    <DescSection :colors="hero.colors" :about-section="hero.about" />
    <VideosSection :colors="hero.colors" :online-section="hero.online" />
    <LinksSection :colors="hero.colors" :online-section="hero.online" />
    <ExtrasSection :colors="hero.colors" :extras-section="hero.extras" />
    <HeroFooter :background="hero.colors.background" :font-color="hero.colors.text">
      <p>
        Made with ❤️, ☄️ and 🦕 using
        <a href="https://github.com/imalonelynerd/PrettyHeroes">PrettyHeroes</a>
      </p>
    </HeroFooter>
  </HeroContainer>
</template>
