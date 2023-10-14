<script setup>
const props = defineProps(
    ["title", "catchphrase", "imgSrc", "pronouns"]
);
</script>

<template>
  <div class="herotitle">
    <img :src="imgSrc">
    <h1>{{ title }}</h1>
    <h4>{{ catchphrase }}</h4>
    <p>{{ pronouns.join(' - ')}}</p>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .herotitle {
    color: var(--ctxt);
    padding: 32px 0;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover !important;
    gap: 8px;
    background: color-mix(in srgb, var(--cwi), var(--alpha));
    backdrop-filter: var(--blur);
    box-shadow: var(--shadow);
  }

  .herotitle > * {
    margin: 0;
  }

  .herotitle > h1 {
    color: var(--ctt);
  }

  .herotitle > img {
    border-radius: 999px;
    height: 108px;
    box-shadow: var(--shadow);
  }
}

@media screen and (hover: none) {
  .herotitle {
    color: var(--ctxt);
    padding: 6vw 0;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover !important;
    gap: 2vw;
    background: color-mix(in srgb, var(--cwi), var(--alpha));
    backdrop-filter: var(--blur);
    box-shadow: var(--shadow);
  }

  .herotitle > * {
    margin: 0;
  }

  .herotitle > h1 {
    color: var(--ctt);
  }

  .herotitle > img {
    border-radius: 999px;
    height: 20vw;
    box-shadow: var(--shadow);
  }
}
</style>