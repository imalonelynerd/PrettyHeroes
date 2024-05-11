<template>
  <div class="ItemContainer">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.ItemContainer
  display: flex
  flex-direction: row
  justify-content: start
  align-items: start
  flex-wrap: wrap
  gap: 12px
</style>
