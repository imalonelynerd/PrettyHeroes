<script setup>

import WideButton from "@/components/Home/WideButton.vue";
</script>

<template>
  <div class="card">
    <img src="/cards/c2.png" alt="Card n°2">
    <div>
      <h2>Create your cute little <b>Hero</b> in minutes !</h2>
      <p>Thanks to our easy-to-use <b>Hero Creator</b>, you'll be able to make a small little page <b>without any
        advanced
        knowledge</b> in web programming.</p>
      <p>
        The only thing you need is good taste...
      </p>
      <p>(psst... If you're a <b>Pronounce</b> user, you can also convert your <b>pronounce.yaml</b> into a Hero)</p>
      <WideButton
          shown-title="Create a Hero"
          img-link="/icons/create.png"
          @update:buttonClicked="$router.push('/creator')"
      />
    </div>
  </div>
</template>

<style scoped>
@media screen and (hover: none) {
  .card {
    flex-direction: column;
  }
}
</style>