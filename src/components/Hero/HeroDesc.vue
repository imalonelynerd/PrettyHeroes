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
    <p v-if="desc !== ''" v-html="markDownize(desc)"></p>
  </div>
</template>

<style scoped>
.desc {
  color: var(--ctxt);
  padding: 32px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: var(--cwi);
  filter: var(--shadow);
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

tab {
  width: 5em;
}
</style>