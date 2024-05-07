<script setup>

import {changeLoc} from "@/assets/js/miscTools";
import WideButton from "@/components/Home/WideButton.vue";
</script>

<template>
  <div class="card" id="card1">
    <div>
      <h2>Support the <b>project</b> !</h2>
      <p>
        This project is entirely <b>open-source</b>, alongside all of the tools used to build it (VueJS, Inkscape, ...).
      </p>
      <p>
        And you can help us make it better ! You can participate to its development over our GitHub.
      </p>
      <WideButton
          shown-title="Check our GitHub"
          img-link="/icons/fork.png"
          @update:buttonClicked="changeLoc('https://github.com/lonelynerd/PrettyHeroes')"
      />
    </div>
    <img src="/cards/c3.png" alt="Card n°3">
  </div>
</template>

<style scoped>

</style>