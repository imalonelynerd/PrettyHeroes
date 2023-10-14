<script setup>
defineProps(['imgSrc', 'placeHolder']);
defineEmits(['update:imgSrc']);
</script>

<template>
  <input
      class="iminput"
      :style="imgSrc === '' ? `color-mix(in srgb, var(--wi), var(--alpha))` : `background : linear-gradient(#00000040, #00000040), url('${imgSrc}') no-repeat center center`"
      type="text"
      :value="imgSrc"
      :placeholder="placeHolder"
      @input="$emit('update:imgSrc', $event.target.value)">
</template>

<style scoped>

@media screen and (hover: hover) {
  .iminput {
    padding: 16px 24px;
    border-radius: 999px;
    border: none;
    font-size: 1em;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    transition: all 0.25s;
    color: var(--text);
    min-width: 0;
    flex: 1 1;
    background-size: cover !important;
  }

  .iminput:hover {
    background: var(--ho) !important;
  }
}

@media screen and (hover: none) {
  .iminput {
    padding: 4vw 6vw;
    border-radius: 999px;
    border: none;
    font-size: 1em;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    transition: all 0.25s;
    color: var(--text);
    min-width: 0;
    flex: 1 1;
    background-size: cover !important;
  }

  .iminput:active {
    background: var(--ho) !important;
  }
}


</style>