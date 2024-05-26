<script setup lang="ts"></script>

<template>
  <div class="InputsContainer">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.InputsContainer
  box-sizing: border-box
  width: 400px
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: start
  align-items: stretch
  gap: 32px
  padding: 16px
</style>
