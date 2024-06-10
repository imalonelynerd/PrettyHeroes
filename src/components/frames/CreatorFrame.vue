<script setup lang="ts"></script>

<template>
  <div class="CreatorFrame">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.CreatorFrame
  position: absolute
  overflow: hidden
  top: 0
  bottom: 0
  left: 0
  right: 0
  display: flex
  flex-direction: row
  justify-content: stretch
  align-items: stretch
</style>
