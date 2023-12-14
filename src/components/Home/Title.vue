<script setup>
import homeInfo from "@/assets/json/homeInfo.json";
import WideButton from "@/components/Home/WideButton.vue";
import {changeLoc} from "@/assets/js/miscTools";
</script>

<template>
  <div class="title">
    <img :src="homeInfo.imgSource" alt="Icon"/>
    <h1>{{ homeInfo.appName }} <code>{{ homeInfo.version }}</code>
    </h1>
    <h2>{{ homeInfo.tagLine }}</h2>
    <p v-html="homeInfo.description"></p>
    <WideButton @update:buttonClicked="changeLoc('#card1',false)"
                imgLink="/icons/more.png"
                shown-title="See more"
    />
  </div>
</template>

<style scoped>

@media screen and (orientation: landscape) {
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

</style>