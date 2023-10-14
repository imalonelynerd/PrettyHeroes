<script setup>

const props = defineProps(
    ["cols"]
)

</script>

<template>
  <div class="dpage">
    <div :style="`background: color-mix(in srgb,${cols.widget === '' ? 'var(--wi)' : cols.widget}, var(--alpha))`">
      <h1 :style="'color:' + cols.title === '' ? 'var(--text)' : cols.title"> Title </h1>
    </div>
    <div :style="`background: color-mix(in srgb,${cols.widget === '' ? 'var(--wi)' : cols.widget}, var(--alpha))`">
      <p :style="'color:' + cols.text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div :style="`background: color-mix(in srgb,${cols.widget === '' ? 'var(--wi)' : cols.widget}, var(--alpha))`">
      <a :style="`background: color-mix(in srgb,${cols.link === '' ? 'var(--wi)' : cols.link}, var(--alpha))`">
        <img src="/icons/create.png">
        <p>Link</p>
      </a>
      <a :style="`background: ${cols.hover === '' ? 'var(--ho)' : cols.hover}`">
        <img src="/icons/create.png">
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
    gap: 16px;
  }

  .dpage > div {
    width: 60%;
    border-radius: 16px;
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
    border-radius: 999px;
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
    border-radius: 4vw;
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
    border-radius: 999px;
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