<script setup>
defineProps(['customValue1', 'customValue2', 'customValue3', 'placeHolder1', 'placeHolder2', 'placeHolder3']);
defineEmits(['update:value1Updated', 'update:value2Updated', 'update:value3Updated']);
</script>

<template>
  <div class="dbinput">
    <input :placeholder="placeHolder1"
           :value="customValue1"
           type="text"
           @input="$emit('update:value1Updated', $event.target.value)">
    <input :placeholder="placeHolder2"
           :value="customValue2"
           type="text"
           @input="$emit('update:value2Updated', $event.target.value)">
    <input :placeholder="placeHolder3"
           :value="customValue3"
           type="text"
           @input="$emit('update:value3Updated', $event.target.value)">

  </div>

</template>

<style scoped>
@media screen and (orientation: landscape) {
  .dbinput {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    border-radius: var(--radius-button);
    background: color-mix(in srgb, var(--wi), var(--alpha));
    box-shadow: var(--shadow);
  }

  .dbinput > input {
    width: 66%;
    padding: 16px 16px;
    border: none;
    font-size: 1em;
    color: var(--text);
    flex: 1 1;
    border-radius: var(--radius-button);
    background: transparent;
  }

  .dbinput > input:hover {
    background: var(--ho) !important;
  }
}

</style>