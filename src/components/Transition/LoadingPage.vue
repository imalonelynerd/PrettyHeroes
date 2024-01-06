<script setup>
import {useRoute} from "vue-router";
import Background from "@/components/Hero/Background.vue";

const routeObj = useRoute();
const userTag = routeObj.params.user;
</script>

<template>
  <Background bg-img="/bg/bg.png"/>
  <div class="loading">
    <div>
      <img src="/images/loading.png" alt="Loading"/>
      <h1>Loading...</h1>
      <p>Fetching <b>{{ userTag }}</b>'s Hero...</p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .loading {
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

  .loading > * {
    margin: 0;
  }

  .loading > img {
    height: 160px;
  }

  .loading > h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .loading > h1 > code {
    padding: 10px 14px !important;
    font-size: 0.5em;
    border-radius: var(--radius-button) !important;
    background: color-mix(in srgb, var(--wi), var(--alpha));
  }

  .loading > h1 > code:hover {
    background: var(--ho);
  }

  .loading > * {
    margin: 0;
  }

  .loading > h2 {
    color: var(--text);
    opacity: 0.75;
    font-style: italic;
  }

  .loading > h2:hover {
    color: var(--ho);
    opacity: 1;
  }

  .loading > p {
    text-align: center;
    width: 80%;
  }
}

@media screen and (hover: none) {
  .loading {
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

  .loading > * {
    margin: 0;
    text-align: center;
  }

  .loading > img {
    margin-left: auto;
    margin-right: auto;
    height: 40vw;
    width: 40vw;
  }

  .loading > h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vw;
  }

  .loading > h1 > code {
    padding: 2vw 4vw !important;
    font-size: 0.5em;
    border-radius: var(--radius-button) !important;
    background: color-mix(in srgb, var(--wi), var(--alpha));
  }

  .loading > h1 > code:active {
    background: var(--ho);
  }

  .loading > * {
    margin: 0;
  }

  .loading > h2 {
    color: var(--text);
    opacity: 0.75;
    font-style: italic;
  }

  .loading > h2:active {
    color: var(--ho);
    opacity: 1;
  }
}

</style>