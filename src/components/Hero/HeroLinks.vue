<script setup>
defineProps(["links"])

</script>

<template>
  <div v-if="links !== undefined" class="links">
    <a v-for="(elem, index) in links" :href="elem.url" rel="noopener noreferrer" target="_blank">
      <img src="/icons/link.png"/>
      <p>{{ elem.title }}</p>
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
    background: color-mix(in srgb, var(--cbg), var(--alpha));
    backdrop-filter: var(--blur);
    padding: 32px;
    border-radius: var(--radius);
    gap: 8px;
    box-shadow: var(--shadow);
  }

  .links > a {
    padding: 16px 24px;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    background: color-mix(in srgb, var(--clk), var(--alpha));
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
    filter: var(--fil);
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
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    background: color-mix(in srgb, var(--cbg), var(--alpha));
    backdrop-filter: var(--blur);
    padding: 6vw;
    border-radius: var(--radius);
    gap: 2vw;
    box-shadow: var(--shadow);
  }

  .links > a {
    padding: 4vw 6vw;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    background: color-mix(in srgb, var(--clk), var(--alpha));
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
    filter: var(--fil);
  }

  .links > a > p {
    margin: 0 0 0 2vw;
    padding: 0;
    transition: all 0.25s;
  }
}

</style>