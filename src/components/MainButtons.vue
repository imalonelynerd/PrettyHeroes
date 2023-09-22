<script setup>

import {ref} from "vue";

function displayQuery(id) {
  let elem = document.getElementById(id);
  if (elem === undefined) {
    return -1;
  }
  elem.style.display = "flex";
}

function hideQuery(id) {
  let elem = document.getElementById(id);
  if (elem === undefined) {
    return -1;
  }
  elem.style.display = "none";
}

const searchResult = ref("")

</script>

<template>
  <div class="buttons">
    <a @click="displayQuery('hq1')">
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
  <div class="hiddenQuery" id="hq1">
    <div>
      <input v-model="searchResult" type="text" @keyup.enter="$route.path = '/' + searchResult" placeholder="Search...">
      <router-link :to="'/' + searchResult">
        <img src="/icons/search.png">
      </router-link>
      <button @click="hideQuery('hq1')">
        <img src="/icons/back.png"/>
      </button>
    </div>
  </div>
</template>

<style scoped>

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.buttons > a, .buttons > router-link {
  margin: 0 4px;
  padding: 16px 24px;
  border-radius: 999px;
  font-size: 1em;
  font-weight: bold;
  background: var(--bg2);
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

.hiddenQuery {
  display: none; /*flex*/
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #00000080;
  animation: Blur 0.25s;
}

.hiddenQuery > div {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
}

.hiddenQuery > div > * {
  padding: 16px 20px;
  font-size: 1em;
  font-weight: bold;
  border: none;
  background: var(--bg2);
}

.hiddenQuery > div > button > img,
.hiddenQuery > div > a > img {
  height: 1.25em;
}

.hiddenQuery > div > *:hover {
  background: var(--bg3);
  z-index: 6;
}

.hiddenQuery > div > *:first-child {
  border-radius: 999px 0 0 999px;
}

.hiddenQuery > div > *:last-child {
  border-radius: 0 999px 999px 0;
}
</style>