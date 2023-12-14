<script setup>
import WideButton from "@/components/Home/WideButton.vue";
import {changeLoc} from "@/assets/js/miscTools";

defineProps(["links"])

</script>

<template>
  <div v-if="links !== undefined" class="links">
    <WideButton
        v-for="(elem, _) in links"
        img-link="/icons/link.png"
        :shown-title="elem.title"
        @update:buttonClicked="elem.url === '' ? undefined : changeLoc(elem.url)"
    />
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    gap: 8px;
  }

  .links > a {
    background: color-mix(in srgb, var(--clk), var(--alpha));
    color: var(--ctxt) !important;
  }

  .links > a:hover {
    background: color-mix(in srgb, var(--cho), var(--alpha));
  }
}

</style>