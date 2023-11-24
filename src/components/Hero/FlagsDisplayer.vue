<script setup>
import {ref} from "vue";
import flagsMatches from "/src/assets/json/flagsMatches.json"

const props = defineProps([
  "flagsList", "hasAll"
])


const flags = ref([])

if (props.hasAll) {
  for (let flag in flagsMatches) {
    if(flag !== "foo"){
      props.flagsList.push(flag);
    }
  }
}

function getFlag(req) {
  if (props.hasAll) {
    return {
      "img": flagsMatches[req]["img"],
      "name": req
    };
  }

  if (!(req in flagsMatches)) {
    return {
      "img": "unknown.png",
      "name": req
    }
  }
  return flagsMatches[req];
}

</script>

<template>
  <div class="flags" v-if="flagsList !== undefined && flagsList.length > 0">
    <div v-for="k in flagsList" :title="getFlag(k)['name']">
      <img :src="'/flags/' + getFlag(k)['img']"/>
      <p>{{ getFlag(k)['name'] }}</p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .flags {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 8px;
  }

  .flags > div {
    margin: 0;
    padding: 8px 10px 8px 8px;
    gap: 12px;
    border-radius: var(--radius-button);
    font-size: 1em;
    background: color-mix(in srgb, var(--cwi), var(--alpha));
    /*backdrop-filter: var(--blur);*/
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: default;
    transition: all 0.25s;
  }

  .flags > div > img {
    height: 1.5em;
  }

  .flags > div > p {
    padding: 0;
    margin: 0;
    font-weight: bold;
    transition: all 0.25s;
  }
}

@media screen and (hover: none) {
  .flags {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 2vw;
  }

  .flags > div {
    margin: 0;
    padding: 2vw;
    gap: 2vw;
    border-radius: var(--radius-button);
    font-size: 1em;
    background: color-mix(in srgb, var(--cwi), var(--alpha));
    /*backdrop-filter: var(--blur);*/
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: default;
    transition: all 0.25s;
  }

  .flags > div > img {
    height: 1.5em;
  }

  .flags > div > p {
    padding: 0;
    margin: 0;
    font-weight: bold;
    transition: all 0.25s;
  }
}
</style>