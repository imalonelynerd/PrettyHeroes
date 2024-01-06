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
    <div>
      <input v-for="(_, index) in listItems"
             :placeholder="placeHolder"
             :value="listItems[index]"
             @input="updateItem($event.target.value,index); $emit('update:listUpdated')">
    </div>
    <div>
      <button @click="addItem">
        <img src="/icons/add.png" alt="Add"/>
      </button>
      <button @click="removeItem">
        <img src="/icons/remove.png" alt="Minus"/>
      </button>
      <p v-if="listItems.length === 0">{{ emptyPlaceHolder }} - empty</p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .listinput {
    display: flex;
    border-radius: var(--radius-input);
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    box-shadow: var(--shadow);
  }

  .listinput > div:last-of-type {
    padding: 16px 24px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: stretch;
    border-radius: var(--radius-input);
    gap: 16px;
  }

  .listinput > div:last-of-type > p {
    margin: 0;
    flex-grow: 1;
    opacity: 0.25;
    font-size: 0.9em;
  }

  .listinput > div:last-of-type > button {
    padding: 4px;
    border-radius: var(--radius-button);
    font-size: 1em;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .listinput > div:last-of-type > button:hover {
    background: var(--bg) !important;
  }

  .listinput > div:last-of-type > button > img {
    height: 1em;
  }

  .listinput > div:first-of-type {
    width: 100%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;
    justify-content: stretch;
  }

  .listinput > div:first-of-type > input {
    padding: 16px 24px;
    min-width: 1%;
    border: none;
    font-size: 1em;
    color: var(--text);
    background: none;
    border-radius: var(--radius-button);
    flex: 1 0;
  }

  .listinput > div:first-of-type > input:hover {
    background: var(--ho) !important;
  }
}

@media screen and (hover: none) {
  .listinput {
    display: flex;
    border-radius: var(--radius-input);
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    box-shadow: var(--shadow);
  }

  .listinput > div:last-of-type {
    padding: 4vw 6vw;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: stretch;
    border-radius: var(--radius-input);
    gap: 4vw;
  }

  .listinput > div:last-of-type > p {
    margin: 0;
    flex-grow: 1;
    opacity: 0.25;
    font-size: 0.9em;
  }

  .listinput > div:last-of-type > button {
    padding: 2vw;
    border-radius: var(--radius-button);
    font-size: 1em;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .listinput > div:last-of-type > button:active {
    background: var(--bg) !important;
  }

  .listinput > div:last-of-type > button > img {
    height: 1em;
  }

  .listinput > div:first-of-type {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    justify-content: stretch;
  }

  .listinput > div:first-of-type > input {
    min-width: 1%;
    padding: 4vw 6vw;
    border: none;
    font-size: 1em;
    color: var(--text);
    background: none;
    border-radius: var(--radius-button);
    flex: 1 0;
  }

  .listinput > div:first-of-type > input:active {
    background: var(--ho) !important;
  }
}
</style>