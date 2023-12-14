<script setup>

import {Color, hexToRgb, Solver} from "@/assets/js/cssColor";
import FlagsDisplayer from "@/components/Hero/FlagsDisplayer.vue";

defineProps(
    ["cols"]
)

function getFilter(color) {
  let rgb = hexToRgb(color);
  if (rgb != null) {
    let color = new Color(rgb[0], rgb[1], rgb[2]);
    let solver = new Solver(color);
    return solver.solve().filter;
  }
}

</script>

<template>
  <div class="dpage"
       :style="`background: color-mix(in srgb,${cols.background === '' ? 'var(--bg)' : cols.background}, var(--alpha))`">
    <div>
      <h1 :style="`color: ${cols.title === '' ? 'var(--text)' : cols.title}`"> Title </h1>
    </div>
    <div>
      <FlagsDisplayer :bg-special="cols.widget === '' ? 'var(--wi)' : cols.widget"
                      :flags-list="['test','test','test']"
                      :style="`color: ${cols.text === '' ? 'var(--text)' : cols.text}`"/>
      <p :style="`color: ${cols.text === '' ? 'var(--text)' : cols.text}`">Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed non risus.
      </p>
    </div>
    <div>
      <a :style="`background: color-mix(in srgb,${cols.link === '' ? 'var(--wi)' : cols.link}, var(--alpha))`">
        <img :style="`filter: ${getFilter(cols.title)}`" src="/icons/link.png" alt="Link">
        <p :style="`color: ${cols.text === '' ? 'var(--text)' : cols.text}`">Link</p>
      </a>
      <a :style="`background: ${cols.hover === '' ? 'var(--ho)' : cols.hover}`">
        <img :style="`filter: ${getFilter(cols.title)}`" src="/icons/link.png" alt="Link">
        <p :style="`color: ${cols.text === '' ? 'var(--text)' : cols.text}`">Hovered</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .dpage {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    backdrop-filter: var(--blur);
  }

  .dpage > div {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .dpage > div:nth-of-type(2) {
    height: 125px;
    gap: 16px;
    justify-content: center;
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
    box-shadow: var(--shadow);
  }

  .dpage > div > a > img {
    height: 1.25em;
    transition: all 0s !important;
  }

  .dpage > div > a > p {
    margin: 0 0 0 8px;
    padding: 0;
  }
}
</style>