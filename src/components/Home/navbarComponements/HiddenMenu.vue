<script setup>
import MenuOption from "@/components/Home/navbarComponements/MenuOption.vue";

const props = defineProps(
    ['menuOptions', "menuId"]
)

defineEmits([
  'update:menuHidden'
])

const options = props.menuOptions.menuButtons;

</script>

<template>
  <div class="menu-container" @click="$emit('update:menuHidden')">
    <div @click="$emit('update:menuHidden')">
      <MenuOption
          v-for="elem in options"
          v-bind="elem"
      />
    </div>
  </div>
</template>

<style scoped>

@media only screen and (hover: hover) {
  .menu-container {
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--bg), transparent 25%);
    z-index: 10;
    animation: blurbg ease-out 0.25s;
  }

  .menu-container > div {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background: var(--wi);
    width: 256px;
    padding: 16px;
    float: right;
    animation: slidein ease-out 0.25s;
    box-shadow: var(--shadow);
  }
}

@media only screen and (hover: none) {
  .menu-container {
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--bg), var(--alpha2));
    padding: 2vw;
    z-index: 10;
    animation: BgAnimation ease-out 0.25s;
  }

  .menu-container > div {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 4vw;
    background: var(--wi);
    border-radius: 6vw 6vw 0 0;
    height: fit-content;
    animation: MSlideAnimation ease-out 0.25s;
    box-shadow: var(--shadow);
    gap: 4vw;
  }
}
</style>