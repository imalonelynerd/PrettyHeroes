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
@media screen and (orientation: landscape) {
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
    background: color-mix(in srgb, var(--cwi), transparent 50%);
    backdrop-filter: blur(10px);
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

@media screen and (orientation: portrait) {
  .herotitle {
    color: var(--ctxt);
    padding: 3vh 0;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover !important;
    gap: 1vh;
    background: color-mix(in srgb, var(--cwi), transparent 50%);
    backdrop-filter: blur(10px);
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
    height: 15vh;
    box-shadow: var(--shadow);
  }
}
</style>