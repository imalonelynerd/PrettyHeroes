<script setup>
defineProps(['imgSrc', 'placeHolder']);
defineEmits(['update:imgSrc']);
</script>

<template>
  <input
      class="iminput"
      :style="`background : linear-gradient(#00000040, #00000040), url('${imgSrc}'), var(--col)`"
      type="text"
      :value="imgSrc"
      :placeholder="placeHolder"
      @input="$emit('update:imgSrc', $event.target.value)">
</template>

<style scoped>

@media screen and (orientation: landscape) {
  .iminput {
    padding: 16px 24px;
    border-radius: 999px;
    border: none;
    font-size: 1em;
    background: var(--wi);
    transition: all 0.25s;
    color: var(--text);

    min-width: 0;
    flex: 1 1;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: cover !important;
  }

  .iminput:hover {
    filter: brightness(125%) !important;
  }
}

@media screen and (orientation: portrait) {
  .iminput {
    padding: 2vh 3vh;
    border-radius: 999px;
    border: none;
    font-size: 1em;
    background: var(--wi);
    transition: all 0.25s;
    color: var(--text);

    min-width: 0;
    flex: 1 1;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: cover !important;
  }

  .iminput:active {
    filter: brightness(125%) !important;
  }
}


</style>