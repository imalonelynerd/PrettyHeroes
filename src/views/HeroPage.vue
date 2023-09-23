<script setup>
import HeroTitle from "@/components/HeroTitle.vue";
import {ref} from "vue";
import {useRoute} from "vue-router";
import {decode} from "toml-nodejs";
import HeroDesc from "@/components/HeroDesc.vue";
import ErrorPage from "@/components/ErrorPage.vue";
import HeroLinks from "@/components/HeroLinks.vue";


const isFetched = ref(true);

async function fetchWebsite(url) {
  let res = await fetch(url);
  if (!res.ok) {
    return false;
  }
  return res.text();
}

const unusualRoute = useRoute();
const userTag = unusualRoute.params.user;

let res = await fetchWebsite(`https://raw.githubusercontent.com/${userTag}/${userTag}/main/hero.toml`);
if (res === false) {
  isFetched.value = false;
} else {
  res = decode(res);
  console.log(res);
  const headerTitle = document.querySelector('head title');
  const favIcon = document.querySelector("link[rel~='icon']");
  headerTitle.textContent = res.title.title + " - PrettyHeroes";
  favIcon.href = res.title.img;

  document.documentElement.style.setProperty('--bg1', res.colors.bg1);
  document.documentElement.style.setProperty('--bg2', res.colors.bg2);
  document.documentElement.style.setProperty('--bg3', res.colors.bg3);
  document.documentElement.style.setProperty('--text', res.colors.text);
}

</script>

<template>
  <ErrorPage v-if="!isFetched" :account-name="userTag"/>
  <div v-if="isFetched" class="hero">
    <HeroTitle
        :title="res.title.title"
        :catchphrase="res.title.catchphrase"
        :img-src="res.title.img"
    />
    <div>
      <HeroDesc
          :name1="res.title.name1"
          :name2="res.title.name2"
          :age="res.personal.age"
          :pronouns="res.personal.pronouns"
          :desc="res.personal.desc"
      />
      <HeroLinks
          :links="res.urls"/>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.hero > div:not(.herotitle) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
