<script setup>

import ErrInfo from "@/assets/json/errInfo.json";
import Background from "@/components/Hero/Background.vue";
import WideButton from "@/components/Home/WideButton.vue";

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
    <img :src="ErrInfo.imgSource" alt="Error"/>
    <h1>{{ ErrInfo.errName }}</h1>
    <p>An error occured while getting <b>{{ accountName }}</b>'s Hero...</p>
    <p v-html="getErrorMessage(errorCode)"></p>
    <WideButton
        img-link="/icons/back.png"
        shown-title="Go back"
        @update:buttonClicked="$router.push('/')"
    />
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .err {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    animation: FadeAnimation ease-out 0.5s;
    padding: 0 64px;
  }

  .err > * {
    margin: 0;
  }

  .err > img {
    height: 160px;
  }

  .err > h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .err > h1 > code {
    padding: 10px 14px !important;
    font-size: 0.5em;
    border-radius: var(--radius-button) !important;
    background: color-mix(in srgb, var(--wi), var(--alpha));
  }

  .err > h1 > code:hover {
    background: var(--ho);
  }

  .err > * {
    margin: 0;
  }

  .err > h2 {
    color: var(--text);
    opacity: 0.75;
    font-style: italic;
  }

  .err > h2:hover {
    color: var(--ho);
    opacity: 1;
  }

  .err > p {
    text-align: center;
    width: 80%;
  }
}

@media screen and (hover: none) {
  .err {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 6vw;
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    animation: FadeAnimation ease-out 0.5s;
    padding: 0 6vw;
  }

  .err > * {
    margin: 0;
    text-align: center;
  }

  .err > img {
    margin-left: auto;
    margin-right: auto;
    height: 40vw;
    width: 40vw;
  }

  .err > h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vw;
  }

  .err > h1 > code {
    padding: 2vw 4vw !important;
    font-size: 0.5em;
    border-radius: var(--radius-button) !important;
    background: color-mix(in srgb, var(--wi), var(--alpha));
  }

  .err > h1 > code:active {
    background: var(--ho);
  }

  .err > * {
    margin: 0;
  }

  .err > h2 {
    color: var(--text);
    opacity: 0.75;
    font-style: italic;
  }

  .err > h2:active {
    color: var(--ho);
    opacity: 1;
  }
}

</style>