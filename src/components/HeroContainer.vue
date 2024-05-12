<script setup>
defineProps({
  background: {
    type: String,
    default: 'linear-gradient(#E7366B, #7D0BB2)'
    //TODO : temporary
  }
})
</script>

<template>
  <div class="HeroContainer">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass">
.HeroContainer
  position: absolute
  overflow: scroll
  top: 0
  left: 0
  right: 0
  bottom: 0
  display: flex
  flex-direction: column
  justify-content: start
  align-items: center
  background: v-bind(background)
  background-position: center center
  background-repeat: no-repeat
  background-size: cover

  > div
    width: 700px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: stretch
    gap: 24px
    margin: 128px 0
</style>
