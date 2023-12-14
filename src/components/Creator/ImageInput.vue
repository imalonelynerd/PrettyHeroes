<script setup>
defineProps(['imgSrc', 'placeHolder']);
defineEmits(['update:imgUpdated']);
</script>

<template>
  <div
      :style="imgSrc === '' ? `background : color-mix(in srgb, var(--wi), var(--alpha))` : `background : url('${imgSrc}') right center`"
      class="iminput"
  >
    <input
        :style="imgSrc === '' ? `background : transparent` : `background : color-mix(in srgb, var(--wi), var(--alpha))`"
        :placeholder="placeHolder"
        :value="imgSrc"
        type="text"
        @input="$emit('update:imgUpdated', $event.target.value)">
    <div/>
  </div>

</template>

<style scoped>

@media screen and (orientation: landscape) {
  .iminput {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    background-size: 20% !important;
    border-radius: var(--radius-button);
    border: none;
    font-size: 1em;
    min-width: 0;
    color: var(--text);
    flex: 1 1;
    box-shadow: var(--shadow);
  }

  .iminput > div {
    width: 16%;
  }

  .iminput > input {
    flex: 1 1;
    padding: 16px 24px;
    border-radius: var(--radius-button);
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    border: none;
    font-size: 1em;
    min-width: 0;
    color: var(--text);
  }

  .iminput:hover > input {
    background: var(--ho) !important;
  }
}
</style>