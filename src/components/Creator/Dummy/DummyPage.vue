<script setup>

import {Color, hexToRgb, Solver} from "@/assets/js/cssColor";

const props = defineProps(
    ["cols"]
)

function setIconColor() {
  let colstr = "none";
  if(props.cols.title !== ''){
    let rgb = hexToRgb(props.cols.title.substring(0,7));
    if(rgb != null){
      let color = new Color(rgb[0], rgb[1], rgb[2]);
      colstr = new Solver(color).solve().filter;
    }
  }
  return colstr;
}

</script>

<template>
  <div class="dpage">
    <div :style="`background: color-mix(in srgb,${cols.background === '' ? 'var(--bg)' : cols.background}, var(--alpha))`">
      <h1 :style="`color: ${cols.title === '' ? 'var(--text)' : cols.title}`"> Title </h1>
    </div>
    <div :style="`background: color-mix(in srgb,${cols.background === '' ? 'var(--bg)' : cols.background}, var(--alpha))`">
      <p :style="`color: ${cols.text === '' ? 'var(--text)' : cols.text}`">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div :style="`background: color-mix(in srgb,${cols.background === '' ? 'var(--bg)' : cols.background}, var(--alpha))`">
      <a :style="`background: color-mix(in srgb,${cols.link === '' ? 'var(--wi)' : cols.link}, var(--alpha))`">
        <img src="/icons/create.png" :style="`filter: ${cols.title === '' ? 'none' : setIconColor()}`">
        <p>Link</p>
      </a>
      <a :style="`background: ${cols.hover === '' ? 'var(--ho)' : cols.hover}`">
        <img src="/icons/create.png" :style="`filter: ${cols.title === '' ? 'none' : setIconColor()}`">
        <p>Hovered</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .dpage {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    gap: 8px;
  }

  .dpage > div {
    width: 60%;
    border-radius: var(--radius);
    padding: 24px 32px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    backdrop-filter: var(--blur);
    box-shadow: var(--shadow);
  }

  .dpage > div:nth-of-type(2) {
    height: 100px;
  }

  .dpage > div > * {
    margin: 0;
  }

  .dpage > div > h1 {
    width: 100%;
    text-align: center;
    color: var(--text);
  }

  .dpage > div > a {
    padding: 16px 24px;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: default;
    backdrop-filter: var(--blur);
  }

  .dpage > div > a > img {
    height: 1.25em;
  }

  .dpage > div > a > p {
    margin: 0 0 0 8px;
    padding: 0;
    transition: all 0.25s;
  }
}
@media screen and (hover: none) {
  .dpage {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    gap: 4vw;
  }

  .dpage > div {
    width: 80%;
    border-radius: var(--radius);
    padding: 4vw 6vw;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 2vw;
    backdrop-filter: var(--blur);
    box-shadow: var(--shadow);
  }

  .dpage > div:nth-of-type(2) {
    height: 20vw;
  }

  .dpage > div > * {
    margin: 0;
  }

  .dpage > div > h1 {
    width: 100%;
    text-align: center;
    color: var(--text);
  }

  .dpage > div > a {
    padding: 4vw 6vw;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: default;
    backdrop-filter: var(--blur);
  }

  .dpage > div > a > img {
    height: 1.25em;
  }

  .dpage > div > a > p {
    margin: 0 0 0 2vw;
    padding: 0;
    transition: all 0.25s;
  }
}

</style>