<script setup>
import {ref} from "vue";

defineProps(
    ["catchphrase", "imgSrc", "pronouns", "name1", "name2", "age"]
);

const isLoaded = ref(true);
</script>

<template>
  <div class="herotitle">
    <img :src="imgSrc === '' || !isLoaded ? '/images/unknown.png' : imgSrc" alt="Avatar"
         @error="isLoaded = false"
    />
    <div>
      <h1>{{ name1 }} <span>{{ name2 }}</span>, {{ age }}</h1>
      <h4 v-if="catchphrase !== ''">{{ catchphrase }}</h4>
      <p>{{ pronouns.join(' - ') }}</p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
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
    text-align: center;
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

@media screen and (hover: none) {
  .herotitle {
    color: var(--ctxt);
    padding: 0;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover !important;
    gap: 6vw;
    text-align: center;
  }

  .herotitle > *, .herotitle > * > * {
    margin: 0;
  }

  .herotitle > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vw;
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
    height: 30vw;
    box-shadow: var(--shadow);
  }
}
</style>