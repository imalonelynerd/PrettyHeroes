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

defineProps(["name1", "name2", "age", "desc", 'flags', 'work', 'timezone', 'location'])


</script>

<template>
  <div class="desc">
    <h1>{{ name1 }} <span>{{ name2 }}</span>, {{ age }}</h1>
    <div id="lwt" v-if="!((timezone + work + location) === '')">
      <div title="Location" v-if="location !== ''">
        <img src="/icons/location.png">
        <p>{{ location }}</p>
      </div>
      <div title="Work" v-if="work !== ''">
        <img src="/icons/work.png">
        <p>{{ work }}</p>
      </div>
      <div title="Timezone" v-if="timezone !== ''">
        <img src="/icons/timezone.png">
        <p>{{ timezone }}</p>
      </div>
    </div>
    <FlagsDisplayer :flags-list="flags"/>
    <div id="desc" v-if="desc !== ''" v-html="markDownize(desc)"></div>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .desc {
    color: var(--ctxt);
    padding: 36px;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    background: color-mix(in srgb, var(--cbg), var(--alpha));
    backdrop-filter: var(--blur);
    gap: 24px;
    box-shadow: var(--shadow);
  }

  .desc > * {
    margin: 0;
  }

  .desc > h1 > span {
    opacity: 0.66;
    font-size: 0.75em;
  }

  .desc > h2 {
    opacity: 0.5;
    font-size: 1.25em;
  }

  .desc > p {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 8px;
  }

  #lwt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 12px;
  }

  #lwt > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  #lwt > div > * {
    margin: 0;
  }

  #lwt > div > img {
    height: 1.5em;
    filter: var(--fil);
  }
}

@media screen and (hover: none) {
  .desc {
    color: var(--ctxt);
    padding: 6vw;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    background: color-mix(in srgb, var(--cbg), var(--alpha));
    backdrop-filter: var(--blur);
    gap: 8vw;
    box-shadow: var(--shadow);
  }

  .desc > * {
    margin: 0;
    text-align: center;
  }

  .desc > h1 > span {
    opacity: 0.66;
    font-size: 0.75em;
  }

  .desc > h2 {
    opacity: 0.5;
    font-size: 1.25em;
  }

  .desc > p {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 2vw;
  }

  #desc {
    text-align: start;
  }

  #lwt {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  #lwt > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2vw;
  }

  #lwt > div > * {
    margin: 0;
  }

  #lwt > div > img {
    height: 1.5em;
    filter: var(--fil);
  }
}

</style>