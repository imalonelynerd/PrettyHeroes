<script setup>
import hostInfo from "@/assets/json/hostInfo.json";
import WideButton from "@/components/Home/WideButton.vue";
import {changeLoc} from "@/assets/js/miscTools";
</script>

<template>
  <div class="title">
    <img :src="hostInfo.imgSource" alt="Icon"/>
    <h1>{{ hostInfo.appName }} <code>{{ hostInfo.version }}</code>
    </h1>
    <h2>{{ hostInfo.tagLine }}</h2>
    <p v-html="hostInfo.description"></p>
    <WideButton @update:buttonClicked="changeLoc('#card1',false)"
                imgLink="/icons/more.png"
                shown-title="See more"
    />
  </div>
</template>

<style scoped>

@media screen and (hover: hover) {
  .title {
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

  .title > * {
    margin: 0;
  }

  .title > img {
    height: 160px;
  }

  .title > h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .title > h1 > code {
    padding: 10px 14px !important;
    font-size: 0.5em;
    border-radius: var(--radius-button) !important;
    background: color-mix(in srgb, var(--wi), var(--alpha));
  }

  .title > h1 > code:hover {
    background: var(--ho);
  }

  .title > * {
    margin: 0;
  }

  .title > h2 {
    color: var(--text);
    opacity: 0.75;
    font-style: italic;
  }

  .title > h2:hover {
    color: var(--ho);
    opacity: 1;
  }

  .title > p {
    text-align: center;
    width: 80%;
  }
}

@media screen and (hover: none) {
  .title {
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

  .title > * {
    margin: 0;
    text-align: center;
  }

  .title > img {
    margin: 0 auto;
    height: 40vw;
    width: 40vw;
  }

  .title > h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vw;
  }

  .title > h1 > code {
    padding: 2vw 4vw !important;
    font-size: 0.5em;
    border-radius: var(--radius-button) !important;
    background: color-mix(in srgb, var(--wi), var(--alpha));
  }

  .title > h1 > code:active {
    background: var(--ho);
  }

  .title > * {
    margin: 0;
  }

  .title > h2 {
    color: var(--text);
    opacity: 0.75;
    font-style: italic;
  }

  .title > h2:active {
    color: var(--ho);
    opacity: 1;
  }
}

</style>