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
    animation: FadeAnimation ease-out 0.5s;
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
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    padding: 32px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    gap: 16px;
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
}

@media screen and (orientation: portrait) {
  .err {
    animation: FadeAnimation ease-out 0.5s;
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
    padding: 6vw;
    border-radius: var(--radius);

    gap: 4vw;
  }

  .err > div > * {
    margin: 0;
  }

  .err > div > img {
    height: 40vw;
  }

  .err > div > h1 {
    margin-bottom: 2vw;
  }

  .err > div > p {
    text-align: center;
    width: 80vw;
  }
}
</style>