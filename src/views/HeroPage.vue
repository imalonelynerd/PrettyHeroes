<script setup>
import HeroTitle from "@/components/HeroTitle.vue";
import {ref} from "vue";
import {useRoute} from "vue-router";
import HeroDesc from "@/components/HeroDesc.vue";
import ErrorPage from "@/components/ErrorPage.vue";
import {loadAsToml, loadAsYaml} from "@/assets/js/fetchResult";


const isFetched = ref(1);

async function fetchWebsite(url) {
  let res = null;
  try {
    res = await fetch(url);
  } catch {
    return false;
  }
  if (!res.ok) {
    return false;
  }
  return res.text();
}

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
  console.log(links[k].url)
  res = await fetchWebsite(links[k].url);
  if (res !== false) {
    console.log(res);
    switch (links[k].type) {
      case "toml":
        try {
          res = loadAsToml(res);
        } catch {
          isFetched.value = 3;
        }
        break;
      case "yaml":
        try {
          res = loadAsYaml(res);
        } catch {
          isFetched.value = 3;
        }
        break;
    }
    isFetched.value = 0;
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
  <div v-if="isFetched === 0" class="hero">
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
          :links="res.urls"/>
    </div>
  </div>
</template>

<style scoped>

.hero {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
}

.hero > *:not(:last-child) {
  margin-right: 16px;
}
</style>
