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
      <div v-if="!isShown" class="buttons">
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
      <div v-if="isShown" class="query">
        <input v-model="searchResult"
               placeholder="Search..."
               type="text"
               @keyup.enter="goTo(searchResult)"/>
        <router-link :to="'/' + searchResult"
                     title="Search">
          <img src="/icons/search.png">
          <p>Search</p>
        </router-link>
        <a :href="`https://github.com/${searchResult}`"
           :title="`Check ${searchResult === '' ? 'user' : searchResult}'s GitHub`">
          <img src="/icons/fork.png">
          <p>Check {{ searchResult === "" ? "user" : searchResult }}'s GitHub</p>
        </a>
        <a title="Back"
           @click="switchQuery">
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
    gap: 16px;
    animation: FadeAnimation ease-out 0.5s;
  }

  .home > * {
    margin: 0;
  }

  .home > img {
    height: 160px;
  }

  .home > div {
    width: 650px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    padding: 24px 32px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
  }

  .home > code {
    padding: 12px 16px !important;
    border-radius: var(--radius-button) !important;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    transition: all 0.25s;
    box-shadow: var(--shadow);
  }

  .home > code:hover {
    background: var(--ho);
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

  .buttons, .query {
    width: 600px !important;
    animation: FadeAnimation ease-out 0.25s;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .buttons > *,
  .query > * {
    padding: 16px 24px;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    border: none;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
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
    display: none;
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

    gap: 8px;
  }

  .query > input {
    flex-grow: 1;
  }
}

@media screen and (orientation: portrait) {
  .home {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: FadeAnimation ease-out 0.5s;
    gap: 4vw;
  }

  .home > * {
    margin: 0;
  }

  .home > img {
    height: 40vw;
  }

  .home > code {
    padding: 3vw 6vw !important;
    border-radius: var(--radius-button) !important;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    transition: all 0.25s;
    box-shadow: var(--shadow);
  }

  .home > code:active {
    background: var(--ho);
  }

  .home > div {
    margin-top: 4vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6vw;
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

  .buttons, .query {
    animation: FadeAnimation ease-out 0.25s;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    gap: 2vw;
    width: 80vw;

  }

  .buttons > *,
  .query > * {
    padding: 4vw 6vw;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    border: none;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
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
    margin: 0 0 0 2vw;
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

    gap: 2vw;
    width: 80vw;
  }

  .query > input {
    flex-grow: 1;
  }
}

</style>