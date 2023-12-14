<script setup>
const props = defineProps(['listDblItems', 'placeHolders', 'sections', 'emptyPlaceHolder']);
defineEmits(["update:listUpdated"]);

function addItem() {
  let item = {};
  item[props.sections[0]] = "";
  item[props.sections[1]] = "";
  props.listDblItems.push(item);
}

function removeItem() {
  props.listDblItems.pop();
}

function updateItem(value, index, tag) {
  props.listDblItems[index][tag] = value;
}
</script>

<template>
  <div class="dlistinput">
    <div v-for="(_, index) in listDblItems">
      <input :placeholder="placeHolders[0]"
             :value="listDblItems[index][sections[0]]"
             @input="updateItem($event.target.value,index,sections[0]); $emit('update:listUpdated')"
      />
      <input :placeholder="placeHolders[1]"
             :value="listDblItems[index][sections[1]]"
             @input="updateItem($event.target.value,index,sections[1]); $emit('update:listUpdated')"
      />
    </div>
    <div class="inputbuttons">
      <button @click="addItem">
        <img src="/icons/add.png" alt="Add"/>
      </button>
      <button @click="removeItem">
        <img src="/icons/remove.png" alt="Minus"/>
      </button>
      <p v-if="listDblItems.length === 0">{{ emptyPlaceHolder }} - empty</p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .dlistinput {
    display: flex;
    border-radius: var(--radius-input);
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    box-shadow: var(--shadow);
  }

  .dlistinput > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    border-radius: var(--radius-input);
  }

  .inputbuttons {
    padding: 16px 24px;
    justify-content: stretch;
    border-radius: var(--radius-input);
    gap: 16px !important;
    align-items: center;
    flex-direction: row-reverse !important;
  }

  .inputbuttons > p {
    margin: 0;
    flex-grow: 1;
    opacity: 0.25;
    font-size: 0.9em;
  }

  .inputbuttons > button {
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

  .inputbuttons > button:hover {
    background: var(--bg) !important;
  }

  .inputbuttons > button > img {
    height: 1em;
  }

  .dlistinput > div > input {
    padding: 16px 24px;
    border: none;
    font-size: 1em;
    color: var(--text);
    background: none;
    border-radius: var(--radius-button);
    flex: 1 1;
    min-width: 0;
  }

  .dlistinput > div > input:hover {
    background: var(--ho) !important;
  }
}

</style>