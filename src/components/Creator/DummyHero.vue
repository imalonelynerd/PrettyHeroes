<script setup>
import HeroTitle from "@/components/Hero/HeroTitle.vue";
import HeroDesc from "@/components/Hero/HeroDesc.vue";
import HeroLinks from "@/components/Hero/HeroLinks.vue";

import hostInfo from "@/assets/json/hostInfo.json"

defineProps(['hero']);

</script>

<template>
  <div class="dummy"
       :style="`background: url(${hero.colors.bgimg === '' ?  '/bg/creatbg.png' : hero.colors.bgimg}) center center no-repeat`">
    <div class="hero">
      <HeroTitle
          :catchphrase="hero.title.catchphrase === '' ? `Greetings from ${hostInfo.appName}` : hero.title.catchphrase"
          :img-src="hero.title.img"
          :pronouns="hero.title.pronouns"
          :title="hero.title.title"
          :name1="hero.perso.name1 === '' ? 'Foo' : hero.perso.name1"
          :name2="hero.perso.name2 === '' ? 'Bar': hero.perso.name2"
          :age="hero.perso.age === '' ? '1337' : hero.perso.age"
      />
      <HeroDesc
          :desc="hero.perso.desc === '' ? '\\*\\*Hello\\*\\* \\*world\\* ! ---> **Hello** *world* !' : hero.perso.desc"
          :flags="hero.perso.flags"
          :location="hero.perso.location === '' ? 'Earth' : hero.perso.location"
          :timezone="hero.perso.timezone === '' ? 'UTC +0' : hero.perso.timezone"
          :work="hero.perso.work === '' ? 'Student' : hero.perso.work"
      />
      <HeroLinks v-if="hero.urls.linksList.length !== 0" :links="hero.urls.linksList"/>
    </div>
  </div>
</template>

<style scoped>

@media screen and (hover: hover) {
  .dummy {
    position: fixed;
    overflow: scroll;
    right: 0;
    top: 0;
    bottom: 0;
    left: 40%;
    padding: 128px 0 64px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-size: cover !important;
    animation: FadeAnimation ease-out 0.5s;
  }

  .hero {
    width: 500px;
    max-width: 35vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    animation: FadeAnimation ease-out 0.5s;
    padding: 64px;
    gap: 48px;
    border-radius: var(--radius);
    background: color-mix(in srgb, var(--cbg), var(--alpha));
    backdrop-filter: var(--blur);
  }
}

@media screen and (hover: none) {
  .dummy {
    display: none;
  }
}


</style>
