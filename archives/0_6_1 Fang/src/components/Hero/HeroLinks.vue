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
@media screen and (hover: hover) {
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

@media screen and (hover: none) {
  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: stretch;
    align-items: center;
    padding: 0;
    gap: 2vw;
  }

  .links > a {
    width: 100%;
    background: color-mix(in srgb, var(--clk), var(--alpha));
    color: var(--ctxt) !important;
  }

  .links > a:active {
    background: color-mix(in srgb, var(--cho), var(--alpha));
  }
}


</style>