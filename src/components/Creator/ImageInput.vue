<script setup>
defineProps(['imgSrc', 'placeHolder']);
defineEmits(['update:imgUpdated']);
</script>

<template>
  <div :style="imgSrc === '' ? `background : color-mix(in srgb, var(--wi), var(--alpha))` : `background : linear-gradient(#00000040, #00000040), url('${imgSrc}') left center`"
       class="iminput"
  >
    <div/>
    <input
        :placeholder="placeHolder"
        :value="imgSrc"
        type="text"
        @input="$emit('update:imgUpdated', $event.target.value)">
  </div>

</template>

<style scoped>

@media screen and (orientation: landscape) {
  .iminput {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    background-size: 25% !important;
    border-radius: var(--radius-button);
    border: none;
    font-size: 1em;
    backdrop-filter: var(--blur);
    transition: all 0.25s;
    min-width: 0;
    color: var(--text);
    flex: 1 1;
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
    transition: all 0.25s;
    min-width: 0;
    color: var(--text);
  }

  .iminput:hover > input {
    background: var(--ho) !important;
  }
}

@media screen and (orientation: portrait) {
  .iminput {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    border-radius: var(--radius-button);
    border: none;
    background-size: 25% !important;
    font-size: 1em;
    backdrop-filter: var(--blur);
    transition: all 0.25s;
    min-width: 0;
    color: var(--text);
    flex: 1 1;
  }

  .iminput > div {
    width: 16%;
  }

  .iminput > input {
    flex: 1 1;
    padding: 4vw 6vw;
    border-radius: var(--radius-button);
    background: color-mix(in srgb, var(--wi), var(--alpha));
    border: none;
    backdrop-filter: var(--blur);
    font-size: 1em;
    transition: all 0.25s;
    min-width: 0;
    color: var(--text);
  }

  .iminput:active > input {
    background: var(--ho) !important;
  }
}


</style>