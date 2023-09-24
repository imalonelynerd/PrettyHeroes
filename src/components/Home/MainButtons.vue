<script setup>

import {ref} from "vue";

function switchQuery() {
  isShown.value = !isShown.value
}

const searchResult = ref("")
const isShown = ref(false);

</script>

<template>
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
    <input v-model="searchResult" type="text" @keyup.enter="$route.path = '/' + searchResult" placeholder="Search...">
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
</template>

<style scoped>

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  filter: var(--shadow);
}

.buttons > a, .buttons > router-link {
  padding: 16px 24px;
  border-radius: 999px;
  font-size: 1em;
  font-weight: bold;
  background: var(--bg1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s;
}

.buttons > a:hover, .buttons > router-link:hover {
  background: var(--bg3);
}

.buttons > a > img, .buttons > router-link > img {
  height: 1.25em;
}

.buttons > a > p, .buttons > router-link > p {
  margin: 0 0 0 8px;
  padding: 0;
  transition: all 0.25s;
}

.buttons > *:not(:last-child){
  margin-right: 8px;
}

.query {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  filter: var(--shadow);
  width: 557px;
}

.query > * {
  padding: 16px 20px;
  font-size: 1em;
  font-weight: bold;
  border: none;
  background: var(--bg1);
  color: var(--text);
}

.query > button > img,
.query > a > img {
  height: 1em;
}

.query > input{
  flex-grow: 1;
}

.query > *:hover {
  background: var(--bg3);
  z-index: 6;
}

.query > *:first-child {
  border-radius: 999px 0 0 999px;
}

.query > *:last-child {
  border-radius: 0 999px 999px 0;
}
</style>