<script setup>

const props = defineProps(
    ["cols"]
)

</script>

<template>
  <div class="dpage">
    <div :style="`background: color-mix(in srgb,${cols.widget}, transparent 33%)`">
      <h1 :style="'color:' + cols.title"> Title </h1>
    </div>
    <div :style="`background: color-mix(in srgb,${cols.widget}, transparent 33%)`">
      <p :style="'color:' + cols.text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div :style="`background: color-mix(in srgb,${cols.widget}, transparent 33%)`">
      <a :style="`background: ${cols.link}`">
        <img src="/icons/create.png">
        <p>Link</p>
      </a>
      <a :style="`background: ${cols.hover}`">
        <img src="/icons/create.png">
        <p>Hovered</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
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
    background: color-mix(in srgb, var(--wi), transparent 33%);
    backdrop-filter: blur(10px);
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
    background: var(--wi);
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
@media screen and (orientation: portrait) {
  .dpage {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    gap: 2vh;
  }

  .dpage > div {
    width: 80%;
    border-radius: 2vh;
    padding: 2vh 3vh;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 1vh;
    background: color-mix(in srgb, var(--wi), transparent 33%);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow);
  }

  .dpage > div:nth-of-type(2) {
    height: 15vh;
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
    padding: 2vh 3vh;
    border-radius: 999px;
    font-size: 1em;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: default;
    background: var(--wi);
  }

  .dpage > div > a > img {
    height: 1.25em;
  }

  .dpage > div > a > p {
    margin: 0 0 0 1vh;
    padding: 0;
    transition: all 0.25s;
  }
}

</style>