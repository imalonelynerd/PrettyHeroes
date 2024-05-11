<script setup>
import ItemElement from '@/components/elements/ItemElement.vue'
</script>

<template>
  <ItemElement
    font-color="#BA2C3A"
    icon-color="#BA2C3A"
    background="#FF8692"
    hover-color="#DF4050"
    :is-clickable="true"
  >
    <img src="/icons/pronounce.png" />
    <p>from Pronounce</p>
  </ItemElement>
</template>
