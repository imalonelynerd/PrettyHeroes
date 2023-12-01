<script setup>
const props = defineProps(
//    ["title", "catchphrase", "imgSrc", "pronouns"]
    ["catchphrase", "imgSrc", "pronouns", "name1", "name2", "age"]
);
</script>

<template>
  <div class="herotitle">
    <img :src="imgSrc === '' ? '/images/unknown.png' : imgSrc">
    <h1>{{ name1 }} <span>{{ name2 }}</span>, {{ age }}</h1>
    <h4 v-if="catchphrase !== ''">{{ catchphrase }}</h4>
    <p>{{ pronouns.join(' - ') }}</p>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .herotitle {
    color: var(--ctxt);
    padding: 0px 0;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover !important;
    gap: 16px;
  }

  .herotitle > * {
    margin: 0;
  }

  .herotitle > h1 {
    color: var(--ctt);
    text-align: center;
  }

  .herotitle > h1 > span {
    opacity: 0.66;
    font-size: 0.75em;
  }

  .herotitle > img {
    border-radius: var(--radius-button);
    height: 108px;
    box-shadow: var(--shadow);
  }
}

@media screen and (orientation: portrait) {
  .herotitle {
    color: var(--ctxt);
    padding: 6vw 0;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover !important;
    gap: 3vw;
  }

  .herotitle > * {
    margin: 0;
  }

  .herotitle > h1 {
    color: var(--ctt);
  }

  .herotitle > h1 > span {
    opacity: 0.66;
    font-size: 0.75em;
  }

  .herotitle > img {
    border-radius: var(--radius-button);
    height: 20vw;
    box-shadow: var(--shadow);
  }
}
</style>