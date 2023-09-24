<script setup>
const props = defineProps(['listDblItems', 'placeHolders', 'sections']);

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
  <div class="listinput">
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
    </div>
  </div>
</template>

<style scoped>
.listinput {
  display: flex;
  padding: 16px 24px;
  border-radius: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  background: var(--bg1);
}

.listinput > .inputbuttons {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: stretch;
  border-radius: 24px;
  background: var(--bg1);
}

.listinput > .inputbuttons > button {
  padding: 16px;
  border-radius: 999px;
  font-size: 1em;
  border: none;
  background: var(--bg2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s;
}

.listinput > .inputbuttons > *:not(:last-child) {
  margin-left: 8px;
}

.listinput > .inputbuttons > button > img {
  height: 1em;
}

.listinput > input {
  padding: 16px 24px;
  border: none;
  font-size: 1em;
  transition: all 0.25s;
  color: var(--text);
  background: none;
  border-radius: 999px;
  flex: 1 1;
  margin-bottom: 4px;
}

</style>