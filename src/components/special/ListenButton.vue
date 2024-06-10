<script setup lang="ts">
import ItemElement from '@/components/elements/ItemElement.vue'
</script>

<template>
  <ItemElement
    font-color="#0085FF"
    icon-color="#0085FF"
    background="#90CAFF"
    hover-color="#5EB1FF"
    :is-clickable="true"
    ><img alt="Play" src="/icons/play.png" />
    <p>Listen</p>
  </ItemElement>
</template>
