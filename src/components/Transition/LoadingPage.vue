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
  align-items: center;
  justify-content: center;
}

.loading > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg2);
  padding: 32px;
  border-radius: 32px;
  filter: var(--shadow);
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