<script setup>

import homeInfo from "@/assets/json/homeInfo.json";
import {ref} from "vue";
import {useRouter} from "vue-router";

const refHomeInfo = ref(homeInfo);
const searchResult = ref("");
const isShown = ref(false);

function switchQuery() {
  isShown.value = !isShown.value
}

const router = useRouter();

function goTo(place) {
  router.push(place);
}

document.querySelector('head title').textContent = homeInfo.appName;
document.querySelector("link[rel~='icon']").href = `/favicon.png`;
document.querySelector("meta[name~='description']").setAttribute("content", `${homeInfo.tagLine}`);
document.querySelector("meta[name~='og:title']").setAttribute("content", `${homeInfo.appName}`);
document.querySelector("meta[name~='og:description']").setAttribute("content", `${homeInfo.tagLine}`);
document.documentElement.style = null;
</script>

<template>
  <div class="home">
    <div>
      <img :src="refHomeInfo.imgSource"/>
      <h1>{{ refHomeInfo.appName }}</h1>
      <code>{{ refHomeInfo.version }}</code>
      <h2>{{ refHomeInfo.tagLine }}</h2>
      <p v-html="refHomeInfo.description"></p>
      <div class="buttons" v-if="!isShown">
        <a @click="switchQuery">
          <img src="/icons/search.png"/>
          <p>Search</p>
        </a>
        <router-link to="/creator">
          <img src="/icons/create.png"/>
          <p>Create a Hero</p>
        </router-link>
        <a href="https://github.com/lonelynerd/PrettyHeroes">
          <img src="/icons/fork.png"/>
          <p>Fork me on GitHub</p>
        </a>
      </div>
      <div class="query" v-if="isShown">
        <input v-model="searchResult"
               type="text"
               @keyup.enter="goTo(searchResult)"
               placeholder="Search..."/>
        <router-link :to="'/' + searchResult">
          <img src="/icons/search.png">
        </router-link>
        <a :href="`https://github.com/${searchResult}`">
          <img src="/icons/fork.png">
        </a>
        <button @click="switchQuery">
          <img src="/icons/back.png"/>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .home {
    margin: 64px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: Blur ease-out 0.5s;
  }

  .home > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--wi);
    padding: 32px;
    border-radius: 32px;

  }

  .home > div > * {
    margin: 0;
  }

  .home > div > img {
    height: 128px;
  }

  .home > div > h1 {
    margin-bottom: 8px;
  }

  .home > div > h2 {
    opacity: 0.5;
    font-style: italic;
  }

  .home > div > p {
    text-align: center;
    width: 400px;
  }

  .home > div > *:not(:last-child):not(h1) {
    margin-bottom: 32px;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    animation: Blur ease-out 0.5s;
  }

  .buttons > a, .buttons > router-link {
    padding: 16px 24px;
    border-radius: 999px;
    font-size: 1em;
    font-weight: bold;
    background: var(--bg);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }

  .buttons > a:hover, .buttons > router-link:hover {
    background: var(--ho);
  }

  .buttons > a > img, .buttons > router-link > img {
    height: 1.25em;
  }

  .buttons > a > p, .buttons > router-link > p {
    margin: 0 0 0 8px;
    padding: 0;
    transition: all 0.25s;
  }

  .buttons > *:not(:last-child) {
    margin-right: 8px;
  }

  .query {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;

    width: 557px;
    animation: Blur ease-out 0.5s;
  }

  .query > * {
    padding: 16px 24px;
    border-radius: 999px;
    font-size: 1em;
    font-weight: bold;
    border: none;
    background: var(--bg);
    color: var(--text);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .query > * > img {
    height: 1.25em;
  }

  .query > input {
    flex-grow: 1;
  }

  .query > *:hover {
    background: var(--ho);
    z-index: 6;
  }

  .query > *:not(:last-child) {
    margin-right: 8px;
  }
}

@media screen and (orientation: portrait) {
  .home {
    width: 100%;
    margin: 5vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: Blur ease-out 0.5s;
  }

  .home > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home > div > * {
    margin: 0;
  }

  .home > div > img {
    height: 20vh;
  }

  .home > div > h1 {
    width: 80vw;
    text-align: center;
    margin-bottom: 2vh;
  }

  .home > div > h2 {
    text-align: center;
    width: 80vw;
    opacity: 0.5;
    font-style: italic;
  }

  .home > div > p {
    text-align: center;
    width: 80vw;
  }

  .home > div > *:not(:last-child):not(h1) {
    margin-bottom: 3vh;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    width: 80vw;
    justify-content: center;
    align-items: stretch;

    animation: Blur ease-out 0.5s;
  }

  .buttons > a, .buttons > router-link {
    padding: 2vh 3vh;
    border-radius: 999px;
    font-size: 1em;
    font-weight: bold;
    background: var(--wi);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }

  .buttons > a:active, .buttons > router-link:active {
    background: var(--ho);
  }

  .buttons > a > img, .buttons > router-link > img {
    height: 1.25em;
  }

  .buttons > a > p, .buttons > router-link > p {
    margin: 0 0 0 2vh;
    padding: 0;
    transition: all 0.25s;
  }

  .buttons > *:not(:last-child) {
    margin-bottom: 2vh;
  }

  .query {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    width: 80vw;
    animation: Blur ease-out 0.5s;
  }

  .query > * {
    padding: 2vh 3vh;
    font-size: 1em;
    font-weight: bold;
    border: none;
    border-radius: 999px;
    background: var(--wi);
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .query > *:not(:last-child) {
    margin-bottom: 2vh;
  }

  .query > button > img,
  .query > a > img {
    height: 1em;
  }

  .query > *:active {
    background: var(--ho);
    z-index: 6;
  }
}

</style>