<script setup>
import HiddenMenu from "@/components/Home/navbarComponements/HiddenMenu.vue";
import {ref} from "vue";
import NavbarButton from "@/components/Home/navbarComponements/NavbarButton.vue";
import hostInfo from "@/assets/json/hostInfo.json"
import {useRouter} from "vue-router";
import {changeLoc} from "@/assets/js/miscTools";

defineProps([
  "hasScrolled"
])

const isLinkMenuShown = ref(false);

const router = useRouter()

const linksMenu = ref({
  menuButtons:
      [
        {
          onClick: function () {
            router.push('/')
          },
          imgLink: ``,
          shownTitle: "Home",
        },
        {
          onClick: function () {
            router.push('/search')
          },
          imgLink: ``,
          shownTitle: "Search",
        },
        {
          onClick: function () {
            router.push('/creator')
          },
          imgLink: ``,
          shownTitle: "Creator",
        },
        {
          onClick: function () {
            changeLoc('https://github.com/lonelynerd/PrettyHeroes')
          },
          imgLink: `/icons/fork.png`,
          shownTitle: "Fork me !",
        }
      ]
})


</script>

<template>
  <HiddenMenu v-if="isLinkMenuShown" :menuOptions="linksMenu"
              @update:menuHidden="isLinkMenuShown = false"/>

  <div :class="{'hasbg' : hasScrolled}" class="mobile-navbar-container">
    <RouterLink to="/">
      <img src="/images/icon-navbar.png" alt="Icon">
      <h2>{{ hostInfo.appName }}</h2>
    </RouterLink>
    <NavbarButton :imgLink="'/icons/link.png'"
                  shownTitle=""
                  @update:buttonClicked="isLinkMenuShown = true"/>
  </div>
</template>

<style scoped>

@media only screen and (hover: hover) {
  .mobile-navbar-container {
    display: none !important;
  }
}

.mobile-navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 6vw 6vw 4vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  animation: HewwoBar ease-out 0.75s;
  z-index: 5;
  background: color-mix(in srgb, var(--bg), var(--alpha));
  backdrop-filter: var(--blur);
}

.mobile-navbar-container > a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4vw;
}

.mobile-navbar-container > a > img {
  height: 10vw;
}
</style>