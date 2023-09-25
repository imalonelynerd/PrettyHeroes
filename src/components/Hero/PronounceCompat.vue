<script setup>

import PronounceCompat from "@/assets/json/PronounceCompat.json";

function showMessage(show) {
  let e = document.getElementById("promess");
  if (e === null) {
    return false;
  }
  if (show) {
    e.style.display = "flex";
    return true;
  }
  e.style.display = "none";
  return true
}

</script>

<template>
  <a class="messbtn" @click="showMessage(true)">
    <img src="/icons/pronounce.png">
    <p>Pronounce</p>
  </a>
  <div id="promess">
    <div>
      <img :src="PronounceCompat.imgsource">
      <h1 v-html="PronounceCompat.title"></h1>
      <p v-html="PronounceCompat.message"></p>
      <div>
        <a @click="showMessage(false)">
          <img src="/icons/back.png">
          <p>Back</p>
        </a>
        <router-link to="/creator">
          <img src="/icons/create.png">
          <p>Hero Creator</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

.messbtn {
  position: fixed;
  top: 32px;
  left: 32px;
}

.messbtn, #promess > div > div > a {
  width: fit-content;
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
  filter: var(--shadow);
}

.messbtn:hover, #promess > div > div > a:hover {
  background: var(--bg3);
}

.messbtn > img, #promess > div > div > a > img {
  height: 1.25em;
}

.messbtn > p, #promess > div > div > a > p {
  margin: 0 0 0 8px;
  padding: 0;
  transition: all 0.25s;
}

#promess {
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  padding: 48px;
  display: none;
  z-index: 10;
  align-items: center;
  justify-content: center;
  animation: Blur ease-out 0.5s;
}

#promess > div {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg1);
  border-radius: 32px;
  height: fit-content;
  padding: 32px;
  float: right;
  animation: slidein ease-out 0.25s;
  filter: var(--shadow);
}

#promess > div > * {
  margin: 0;
}

#promess > div > *:not(:last-child) {
  margin-bottom: 32px;
  text-align: center;
}

#promess > div > div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#promess > div > img {
  height: 128px;
}

#promess > div > div > *:not(:last-child) {
  margin-right: 8px;
}
</style>