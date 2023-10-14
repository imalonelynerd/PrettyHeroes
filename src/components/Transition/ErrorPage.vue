<script setup>

import ErrInfo from "@/assets/json/errInfo.json";
import Background from "@/components/Hero/Background.vue";

defineProps(["errorCode", "accountName"])

function getErrorMessage(errcode) {
  switch (errcode) {
    case 1:
      return ErrInfo.descriptions.fetchError;
    case 2:
      return ErrInfo.descriptions.missingData;
    default:
      return ErrInfo.descriptions.unknownError;
  }
}

</script>

<template>
  <Background bg-img="/bg/errbg.png"/>
  <div class="err">
    <div>
      <img :src="ErrInfo.imgSource"/>
      <h1>{{ ErrInfo.errName }}</h1>
      <p>An error occured while getting <b>{{ accountName }}</b>'s Hero...</p>
      <p v-html="getErrorMessage(errorCode)"></p>

    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .err {
    margin: 0;
    padding: 64px 0;
    overflow: scroll;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .err > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: color-mix(in srgb, var(--wi), transparent 25%);
    backdrop-filter: blur(10px);
    padding: 32px;
    border-radius: 16px;
    animation: Blur ease-out 0.5s;
    box-shadow: var(--shadow);
  }

  .err > div > * {
    margin: 0;
  }

  .err > div > img {
    height: 128px;
  }

  .err > div > h1 {
    margin-bottom: 8px;
  }

  .err > div > p {
    text-align: center;
    width: 400px;
  }

  .err > div > *:not(:last-child) {
    margin-bottom: 16px;
  }
}

@media screen and (orientation: portrait) {
  .err {
    margin: 0;
    overflow: scroll;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .err > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3vh;
    border-radius: 3vh;
    animation: Blur ease-out 0.5s;
  }

  .err > div > * {
    margin: 0;
  }

  .err > div > img {
    height: 20vh;
  }

  .err > div > h1 {
    margin-bottom: 1vh;
  }

  .err > div > p {
    text-align: center;
    width: 80vw;
  }

  .err > div > *:not(:last-child) {
    margin-bottom: 2vh;
  }
}
</style>