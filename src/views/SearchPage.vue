<script setup>

import homeInfo from "@/assets/json/homeInfo.json";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {changeLoc, defineHeader} from "@/assets/js/miscTools";
import CustomInput from "@/components/Creator/CustomInput.vue";
import WideButton from "@/components/Home/WideButton.vue";
import ToggleButton from "@/components/Search/ToggleButton.vue";

const searchResult = ref("");
const noColor = ref(false);
const router = useRouter();

defineHeader("Search", "/icons/search.png", homeInfo.tagLine);
document.documentElement.style = null;
</script>

<template>
  <div class="query">
    <img src="/images/search.png" alt="Search">
    <h1>Search for someone's Hero</h1>
    <p>Search someone's Hero by inputing their <b>GitHub</b> username.<br/>If the account <b>doesn't exist</b> or
      <b>doesn't contain a Hero</b>, an error will appear.</p>
    <div>
      <CustomInput
          :custom-value="searchResult"
          @update:valueUpdated="args => searchResult = args"
          place-holder="Search..."
          @keyup.enter="router.push(`/${searchResult}${noColor ? '/nocolor' : ''}`)"
      />
      <WideButton
          img-link="/icons/search.png"
          shown-title=""
          :is-disabled="searchResult === ''"
          @update:buttonClicked="$router.push(`/${searchResult}${noColor ? '/nocolor' : ''}`)"
      />
    </div>
    <div>
      <WideButton
          @update:buttonClicked="changeLoc(`https://github.com/${searchResult}`)"
          :is-disabled="searchResult === ''"
          :shown-title="`See ${searchResult === '' ? 'user' : searchResult}'s GitHub`"
          img-link="/icons/fork.png"
      />
      <ToggleButton
          @update:buttonToggled="noColor = !noColor"
          :is-disabled="searchResult === ''"
          :shown-title="`${noColor ? 'Enable' : 'Disable'} colors`"
          img-link="/icons/nocolor.png"
      />
    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .query {
    height: 100vh;
    width: 100vw;
    animation: FadeAnimation ease-out 0.25s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    text-align: center;
  }

  .query > * {
    margin: 0;
  }

  .query > img {
    height: 140px;
  }

  .query > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .query > *:nth-child(4) {
    width: 500px;
  }
}
</style>