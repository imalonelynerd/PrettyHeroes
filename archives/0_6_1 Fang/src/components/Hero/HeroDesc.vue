<script setup>

import FlagsDisplayer from "@/components/Hero/FlagsDisplayer.vue";
import {marked} from "marked";
import DOMPurify from 'dompurify';

function markDownize(content) {
  let markedContent = "";
  try {
    markedContent = DOMPurify.sanitize(marked.parse(content));
  } catch {
    return "-";
  }
  return markedContent;
}

//defineProps(["name1", "name2", "age", "desc", 'flags', 'work', 'timezone', 'location'])
defineProps(["desc", 'flags', 'work', 'timezone', 'location'])


</script>

<template>
  <div class="desc">
    <!--h1>{{ name1 }} <span>{{ name2 }}</span>, {{ age }}</h1-->
    <div v-if="!((timezone + work + location) === '')" id="lwt">
      <div v-if="location !== ''" title="Location">
        <img src="/icons/location.png" alt="Location">
        <p>{{ location }}</p>
      </div>
      <div v-if="work !== ''" title="Work">
        <img src="/icons/work.png" alt="Work">
        <p>{{ work }}</p>
      </div>
      <div v-if="timezone !== ''" title="Timezone">
        <img src="/icons/timezone.png" alt="Timezone">
        <p>{{ timezone }}</p>
      </div>
    </div>
    <FlagsDisplayer :flags-list="flags"/>
    <div v-if="desc !== ''" id="desc" v-html="markDownize(desc)"></div>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .desc {
    color: var(--ctxt);
    padding: 0;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 48px;
  }

  .desc > * {
    margin: 0;
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
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 36px;
  }

  #lwt > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  #lwt > div > * {
    margin: 0;
    font-weight: bold;
  }

  #lwt > div > img {
    height: 1.5em;
    transition: all 0s !important;
    filter: var(--fil);
  }

  #desc {
    margin-top: -1em;
    margin-bottom: -1em;
  }
}

@media screen and (hover: none) {
  .desc {
    color: var(--ctxt);
    padding: 0;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 12vw;
  }

  .desc > * {
    margin: 0;
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

  #lwt {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4vw 6vw;
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
    font-weight: bold;
  }

  #lwt > div > img {
    height: 1.5em;
    transition: all 0s !important;
    filter: var(--fil);
  }

  #desc {
    margin-top: -1em;
    margin-bottom: -1em;
  }
}
</style>