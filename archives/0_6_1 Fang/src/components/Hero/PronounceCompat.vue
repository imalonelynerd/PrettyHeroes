<script setup>

import WideButton from "@/components/Home/WideButton.vue";
import {changeLoc} from "@/assets/js/miscTools";

defineEmits([
  "update:hideBtn"
])
</script>

<template>
  <div class="pro-container">
    <div id="promess">
      <img src="/images/pronounce.png" alt="Pronounce">
      <h1>About Pronounce compatibility</h1>
      <p>This Hero has been built from a <b>Pronounce</b> page in compatibility mode. Some quirks may appear (like an
        unreadable page due to the color palette). If you're the author of the <b>yaml file</b>, please edit it
        accordingly or <b>create a hero</b> using the <b>Hero Creator</b>.</p>
      <div>
        <WideButton
            @update:buttonClicked="$emit('update:hideBtn')"
            img-link="/icons/back.png"
            shown-title="Back"
            :fil-color="true"
        />
        <WideButton
            @update:buttonClicked="$router.push('/creator')"
            img-link="/icons/create.png"
            shown-title="Hero Creator"
            :fil-color="true"
        />
        <WideButton
            v-if="$route.params.nocolor !== 'nocolor'"
            @update:buttonClicked="changeLoc(`/${$route.params.user}/nocolor`, false)"
            img-link="/icons/nocolor.png"
            shown-title="Disable colors"
            :fil-color="true"
        />
        <WideButton
            v-else
            @update:buttonClicked="changeLoc(`/${$route.params.user}`, false)"
            img-link="/icons/nocolor.png"
            shown-title="Enable colors"
            :fil-color="true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

@media screen and (hover: hover) {
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

  #promess > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }


  #promess > div > a {
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

  #promess > div > a:hover {
    background: var(--ho);
  }

  #promess > div > a > img {
    height: 1.25em;
  }

  #promess > div > a > p {
    margin: 0 0 0 8px;
    padding: 0;
  }

  #promess > img {
    height: 128px;
  }
}

@media screen and (hover: none) {
  .pro-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 5;
  }

  #promess {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 6vw;
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    animation: SlideAnimation ease-out 0.5s;
    padding: 16vw 8vw 8vw;
  }

  #promess > * {
    margin: 0;
  }

  #promess > p {
    width: 100%;
  }

  #promess > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 2vw;
    width: 100%;
  }

  #promess > img {
    height: 40vw;
  }
}
</style>