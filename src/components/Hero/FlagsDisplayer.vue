<script setup>
import {ref} from "vue";
import flagsMatches from "/src/assets/json/flagsMatches.json"

const props = defineProps([
  "flagsList"
])

const tooMuch = ref(false);
const flags = ref([])

if (props.flagsList === "all") {
  for (let flag in flagsMatches) {
    flags.value.push(flag);
  }
} else {
  if (props.flagsList !== undefined) {
    flags.value = props.flagsList;
    if (props.flagsList.length >= 14) {
      props.flagsList.length = 13;
      tooMuch.value = true;
    }
  }
}

function getFlag(req) {
  if (props.flagsList === "all") {
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
  <div class="flags" v-if="flagsList !== undefined && flags.length > 0">
    <img v-for="k in flags" :src="'/flags/' + getFlag(k)['img']" :title="getFlag(k)['name']"/>
    <img v-if="tooMuch" src="/flags/toomuch.png"/>
  </div>
</template>

<style scoped>
.flags {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

/*.flags > * {
  margin: 0;
}

.flags > *:not(:last-child) {
  margin-right: 16px;
}*/

.flags > img {
  height: 1.5em;
}
</style>