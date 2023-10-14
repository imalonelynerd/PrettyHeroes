<script setup>
defineProps(["desc"])
import {marked} from "marked";
</script>

<template>
  <div class="ddesc" v-html="marked.parse(desc)">
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .ddesc {
    background: color-mix(in srgb, var(--wi), transparent 33%);
    border-radius: 16px;
    padding: 16px 32px;
    box-shadow: var(--shadow);
  }
}

@media screen and (orientation: portrait) {
  .ddesc {
    background: color-mix(in srgb, var(--wi), transparent 33%);
    border-radius: 2vh;
    padding: 2vh 3vh;
    box-shadow: var(--shadow);
  }
}

</style>