<script setup>
const props = defineProps(['listItems', 'placeHolder', 'emptyPlaceHolder']);
defineEmits(["update:listUpdated"]);


function addItem() {
  props.listItems.push("");
}

function removeItem() {
  props.listItems.pop();
}

function updateItem(value, index) {
  props.listItems[index] = value;
}
</script>

<template>
  <div class="listinput">
    <input v-for="(_, index) in listItems"
           :placeholder="placeHolder"
           :value="listItems[index]"
           @input="updateItem($event.target.value,index); $emit('update:listUpdated')">
    <div>
      <button @click="addItem">
        <img src="/icons/add.png"/>
      </button>
      <button @click="removeItem">
        <img src="/icons/remove.png"/>
      </button>
      <p>{{ emptyPlaceHolder }}</p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .listinput {
    display: flex;
    padding: 16px;
    border-radius: var(--radius-input);
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
  }

  .listinput > div {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: stretch;
    border-radius: var(--radius-input);
    gap: 8px;
  }

  .listinput > div > p {
    margin: 0;
    flex-grow: 1;
    opacity: 0.25;
    font-size: 0.9em;
  }

  .listinput > div > button {
    padding: 4px;
    border-radius: var(--radius-button);
    font-size: 1em;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }

  .listinput > div > button:hover {
    background: var(--bg) !important;
  }

  .listinput > div > button > img {
    height: 1em;
  }

  .listinput > input {
    padding: 8px 4px;
    border: none;
    font-size: 1em;
    transition: all 0.25s;
    color: var(--text);
    background: none;
    border-radius: var(--radius);
    flex: 1 1;
    margin-bottom: 4px;
  }

  .listinput > input:hover {
    background: var(--ho) !important;
  }
}

@media screen and (orientation: portrait) {
  .listinput {
    display: flex;
    padding: 4vw;
    border-radius: var(--radius-input);
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
  }

  .listinput > div {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: stretch;
    border-radius: var(--radius-input);
    gap: 4vw;
  }

  .listinput > div > p {
    margin: 0;
    flex-grow: 1;
    opacity: 0.25;
    font-size: 1em;
  }

  .listinput > div > button {
    padding: 2vw;
    border-radius: var(--radius-button);
    font-size: 1em;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }

  .listinput > div > button:active {
    background: var(--bg) !important;
  }

  .listinput > div > button > img {
    height: 1em;
  }

  .listinput > input {
    padding: 2vw 0;
    border: none;
    font-size: 1em;
    transition: all 0.25s;
    color: var(--text);
    background: none;
    border-radius: var(--radius-button);
    flex: 1 1;
    margin-bottom: 1vw;
  }

  .listinput > input:active {
    background: var(--ho) !important;
  }
}

</style>