<script setup>

// Hero componements
import HeroTitle from "@/components/Hero/HeroTitle.vue";
import HeroDesc from "@/components/Hero/HeroDesc.vue";
import HeroLinks from "@/components/Hero/HeroLinks.vue";

// Functions & objects
import {ref} from "vue";
import {useRoute} from "vue-router";
import {goUp} from "@/assets/js/miscTools";
import {fetchWebsite, loadHeroFromText} from "@/assets/js/heroFetcher";

// Others
import ErrorPage from "@/components/Transition/ErrorPage.vue";
import PronounceCompat from "@/components/Hero/PronounceCompat.vue";
import Background from "@/components/Hero/Background.vue";
import HeroFooter from "@/components/Hero/HeroFooter.vue";
import WideButton from "@/components/Home/WideButton.vue";

const isFetched = ref(1);
const isYaml = ref(false);
const proShown = ref(false);

const routeObj = useRoute();
const userTag = routeObj.params.user;
const noColor = routeObj.params.nocolor === "nocolor";

let links = [
  {
    type: "toml",
    url: `https://raw.githubusercontent.com/${userTag}/${userTag}/main/hero.toml`
  },
  {
    type: "yaml",
    url: `https://raw.githubusercontent.com/${userTag}/${userTag}/main/pronounce.yml`
  }
]

let res = null;
let hero;
let link;
for (let k in links) {
  res = await fetchWebsite(links[k].url);
  if (res !== null) {
    hero = loadHeroFromText(res, links[k].type, noColor);
    if (hero === null) {
      isFetched.value = 2;
    } else {
      isFetched.value = 0;
      link = links[k].url;
    }
    if (links[k].type === "yaml") {
      isYaml.value = true;
    }
    break;
  }
}

function showElem(val) {
  goUp();
  proShown.value = val;
}

</script>

<template>
  <ErrorPage
      v-if="isFetched !== 0"
      :account-name="userTag"
      :error-code="isFetched"
  />
  <Background v-if="(isFetched === 0)" :bg-img="hero.colors.bgimg"/>
  <WideButton
      :fil-color="true"
      id="pro"
      v-if="isYaml"
      @update:buttonClicked="showElem(true)"
      shown-title="Pronounce"
      img-link="/icons/pronounce.png"
  />
  <PronounceCompat v-if="proShown" @update:hideBtn="showElem(false)"/>
  <div v-if="isFetched === 0" class="hero">
    <HeroTitle
        :catchphrase="hero.title.catchphrase"
        :img-src="hero.title.img"
        :pronouns="hero.title.pronouns"
        :title="hero.title.title"
        :name1="hero.perso.name1"
        :name2="hero.perso.name2"
        :age="hero.perso.age"
    />
    <HeroDesc
        :desc="hero.perso.desc"
        :flags="hero.perso.flags"
        :location="hero.perso.location"
        :timezone="hero.perso.timezone"
        :work="hero.perso.work"
    />
    <HeroLinks v-if="hero.urls.linksList.length !== 0" :links="hero.urls.linksList"/>
  </div>
  <HeroFooter v-if="!proShown && isFetched === 0" :og-file="link"/>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .hero {
    margin: 32px auto 48px;
    width: 500px;
    max-width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    animation: FadeAnimation ease-out 0.5s;
    padding: 64px;
    gap: 56px;
    border-radius: var(--radius);
    background: color-mix(in srgb, var(--cbg), var(--alpha));
    backdrop-filter: var(--blur);
  }

  #pro {
    position: fixed;
    bottom: 36px;
    right: 36px;
    z-index: 4;
  }
}
</style>
