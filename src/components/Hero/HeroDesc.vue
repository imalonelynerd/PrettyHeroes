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
        <img src="/icons/location.png">
        <p>{{ location }}</p>
      </div>
      <div v-if="work !== ''" title="Work">
        <img src="/icons/work.png">
        <p>{{ work }}</p>
      </div>
      <div v-if="timezone !== ''" title="Timezone">
        <img src="/icons/timezone.png">
        <p>{{ timezone }}</p>
      </div>
    </div>
    <FlagsDisplayer :flags-list="flags"/>
    <div v-if="desc !== ''" id="desc" v-html="markDownize(desc)"></div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .desc {
    color: var(--ctxt);
    padding: 0 0;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 64px;
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
    gap: 64px;
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
    filter: var(--fil);
  }

  /*#desc > *:first-child {
    margin-top: 0 !important;
  }

  #desc > *:last-child {
    margin-bottom: 0 !important;
  }*/

  #desc {
    margin-top: -1em;
    margin-bottom: -1em;
  }
}

@media screen and (orientation: portrait) {
  .desc {
    color: var(--ctxt);
    padding: 6vw;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 8vw;
  }

  .desc > * {
    margin: 0;
    text-align: center;
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