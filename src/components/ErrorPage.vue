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
    <img :src="ErrInfo.imgSource"/>
    <h1>{{ ErrInfo.errName }}</h1>
    <p>An error occured while getting <b>{{ accountName }}</b>'s hero...</p>
    <p v-html="getErrorMessage(errorCode)"></p>
  </div>
</template>

<style scoped>
.err {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.err > * {
  margin: 0;
}

.err > img {
  height: 128px;
}

.err > h1 {
  margin-bottom: 8px;
}

.err > p {
  text-align: center;
  width: 33%;
}

.err > *:not(:last-child) {
  margin-bottom: 16px;
}
</style>