<script setup>
import hostInfo from "@/assets/json/hostInfo.json"
</script>

<template>
  <div class="bulletpoints">
    <h2><span>The advantages </span>as a host...</h2>
    <div>
      <div>
        <div>
          <img src="/icons/light.png" alt="Light">
          <h3>Lightweight</h3>
        </div>
        <p>{{ hostInfo.appName }} is, believe it or not, a <b>5 Mo static page</b> ! No more NodeJS running in the background
          !</p>
      </div>
      <div>
        <div>
          <img src="/icons/code.png" alt="East to edit">
          <h3>Easy to edit</h3>
        </div>
        <p>The source projects are made with <b>ease to edit</b> in mind. Fine-tune everything down to the page style.
        </p>
      </div>
      <div>
        <div>
          <img src="/icons/pronounce.png" alt="Pronounce">
          <h3>Pronounce-compliant</h3>
        </div>
        <p>You used to host a Pronounce instance ? {{ hostInfo.appName }} is <b>compatible</b> with Pronounce pages</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>