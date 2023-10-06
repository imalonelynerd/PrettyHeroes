<script setup>
import HeroTitle from "@/components/Hero/HeroTitle.vue";
import {ref} from "vue";
import {useRoute} from "vue-router";
import HeroDesc from "@/components/Hero/HeroDesc.vue";
import ErrorPage from "@/components/Transition/ErrorPage.vue";
import {fetchWebsite, loadAsToml, loadAsYaml} from "@/assets/js/fetchResult";
import PronounceCompat from "@/components/Hero/PronounceCompat.vue";
import HeroLinks from "@/components/Hero/HeroLinks.vue";
import Background from "@/components/Hero/Background.vue";
import CustomFooter from "@/components/Hero/CustomFooter.vue";
import PronounceMode from "@/components/Hero/PronounceMode.vue";


const isFetched = ref(1);
const isYaml = ref(false);
const proShown = ref(false);

const routeObj = useRoute();
const userTag = routeObj.params.user;

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
for (let k in links) {
  res = await fetchWebsite(links[k].url);
  if (res !== false) {
    switch (links[k].type) {
      case "toml":
        res = loadAsToml(res);
        if (res === false) {
          isFetched.value = 2;
          break;
        }
        isFetched.value = 0;
        break;
      case "yaml":
        res = loadAsYaml(res);
        if (res === false) {
          isFetched.value = 2;
          break;
        }
        isYaml.value = true;
        isFetched.value = 0;
        break;
    }
    break;
  }
}

function showElem(val) {
  proShown.value = val;
}

</script>

<template>
  <ErrorPage
      v-if="isFetched !== 0"
      :account-name="userTag"
      :error-code="isFetched"
  />
  <Background v-if="isFetched === 0" :bg-img="res.colors.bgimg"/>
  <PronounceMode v-if="isYaml" @update:hideBtn="showElem(true)"/>
  <PronounceCompat v-if="proShown" @update:hideBtn="showElem(false)"/>
  <div v-if="!proShown && isFetched === 0" class="hero">
    <div>
      <HeroTitle
          :title="res.title.title"
          :catchphrase="res.title.catchphrase"
          :img-src="res.title.img"
          :bg-img="res.colors.bgimg"
      />
      <HeroDesc
          :name1="res.title.name1"
          :name2="res.title.name2"
          :age="res.personal.age"
          :flags="res.personal.flags"
          :pronouns="res.personal.pronouns"
          :desc="res.personal.desc"
      />
      <HeroLinks :links="res.urls"/>
    </div>
  </div>
  <CustomFooter v-if="!proShown && isFetched === 0"/>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .hero {
    margin: 64px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: Blur ease-out 0.5s;
  }

  .hero > div {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }

  .hero > div > *:not(:last-child) {
    margin-bottom: 16px;
  }
}

@media screen and (orientation: portrait) {
  .hero {
    margin: 5vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: Blur ease-out 0.5s;
  }

  .hero > div {
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }

  .hero > div > *:not(:last-child) {
    margin-bottom: 2vh;
  }
}
</style>
