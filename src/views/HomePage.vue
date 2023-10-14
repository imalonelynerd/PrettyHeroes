<script setup>

import homeInfo from "@/assets/json/homeInfo.json";
import {ref} from "vue";
import {useRouter} from "vue-router";
import Background from "@/components/Hero/Background.vue";

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
  <Background bg-img="/bg/bg.png"/>
  <div class="home">
    <img :src="refHomeInfo.imgSource"/>
    <h1>{{ refHomeInfo.appName }}</h1>
    <code>{{ refHomeInfo.version }}</code>
    <div>
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
        <router-link :to="'/' + searchResult"
                     title="Search">
          <img src="/icons/search.png">
          <p>Search</p>
        </router-link>
        <!--a @click="searchResult += '?nocolor=true'">
          <img src="/icons/nocolor.png">
          <p>Ignore colors</p>
        </a-->
        <a :href="`https://github.com/${searchResult}`"
           :title="`Check ${searchResult === '' ? 'user' : searchResult}'s GitHub`">
          <img src="/icons/fork.png">
          <p>Check {{ searchResult === "" ? "user" : searchResult }}'s GitHub</p>
        </a>
        <a @click="switchQuery"
           title="Back">
          <img src="/icons/back.png"/>
          <p>Back</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .home {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: Blur ease-out 0.5s;
    gap: 16px;
  }

  .home > * {
    margin: 0;
  }

  .home > img {
    height: 192px;
  }

  .home > div {
    width: 650px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background: color-mix(in srgb, var(--wi), transparent 33%);
    padding: 24px 32px;
    border-radius: 16px;
    box-shadow: var(--shadow);
  }

  .home > div > * {
    margin: 0;
  }

  .home > div > h2 {
    font-style: italic;
  }

  .home > div > p {
    text-align: center;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    animation: Blur ease-out 0.5s;
  }

  .buttons > *,
  .query > * {
    padding: 16px 24px;
    border-radius: 999px;
    font-size: 1em;
    font-weight: bold;
    border: none;
    background: var(--wi);
    color: var(--text);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }

  .buttons > *:hover,
  .query > *:hover {
    background: var(--ho);
  }

  .buttons > * > img,
  .query > * > img {
    height: 1.25em;
  }

  .buttons > * > p {
    margin: 0 0 0 8px;
    padding: 0;
    transition: all 0.25s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .query > * > p {
    margin: 0 0 0 8px;
    padding: 0;
    transition: all 0.25s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 50px;
  }

  .query > a:nth-of-type(2) > p {
    display: none;
  }

  .query {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    animation: Blur ease-out 0.5s;
    gap: 8px;
  }

  .query > input {
    flex-grow: 1;
  }
}

@media screen and (orientation: portrait) {
  .home {
    width: 100vw;
    padding: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: Blur ease-out 0.5s;
    gap: 2vh;
  }

  .home > * {
    margin: 0;
  }

  .home > img {
    height: 20vh;
  }

  .home > div {
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3vh;
  }

  .home > div > * {
    margin: 0;
  }

  .home > div > *:not(div) {
    text-align: center;
    width: 80vw;
  }

  .home > div > h2 {
    font-style: italic;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    gap: 1vh;
    width: 80vw;
    animation: Blur ease-out 0.5s;
  }

  .buttons > *,
  .query > * {
    padding: 2vh 3vh;
    border-radius: 6vh;
    font-size: 1em;
    font-weight: bold;
    border: none;
    background: var(--wi);
    color: var(--text);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
    box-shadow: var(--shadow);
  }

  .buttons > *:active,
  .query > *:active {
    background: var(--ho);
  }

  .buttons > * > img,
  .query > * > img {
    height: 1.25em;
  }

  .buttons > * > p,
  .query > * > p {
    margin: 0 0 0 1vh;
    padding: 0;
    transition: all 0.25s;
    max-width: 60vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .query {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    animation: Blur ease-out 0.5s;
    gap: 1vh;
    width: 80vw;
  }

  .query > input {
    flex-grow: 1;
  }
}

</style>