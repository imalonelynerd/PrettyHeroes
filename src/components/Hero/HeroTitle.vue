<script setup>
defineProps(
    ["catchphrase", "imgSrc", "pronouns", "name1", "name2", "age"]
);
</script>

<template>
  <div class="herotitle">
    <img :src="imgSrc === '' ? '/images/unknown.png' : imgSrc" alt="Avatar">
    <div>
      <h1>{{ name1 }} <span>{{ name2 }}</span>, {{ age }}</h1>
      <h4 v-if="catchphrase !== ''">{{ catchphrase }}</h4>
      <p>{{ pronouns.join(' - ') }}</p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .herotitle {
    color: var(--ctxt);
    padding: 0;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover !important;
    gap: 24px;
  }

  .herotitle > *, .herotitle > * > * {
    margin: 0;
  }

  .herotitle > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .herotitle > div > h1 {
    color: var(--ctt);
    text-align: center;
  }

  .herotitle > div > h1 > span {
    opacity: 0.66;
    font-size: 0.75em;
  }

  .herotitle > img {
    border-radius: var(--radius-button);
    height: 160px;
    box-shadow: var(--shadow);
  }
}
</style>