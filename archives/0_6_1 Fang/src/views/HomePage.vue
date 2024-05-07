<script setup>
import hostInfo from "@/assets/json/hostInfo.json";
import Title from "@/components/Home/Title.vue";
import Card1 from "@/components/Home/Card1.vue";
import {defineHeader} from "@/assets/js/miscTools";
import Card2 from "@/components/Home/Card2.vue";
import Bulletpoints1 from "@/components/Home/Bulletpoints1.vue";
import Bulletpoints2 from "@/components/Home/Bulletpoints2.vue";
import Card3 from "@/components/Home/Card3.vue";
import HomeFooter from "@/components/Home/HomeFooter.vue";

defineHeader("Home", `/favicon.png`, hostInfo.tagLine);
document.documentElement.style = null;
</script>

<template>
  <Title/>
  <Card1/>
  <Card2/>
  <Card3/>
  <Bulletpoints1/>
  <Bulletpoints2/>
  <HomeFooter/>
</template>

<style scoped>
</style>