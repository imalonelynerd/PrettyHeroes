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
@media screen and (hover: hover) {
  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    background: color-mix(in srgb, var(--cwi), var(--alpha));
    backdrop-filter: var(--blur);
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
    background: color-mix(in srgb, var(--cwi), var(--alpha));
    backdrop-filter: var(--blur);
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

@media screen and (hover: none) {
  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    background: color-mix(in srgb, var(--cwi), var(--alpha));
    backdrop-filter: var(--blur);
    padding: 6vw;
    border-radius: 4vw;
    gap: 2vw;
    box-shadow: var(--shadow);
  }

  .links > a {
    padding: 4vw 6vw;
    border-radius: 12vw;
    font-size: 1em;
    font-weight: bold;
    background: color-mix(in srgb, var(--cwi), var(--alpha));
    backdrop-filter: var(--blur);
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
    margin: 0 0 0 2vw;
    padding: 0;
    transition: all 0.25s;
  }
}

</style>