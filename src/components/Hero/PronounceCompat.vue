<script setup>

import PronounceCompat from "@/assets/json/pronounceCompat.json";

defineEmits([
  "update:hideBtn"
])
</script>

<template>
  <div class="promess">
    <div>
      <img :src="PronounceCompat.imgsource">
      <h1 v-html="PronounceCompat.title"></h1>
      <p v-html="PronounceCompat.message"></p>
      <div>
        <a @click="$emit('update:hideBtn')">
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

@media screen and (hover: hover) {
  .promess > div > div > a {
    width: fit-content;
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

  .promess > div > div > a:hover {
    background: var(--ho);
  }

  .messbtn > img, .promess > div > div > a > img {
    height: 1.25em;
  }

  .messbtn > p, .promess > div > div > a > p {
    margin: 0 0 0 8px;
    padding: 0;
    transition: all 0.25s;
  }

  .promess {
    margin: 0;
    padding: 64px 0;
    overflow: scroll;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--bg);
    display: flex;
    z-index: 10;
    align-items: center;
    justify-content: center;
  }

  .promess > div {
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--wi);
    border-radius: 32px;
    height: fit-content;
    padding: 32px;
    float: right;
    animation: Blur ease-out 0.5s;
  }

  .promess > div > * {
    margin: 0;
  }

  .promess > div > *:not(:last-child) {
    margin-bottom: 32px;
    text-align: center;
  }

  .promess > div > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .promess > div > img {
    height: 128px;
  }

  .promess > div > div > *:not(:last-child) {
    margin-right: 8px;
  }
}

@media screen and (hover: none) {
  .promess > div > div > a {
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

  .promess > div > div > a:hover {
    background: var(--ho);
  }

  .promess > div > div > a > img {
    height: 1.25em;
  }

  .promess > div > div > a > p {
    margin: 0 0 0 1vh;
    padding: 0;
    transition: all 0.25s;
  }

  .promess {
    margin: 0;
    padding: 3vh 0;
    overflow: scroll;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    z-index: 15;
    align-items: center;
    justify-content: center;
    background: var(--bg);
  }

  .promess > div {
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    height: fit-content;
    padding: 5vh 0;
    float: right;
    animation: Blur ease-out 0.5s;
  }

  .promess > div > * {
    margin: 0;
  }

  .promess > div > *:not(:last-child) {
    margin-bottom: 3vh;
    text-align: center;
  }

  .promess > div > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .promess > div > p {
    font-size: 1em;
  }

  .promess > div > p > a {
    color: var(--ho);
  }

  .promess > div > img {
    height: 20vh;
    width: 100%;
    object-fit: contain;
  }

  .promess > div > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }

  .promess > div > div > *:not(:last-child) {
    margin-bottom: 2vh;
  }
}
</style>