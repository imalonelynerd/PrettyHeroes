<script setup>
const props = defineProps(['listDblItems', 'placeHolders', 'sections','emptyPlaceHolder']);

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
    <div v-for="(value, index) in listDblItems">
      <input :value="listDblItems[index][sections[0]]"
             :placeholder="placeHolders[0]"
             @input="updateItem($event.target.value,index,sections[0])"
      />
      <input :value="listDblItems[index][sections[1]]"
             :placeholder="placeHolders[1]"
             @input="updateItem($event.target.value,index,sections[1])"
      />
    </div>
    <div class="inputbuttons">
      <button @click="addItem">
        <img src="/icons/add.png"/>
      </button>
      <button @click="removeItem">
        <img src="/icons/remove.png"/>
      </button>
      <p v-if="listDblItems.length === 0">{{ emptyPlaceHolder }} - empty</p>
    </div>
  </div>
</template>

<style scoped>
.dlistinput {
  display: flex;
  padding: 16px;
  border-radius: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  background: var(--bg);
  filter: var(--shadow);
}

.dlistinput > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  border-radius: 24px;
  background: var(--bg);
}

.dlistinput > .inputbuttons {
  flex-direction: row-reverse;
}

.dlistinput > div > p {
  margin: 0;
  flex-grow: 1;
  opacity: 0.25;
  font-size: 0.9em;
}

.dlistinput > div > button {
  padding: 4px;
  border-radius: 999px;
  font-size: 1em;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s;
}

.dlistinput > div > button:hover {
  background: var(--wi) !important;
}

.dlistinput > div > *:not(:last-child) {
  margin-left: 12px;
}

.dlistinput > div > button > img {
  height: 1em;
}

.dlistinput > div > input {
  padding: 8px 4px;
  border: none;
  font-size: 1em;
  transition: all 0.25s;
  color: var(--text);
  background: none;
  border-radius: 999px;
  flex: 1 1;
  min-width: 0;
  margin-bottom: 4px;
}

.dlistinput > div > input:hover {
  background: var(--ho) !important;
}

</style>