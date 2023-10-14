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
@media screen and (orientation: landscape) {
  .desc {
    color: var(--ctxt);
    padding: 36px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    background: color-mix(in srgb, var(--cwi), transparent 50%);
    backdrop-filter: blur(10px);
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
  }
}

@media screen and (orientation: portrait) {
  .desc {
    color: var(--ctxt);
    padding: 3vh;
    border-radius: 2vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    background: color-mix(in srgb, var(--cwi), transparent 50%);
    backdrop-filter: blur(10px);
    gap: 3vh;
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
    gap: 1vh;
  }

  #desc {
    text-align: start;
  }

  #lwt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;
  }

  #lwt > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1vh;
  }

  #lwt > div > * {
    margin: 0;
  }

  #lwt > div > img {
    height: 1.5em;
  }
}

</style>