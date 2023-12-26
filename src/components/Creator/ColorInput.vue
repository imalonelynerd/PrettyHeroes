<script setup>
defineProps(['color', 'placeHolder']);
defineEmits(['update:colorUpdated']);


function checkColor(color) {
  if (/^#(?:[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8}|[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4})$/.test(color)) {
    return color;
  }
  return "color-mix(in srgb, var(--wi), var(--alpha))";
}

function checkColor2(color) {
  if (/^#(?:[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8}|[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4})$/.test(color)) {
    return "color-mix(in srgb, var(--wi), var(--alpha))";
  }
  return "transparent";
}

</script>

<template>
  <div :style="`background: ${checkColor(color)}`" class="cinput">
    <input
        :style="`background: ${checkColor2(color)}`"
        :placeholder="placeHolder"
        :value="color"
        type="text"
        @input="$emit('update:colorUpdated', $event.target.value)">
    <div/>
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
    min-width: 0;
    color: var(--text);
    flex: 1 1;
    box-shadow: var(--shadow);
  }

  .cinput > div {
    width: 16%;
  }

  .cinput > input {
    flex: 1 1;
    padding: 16px 24px;
    border-radius: var(--radius-button);
    border: none;
    font-size: 1em;
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
    min-width: 0;
    color: var(--text);
    flex: 1 1;
    box-shadow: var(--shadow);
  }

  .cinput > div {
    width: 16%;
  }

  .cinput > input {
    flex: 1 1;
    padding: 4vw 6vw;
    border-radius: var(--radius-button);
    border: none;
    font-size: 1em;
    min-width: 0;
    color: var(--text);
  }

  .cinput:active > input {
    background: var(--ho) !important;
  }
}
</style>