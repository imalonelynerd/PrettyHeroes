<script setup>
defineProps(["desc"])
import {marked} from "marked";
</script>

<template>
  <div class="ddesc" v-html="marked.parse(desc)">
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .ddesc {
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    border-radius: var(--radius);
    padding: 16px 32px;
    box-shadow: var(--shadow);
  }
}

@media screen and (hover: none) {
  .ddesc {
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    border-radius: var(--radius);
    padding: 4vw 6vw;
    box-shadow: var(--shadow);
  }
}

</style>