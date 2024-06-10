<script setup lang="ts">
defineProps({
  background: {
    type: String,
    default: 'linear-gradient(#E7366B, #7D0BB2)'
    //TODO : temporary
  }
})
</script>

<template>
  <div class="DummyHero">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<!--suppress CssReplaceWithShorthandSafely -->
<style lang="sass">
.DummyHero
  flex: 1 0
  overflow-y: scroll
  display: flex
  flex-direction: column
  justify-content: start
  align-items: center
  background: v-bind(background)
  background-position: center center
  background-repeat: no-repeat
  background-size: cover

  > div
    width: 600px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: stretch
    gap: 24px
    margin: 128px 0 64px
</style>
