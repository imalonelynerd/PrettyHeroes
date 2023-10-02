<script setup>
const props = defineProps(['listItems', 'placeHolder', 'emptyPlaceHolder']);

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
    <input v-for="(value, index) in listItems"
           :placeholder="placeHolder"
           :value="listItems[index]"
           @input="updateItem($event.target.value,index)">
    <div>
      <button @click="addItem">
        <img src="/icons/add.png"/>
      </button>
      <button @click="removeItem">
        <img src="/icons/remove.png"/>
      </button>
      <p v-if="listItems.length === 0">{{ emptyPlaceHolder }} - empty</p>
    </div>
  </div>
</template>

<style scoped>
.listinput {
  display: flex;
  padding: 16px;
  border-radius: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  background: var(--bg);
  filter: var(--shadow);
}

.listinput > div {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: stretch;
  border-radius: 24px;
  background: var(--bg);
}

.listinput > div > p {
  margin: 0;
  flex-grow: 1;
  opacity: 0.25;
  font-size: 0.9em;
}

.listinput > div > button {
  padding: 4px 8px;
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

.listinput > div > *:not(:last-child) {
  margin-left: 8px;
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
  border-radius: 16px;
  flex: 1 1;
  margin-bottom: 4px;
}

</style>