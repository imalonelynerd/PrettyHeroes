<script setup>
import LoadInfo from "@/assets/json/loadInfo.json";
import {useRoute} from "vue-router";
import Background from "@/components/Hero/Background.vue";

const routeObj = useRoute();
const userTag = routeObj.params.user;
</script>

<template>
  <Background bg-img="/bg/bg.png" />
  <div class="loading">
    <div>
      <img :src="LoadInfo.imgSource"/>
      <h1>{{ LoadInfo.loadTitle }}</h1>
      <p>Fetching <b>{{ userTag }}</b>'s Hero...</p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .loading {
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

  .loading > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    padding: 32px;
    border-radius: 16px;
    /*animation: Blur ease-out 0.5s;*/
    box-shadow: var(--shadow);
    gap: 16px;
  }

  .loading > div > * {
    margin: 0;
  }

  .loading > div > img {
    height: 128px;
  }

  .loading > div > h1 {
    margin-bottom: 8px;
  }

  .loading > div > p {
    text-align: center;
    width: 400px;
  }
}

@media screen and (hover: none) {
  .loading {
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

  .loading > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6vw;
    border-radius: 6vw;
    /*animation: Blur ease-out 0.5s;*/
    box-shadow: var(--shadow);
    gap: 4vw;
  }

  .loading > div > * {
    margin: 0;
  }

  .loading > div > img {
    height: 40vw;
  }

  .loading > div > h1 {
    margin-bottom: 2vw;
  }

  .loading > div > p {
    text-align: center;
    width: 80vw;
  }
}
</style>