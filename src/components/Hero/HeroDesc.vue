<script setup>

import FlagsDisplayer from "@/components/Hero/FlagsDisplayer.vue";
import {marked} from "marked";

function markDownize(content) {
  let markedContent = "";
  try {
    markedContent = marked.parse(content);
  } catch {
    return "I'm bad at Markdown !";
  }
  return markedContent;
}

defineProps(["name1", "name2", "age", "pronouns", "desc", 'flags'])
</script>

<template>
  <div class="desc">
    <h1 v-if="name1 !== '' || name2 !== ''">{{ name1 }} <span>{{ name2 }}</span></h1>
    <h2 v-if="age !== '' || pronouns !== []">{{ age + ", " + pronouns.join(' - ') }}</h2>
    <FlagsDisplayer :flags-list="flags"/>
    <div v-if="desc !== ''" v-html="markDownize(desc)"></div>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .desc {
    color: var(--ctxt);
    padding: 32px;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    background: var(--cwi);

  }

  .desc > * {
    margin: 0;
  }

  .desc > h1 > span {
    opacity: 0.66;
  }

  .desc > h2 {
    opacity: 0.5;
    font-size: 1.25em;
  }

  .desc > *:not(:last-child) {
    margin-bottom: 16px;
  }
}

@media screen and (hover: none) {
  .desc {
    color: var(--ctxt);
    padding: 4vh;
    border-radius: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    background: var(--cwi);

  }

  .desc > * {
    margin: 0;
  }

  .desc > h1 > span {
    opacity: 0.66;
  }

  .desc > h2 {
    opacity: 0.5;
    font-size: 1.25em;
  }

  .desc > *:not(:last-child) {
    margin-bottom: 3vh;
  }
}

</style>