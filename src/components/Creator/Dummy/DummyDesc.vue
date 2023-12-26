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
@media screen and (hover: hover) {
  .ddesc {
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    border-radius: var(--radius);
    padding: 16px 32px;
    box-shadow: var(--shadow);
  }
}

</style>