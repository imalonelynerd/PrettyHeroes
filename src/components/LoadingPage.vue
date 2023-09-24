<script setup>
import LoadInfo from "@/assets/json/LoadInfo.json";
import {useRoute} from "vue-router";

const unusualRoute = useRoute();
const userTag = unusualRoute.params.user;
</script>

<template>
  <div class="loading">
    <div>
      <img :src="LoadInfo.imgSource"/>
      <h1>{{ LoadInfo.loadTitle }}</h1>
      <p>Fetching <b>{{ userTag }}</b>'s hero...</p>
    </div>
  </div>
</template>

<style scoped>
.loading {
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.loading > div {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loading > div > * {
  margin: 0;
}

.loading > div > img {
  height: 128px;
}

.loading > div > h1 {
  margin-bottom: 8px;
}

.loading > div > p {
  text-align: center;
  width: 400px;
}

.loading > div > *:not(:last-child) {
  margin-bottom: 16px;
}
</style>