<script setup>
defineProps(['color', 'placeHolder']);
defineEmits(['update:color']);

function getContrastYIQ(hexcolor) {
  var r = parseInt(hexcolor.substring(1, 3), 16);
  var g = parseInt(hexcolor.substring(3, 5), 16);
  var b = parseInt(hexcolor.substring(5, 7), 16);
  var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? '#202020' : '#FFFFFF';
}

function checkColor(color) {
  if (/^#[0-9A-Fa-f]{6,8}$/.test(color)) {
    return color;
  }
  return 'var(--col)';
}

</script>

<template>
  <input
      class="cinput"
      :style="`background: ${checkColor(color)}; color: ${getContrastYIQ(color)}`"
      pattern="^#[0-9A-Fa-f]{6,8}$"
      type="text"
      :value="color"
      :placeholder="placeHolder"
      @input="$emit('update:color', $event.target.value)">
</template>

<style scoped>

@media screen and (hover: hover) {
  .cinput {
    padding: 16px 24px;
    border-radius: 999px;

    border: none;
    font-size: 1em;
    background: var(--col);
    transition: all 0.25s;
    min-width: 0;
    color: var(--text);
    flex: 1 1;
  }

  .cinput:hover {
    background: var(--ho) !important;
  }
}

@media screen and (hover: none) {
  .cinput {
    padding: 2vh 3vh;
    border-radius: 999px;
    border: none;
    font-size: 1em;
    background: var(--col);
    transition: all 0.25s;
    min-width: 0;
    color: var(--text);
    flex: 1 1;
  }

  .cinput:hover {
    background: var(--ho) !important;
  }
}

</style>