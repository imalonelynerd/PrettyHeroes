<script setup>

import ErrInfo from "@/assets/json/ErrInfo.json";

defineProps(["errorCode", "accountName"])

function getErrorMessage(errcode) {
  switch (errcode) {
    case 1:
      return ErrInfo.descriptions.fetchError;
    case 2:
      return ErrInfo.descriptions.missingData;
    default:
      return ErrInfo.descriptions.unknownError;
  }
}

</script>

<template>
  <div class="err">
    <div>
      <img :src="ErrInfo.imgSource"/>
      <h1>{{ ErrInfo.errName }}</h1>
      <p>An error occured while getting <b>{{ accountName }}</b>'s Hero...</p>
      <p v-html="getErrorMessage(errorCode)"></p>

    </div>
  </div>
</template>

<style scoped>
.err {
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: Blur ease-out 0.5s;
}

.err > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg2);
  padding: 32px;
  border-radius: 32px;
  filter: var(--shadow);
}

.err > div > * {
  margin: 0;
}

.err > div > img {
  height: 128px;
}

.err > div > h1 {
  margin-bottom: 8px;
}

.err > div > p {
  text-align: center;
  width: 400px;
}

.err > div > *:not(:last-child) {
  margin-bottom: 16px;
}
</style>