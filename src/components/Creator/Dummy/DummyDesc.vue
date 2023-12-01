<script setup>
defineProps(["desc"])
import {marked} from "marked";
import DOMPurify from 'dompurify';
</script>

<template>
  <div class="ddesc" v-html="DOMPurify.sanitize(marked.parse(desc))">
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .ddesc {
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    border-radius: var(--radius);
    padding: 16px 32px;
    box-shadow: var(--shadow);
  }
}

@media screen and (orientation: portrait) {
  .ddesc {
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    border-radius: var(--radius);
    padding: 4vw 6vw;
    box-shadow: var(--shadow);
  }
}

</style>