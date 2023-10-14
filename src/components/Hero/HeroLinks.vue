<script setup>
const props = defineProps(["links"])

function defineTitle(title, index) {
  if (title === "") {
    return `Link ${index}`;
  }
  return title;
}
</script>

<template>
  <div class="links" v-if="links !== undefined">
    <a v-for="(elem, index) in links" :href="elem.url">
      <img src="/icons/create.png"/>
      <p>{{ defineTitle(elem.title, index) }}</p>
    </a>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    background: color-mix(in srgb, var(--cwi), transparent 50%);
    backdrop-filter: blur(10px);
    padding: 32px;
    border-radius: 16px;
    gap: 8px;
    box-shadow: var(--shadow);
  }

  .links > a {
    padding: 16px 24px;
    border-radius: 999px;
    font-size: 1em;
    font-weight: bold;
    background: var(--cwi);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;

  }

  .links > a:hover {
    background: var(--cho);
  }

  .links > a > img {
    height: 1.25em;
  }

  .links > a > p {
    margin: 0 0 0 8px;
    padding: 0;
    transition: all 0.25s;
  }
}

@media screen and (orientation: portrait) {
  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    background: color-mix(in srgb, var(--cwi), transparent 50%);
    backdrop-filter: blur(10px);
    padding: 3vh;
    border-radius: 2vh;
    gap: 1vh;
    box-shadow: var(--shadow);
  }

  .links > a {
    padding: 2vh 3vh;
    border-radius: 6vh;
    font-size: 1em;
    font-weight: bold;
    background: var(--cwi);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;

  }

  .links > a:active {
    background: var(--cho);
  }

  .links > a > img {
    height: 1.25em;
  }

  .links > a > p {
    margin: 0 0 0 1vh;
    padding: 0;
    transition: all 0.25s;
  }
}

</style>