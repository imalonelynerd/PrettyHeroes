<script setup lang="ts">
import HeroFooter from '@/components/containers/FooterContainer.vue'
</script>

<template>
  <HeroFooter :background="$colorPalette.background" :font-color="$colorPalette.text">
    <p>
      Made with ❤️, ☄️ and 🦕 using <a href="https://github.com/imalonelynerd/PrettyHeroes">PrettyHeroes</a>
    </p>
  </HeroFooter>
</template>
