<script setup>
defineProps(['color', 'placeHolder']);
defineEmits(['update:colorUpdated']);


function checkColor(color) {
  if (/^#[0-9A-Fa-f]{6,8}$/.test(color)) {
    return color;
  }
  return "color-mix(in srgb, var(--wi), var(--alpha))";
}

</script>

<template>
  <div :style="`background: ${checkColor(color)}`" class="cinput">
    <div/>
    <input
        :placeholder="placeHolder"
        :value="color"
        pattern="^#[0-9A-Fa-f]{6,8}$"
        type="text"
        @input="$emit('update:colorUpdated', $event.target.value)">
  </div>
</template>

<style scoped>

@media screen and (hover: hover) {
  .cinput {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    border-radius: var(--radius-button);
    border: none;
    font-size: 1em;
    backdrop-filter: var(--blur);
    transition: all 0.25s;
    min-width: 0;
    color: var(--text);
    flex: 1 1;
  }

  .cinput > div {
    width: 16%;
  }

  .cinput > input {
    flex: 1 1;
    padding: 16px 24px;
    border-radius: var(--radius-button);
    background: color-mix(in srgb, var(--wi), var(--alpha));
    border: none;
    font-size: 1em;
    transition: all 0.25s;
    min-width: 0;
    color: var(--text);
  }

  .cinput:hover > input {
    background: var(--ho) !important;
  }
}

@media screen and (hover: none) {
  .cinput {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    border-radius: var(--radius-button);
    border: none;
    font-size: 1em;
    backdrop-filter: var(--blur);
    transition: all 0.25s;
    min-width: 0;
    color: var(--text);
    flex: 1 1;
  }

  .cinput > div {
    width: 16%;
  }

  .cinput > input {
    flex: 1 1;
    padding: 4vw 6vw;
    border-radius: var(--radius-button);
    background: color-mix(in srgb, var(--wi), var(--alpha));
    border: none;
    font-size: 1em;
    transition: all 0.25s;
    min-width: 0;
    color: var(--text);
  }

  .cinput:active > input {
    background: var(--ho) !important;
  }
}

</style>