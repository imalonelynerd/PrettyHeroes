<script setup>
import NavbarButton from "@/components/Home/navbarComponements/NavbarButton.vue";
import {changeLoc} from "@/assets/js/miscTools";
import homeInfo from "@/assets/json/homeInfo.json";


defineProps([
  "alignRight",
  "hasScrolled"
])
</script>

<template>
  <div :class="{ 'align-right' : alignRight, 'hasbg' : hasScrolled }" class="navbar-container">
    <router-link to="/">
      <img src="/images/icon-navbar.png">
      <p>{{homeInfo.appName}}</p>
    </router-link>
    <div class="navbar">
      <NavbarButton img-link=""
                    shownTitle="Home"
                    @update:buttonClicked="$router.push('/')"/>
      <NavbarButton img-link=""
                    shownTitle="Search..."
                    @update:buttonClicked="$router.push('/search')"/>
      <NavbarButton img-link=""
                    shownTitle="Creator"
                    @update:buttonClicked="$router.push('/creator')"/>
      <NavbarButton img-link="/icons/fork.png"
                    shownTitle="Fork me !"
                    @update:buttonClicked="changeLoc('https://github.com/lonelynerd/PrettyHeroes')"/>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (orientation: portrait) {
  div {
    display: none !important;
  }
}

.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 32px 64px;
  display: flex;
  z-index: 5;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 0.25s;
}

.navbar-container > a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.navbar-container > a > p {
  padding: 14px 0;
  margin: 0;
  border-radius: var(--radius-button);
}

.navbar-container > a * {
  transition: all 0.25s;
}

.navbar-container > a:hover > p {
  background: var(--ho);
  padding: 14px 16px;
}

.navbar-container > a > img {
  height: 48px;
}

.navbar-container > a > p {
  margin: 0;
  font-weight: bold;
  font-size: 1.25em;
}

.navbar, .navbar > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.align-right {
  justify-content: end;
}

</style>