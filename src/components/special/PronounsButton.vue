<script setup lang="ts">
import ItemElement from '@/components/elements/ItemElement.vue'
</script>

<template>
  <ItemElement
    font-color="#FF005C"
    icon-color="#FF005C"
    background="#FFBCD4"
    hover-color="#FF72A5"
    :is-clickable="true"
    ><img alt="Pronouns Page" src="/icons/pronouns.png" />
    <p>pronouns.page</p>
  </ItemElement>
</template>
