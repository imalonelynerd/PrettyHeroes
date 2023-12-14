<script setup>

import PronounceCompat from "@/assets/json/pronounceCompat.json";
import WideButton from "@/components/Home/WideButton.vue";
import {changeLoc} from "@/assets/js/miscTools";

defineEmits([
  "update:hideBtn"
])
</script>

<template>
  <div class="pro-container">
    <div id="promess">
      <img :src="PronounceCompat.imgsource" alt="Pronounce">
      <h1 v-html="PronounceCompat.title"></h1>
      <p v-html="PronounceCompat.message"></p>
      <div>
        <WideButton
            @update:buttonClicked="$emit('update:hideBtn')"
            img-link="/icons/back.png"
            shown-title="Back"
        />
        <WideButton
            @update:buttonClicked="$router.push('/creator')"
            img-link="/icons/create.png"
            shown-title="Hero Creator"
        />
        <WideButton
            v-if="$route.params.nocolor !== 'nocolor'"
            @update:buttonClicked="changeLoc(`/${$route.params.user}/nocolor`, false)"
            img-link="/icons/nocolor.png"
            shown-title="Disable colors"
        />
        <WideButton
            v-else
            @update:buttonClicked="changeLoc(`/${$route.params.user}`, false)"
            img-link="/icons/nocolor.png"
            shown-title="Enable colors"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

@media screen and (orientation: landscape) {
  .pro-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--bg), var(--alpha2));
    z-index: 5;
    animation: BgAnimation ease-out 0.5s;
  }

  #promess {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 40vw;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 32px;
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    animation: SlideAnimation ease-out 0.5s;
    padding: 64px;
  }

  #promess > * {
    margin: 0;
  }

  #promess > p {
    width: 100%;
  }

  #promess > ul {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  #promess > div:not(.flags) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }


  #promess > div:not(.flags) > a {
    width: fit-content;
    padding: 16px 24px;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  #promess > div:not(.flags) > a:hover {
    background: var(--ho);
  }

  #promess > div:not(.flags) > a > img {
    height: 1.25em;
  }

  #promess > div:not(.flags) > a > p {
    margin: 0 0 0 8px;
    padding: 0;
  }

  #promess > img {
    height: 128px;
  }
}
</style>