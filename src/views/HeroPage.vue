<script setup>
import HeroTitle from "@/components/HeroTitle.vue";
import {ref} from "vue";
import {useRoute} from "vue-router";
import HeroDesc from "@/components/HeroDesc.vue";
import ErrorPage from "@/components/ErrorPage.vue";
import {fetchWebsite, loadAsToml, loadAsYaml} from "@/assets/js/fetchResult";
import PronounceCompat from "@/components/PronounceCompat.vue";
import HeroLinks from "@/components/HeroLinks.vue";
import Background from "@/components/Background.vue";


const isFetched = ref(1);
const isYaml = ref(false);

const unusualRoute = useRoute();
const userTag = unusualRoute.params.user;

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
        console.log(res);
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

</script>

<template>
  <ErrorPage
      v-if="isFetched !== 0"
      :account-name="userTag"
      :error-code="isFetched"
  />
  <Background v-if="isFetched === 0" :bg-img="res.colors.bgimg"/>
  <PronounceCompat v-if="isYaml"/>
  <div v-if="isFetched === 0" class="hero">
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
          :pronouns="res.personal.pronouns"
          :desc="res.personal.desc"
      />
      <HeroLinks :links="res.urls"/>
    </div>
  </div>
</template>

<style scoped>

.hero {
  padding: 64px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero > div {
  min-width: 500px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

.hero > div > *:not(:last-child) {
  margin-bottom: 16px;
}
</style>
