<script setup>

// Custom inputs
import CustomInput from "@/components/Creator/CustomInput.vue";
import ImageInput from "@/components/Creator/ImageInput.vue";
import LargeInput from "@/components/Creator/LargeInput.vue";
import ListInput from "@/components/Creator/ListInput.vue";
import ColorInput from "@/components/Creator/ColorInput.vue";
import DoubleListInput from "@/components/Creator/DoubleListInput.vue";

// Dummy componements
import DummyHero from "@/components/Creator/Dummy/DummyHero.vue";
import HeroTitle from "@/components/Hero/HeroTitle.vue";
import DummyDesc from "@/components/Creator/Dummy/DummyDesc.vue";
import DummyPage from "@/components/Creator/Dummy/DummyPage.vue";

// JSONs
import creatorInfo from "@/assets/json/creatorInfo.json";
import HeroDesc from "@/components/Hero/HeroDesc.vue";
import HeroLinks from "@/components/Hero/HeroLinks.vue";

// Functions & objects
import {ref} from "vue";
import {copyHero, loadHero, resetHero, saveHero} from "@/assets/js/heroSaver";
import {defineHeader} from "@/assets/js/miscTools";
import {Hero} from "@/assets/js/heroFactory";

// Others
import HelpPage from "@/components/Creator/Dummy/HelpPage.vue";
import Background from "@/components/Hero/Background.vue";

const hero = ref(new Hero());

const dummyShown = ref(false);
const helpShown = ref(false);

function showElem(val, showbool) {
  switch (showbool) {
    case "help":
      helpShown.value = val;
      break;
    case "dummy":
      document.documentElement.style = null;
      dummyShown.value = val;
      break;
  }
}

defineHeader("Creator", "/icons/create.png", "Creator")
document.documentElement.style = null;

</script>

<template>
  <DummyHero
      v-if="dummyShown"
      :hero="hero"
      @update:hide-btn="showElem(false,'dummy');"/>
  <HelpPage
      v-if="helpShown"
      @update:hide-btn="showElem(false,'help');"/>
  <Background
      v-if="!dummyShown"
      bg-img="/bg/bg.png"/>
  <div v-if="!(dummyShown || helpShown)" class="creator">
    <div class="creattitle">
      <img :src="creatorInfo.imgSource"/>
      <h1>{{ creatorInfo.title }}</h1>
      <p v-html="creatorInfo.description"></p>
    </div>
    <div>
      <h1>Title</h1>
      <div>
        <div>
          <ImageInput
              :img-src="hero.title.img"
              place-holder="Favicon URL"
              @update:imgUpdated="newValue => hero.title.img = newValue"/>
          <CustomInput
              :customValue="hero.title.title"
              place-holder="Hero title"
              @update:valueUpdated="newValue => hero.title.title = newValue"/>
          <CustomInput
              :customValue="hero.title.catchphrase"
              place-holder="Catchphrase"
              @update:valueUpdated="newValue => hero.title.catchphrase = newValue"/>
          <ListInput
              :list-items="hero.title.pronouns"
              empty-place-holder="Pronouns"
              place-holder="Pronoun"/>
        </div>
        <div>
          <HeroTitle
              :catchphrase="hero.title.catchIsEmpty() ? 'Catchphrase' : hero.title.catchphrase"
              :img-src="hero.title.img"
              :pronouns="hero.title.pronouns"
              :title="hero.title.titleIsEmpty() ? 'Title' : hero.title.title"
          />
        </div>
      </div>
    </div>
    <div>
      <h1>Personal info</h1>
      <div>
        <div>
          <CustomInput
              :custom-value="hero.perso.name1"
              place-holder="Name"
              @update:valueUpdated="newValue => hero.perso.name1 = newValue"/>
          <CustomInput
              :custom-value="hero.perso.name2"
              place-holder="Name (2nd part)"
              @update:valueUpdated="newValue => hero.perso.name2 = newValue"/>
          <CustomInput
              :custom-value="hero.perso.age"
              place-holder="Age"
              @update:valueUpdated="newValue => hero.perso.age = newValue"/>
          <ListInput
              :list-items="hero.perso.flags"
              empty-place-holder="Flags"
              place-holder="Flag keyword"/>
          <CustomInput
              :custom-value="hero.perso.work"
              place-holder="Work"
              @update:valueUpdated="newValue => hero.perso.work = newValue"/>
          <CustomInput
              :custom-value="hero.perso.location"
              place-holder="Location"
              @update:valueUpdated="newValue => hero.perso.location = newValue"/>
          <CustomInput
              place-holder="Timezone"
              @update:valueUpdated="newValue => hero.perso.timezone = newValue"/>
        </div>
        <div>
          <HeroDesc
              :age="hero.perso.ageIsEmpty() ? '1234' : hero.perso.age"
              :flags="hero.perso.flags"
              :location="hero.perso.locationIsEmpty() ? 'Location' : hero.perso.location"
              :name1="hero.perso.name1IsEmpty() ? 'First name' : hero.perso.name1"
              :name2="hero.perso.name2IsEmpty() ? 'Last name' : hero.perso.name2"
              :timezone="hero.perso.timezoneIsEmpty() ? 'Timezone' : hero.perso.timezone"
              :work="hero.perso.workIsEmpty() ? 'Work' : hero.perso.work"
              desc=""
          />
        </div>
      </div>
    </div>
    <div class="half">
      <h1>Description</h1>
      <div>
        <div>
          <LargeInput
              :custom-value="hero.perso.desc"
              place-holder="Description"
              @update:valueUpdated="newValue => hero.perso.desc = newValue"/>
        </div>
        <div>
          <DummyDesc
              :desc="hero.perso.descIsEmpty() ? '\\*\\*Hello\\*\\* \\*world\\* ! ---> **Hello** *world* !' : hero.perso.desc"/>
        </div>
      </div>
    </div>
    <div>
      <h1>Colors</h1>
      <div>
        <div>
          <ImageInput
              :img-src="hero.colors.bgimg"
              place-holder="Background URL"
              @update:imgUpdated="newValue => hero.colors.bgimg = newValue"/>
          <ColorInput
              :color="hero.colors.background"
              place-holder="Background color"
              @update:colorUpdated="newValue => hero.colors.background = newValue"/>
          <ColorInput
              :color="hero.colors.widget"
              place-holder="Widget color"
              @update:colorUpdated="newValue => hero.colors.widget = newValue"/>
          <ColorInput
              :color="hero.colors.link"
              place-holder="Links color"
              @update:colorUpdated="newValue => hero.colors.link = newValue"/>
          <ColorInput
              :color="hero.colors.hover"
              place-holder="Hovered links color"
              @update:colorUpdated="newValue => hero.colors.hover = newValue"/>
          <ColorInput
              :color="hero.colors.title"
              place-holder="Title color"
              @update:colorUpdated="newValue => hero.colors.title = newValue"/>
          <ColorInput
              :color="hero.colors.text"
              place-holder="Text color"
              @update:colorUpdated="newValue => hero.colors.text = newValue"/>
        </div>
        <div
            :style="hero.colors.noBgImage() ? `background: ${hero.colors.bgimg}` : `background: url(${hero.colors.bgimg}) center no-repeat`">
          <DummyPage :cols="hero.colors"/>
        </div>
      </div>
    </div>
    <div class="half">
      <h1>URLs</h1>
      <div class="nostretch">
        <div>
          <DoubleListInput
              :list-dbl-items="hero.urls.linksList"
              :place-holders="['Link Title','URL']"
              :sections="['title','url']"
              empty-place-holder="Links"
          />
        </div>
        <div>
          <HeroLinks :links="hero.urls.linksList"/>
        </div>
      </div>
    </div>
    <div class="tbuttons">
      <router-link to="/">
        <img src="/icons/back.png"/>
        <p>Back</p>
      </router-link>
      <a @click="showElem(true,'dummy')">
        <img src="/icons/create.png"/>
        <p>Test</p>
      </a>
      <a @click="copyHero(hero)">
        <img src="/icons/copy.png"/>
        <p>Copy</p>
      </a>
      <a @click="loadHero(hero)">
        <img src="/icons/load.png"/>
        <p>Load</p>
      </a>
      <a @click="saveHero(hero)">
        <img src="/icons/save.png"/>
        <p>Save</p>
      </a>
      <a @click="resetHero(hero)">
        <img src="/icons/reset.png"/>
        <p>Reset</p>
      </a>
      <a @click="showElem(true,'help')">
        <img src="/icons/help.png"/>
        <p>Help</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .creator {
    margin: 64px 0 144px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: FadeAnimation ease-out 0.5s;
    gap: 64px;
  }

  .creator > div:not(.creattitle, .tbuttons) {
    width: 85vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    border-radius: var(--radius);
    gap: 32px;
    background: color-mix(in srgb, var(--bg), var(--alpha));
    box-shadow: var(--shadow);
    backdrop-filter: var(--blur);
  }

  .creator > div:not(.creattitle, .tbuttons) > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 32px;
  }

  .creator > div:not(.creattitle, .tbuttons) > div > div:first-of-type {
    align-self: flex-start;
    display: flex;
    width: 300px;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 8px;
    flex-grow: 0;
  }

  .creator > div:not(.creattitle, .tbuttons) > div > div:last-of-type {
    flex: 1 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 32px 64px;
    border-radius: var(--radius);
    background: url("/bg/creatbg.png") center center no-repeat;
    background-size: cover !important;
    box-shadow: var(--shadow);
  }

  .creator > div:not(.creattitle, .tbuttons) > div > div:last-of-type > div {
    min-width: 80%;
    max-width: 100%;
  }

  .creator > div > * {
    margin: 0;
  }

  .tbuttons {
    bottom: 32px;
    position: fixed;
    padding: 16px;
    border-radius: var(--radius-button);
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-shadow: var(--shadow);
    z-index: 5;
    animation: FadeAnimation ease-out 0.5s;
  }

  .tbuttons > a {
    padding: 16px 24px;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }

  .tbuttons > a:hover, .tbuttons > router-link:hover {
    background: var(--ho);
  }

  .tbuttons > a > img, .tbuttons > router-link > img {
    height: 1.25em;
  }

  .tbuttons > a > p, .tbuttons > router-link > p {
    margin: 0 0 0 8px;
    padding: 0;
    transition: all 0.25s;
  }

  .creattitle {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    /*padding: 0 0 32px;*/
  }

  .creattitle > * {
    margin: 0;
  }

  .creattitle > img {
    height: 160px;
  }

  .half > div {
    display: flex !important;
    flex-direction: row !important;
    align-items: stretch !important;
    justify-content: stretch !important;
  }

  .half > div > div {
    flex-shrink: 1 !important;
    align-self: stretch !important;
  }

  .half > div > div:first-child {
    flex: 0 1 40% !important
  }

  .nostretch > div:first-of-type {
    justify-content: start !important;
  }
}

@media screen and (orientation: portrait) {
  .creator {
    margin: 12vw 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: FadeAnimation ease-out 0.5s;
    gap: 6vw;
  }

  .creator > div:not(.creattitle, .tbuttons) {
    width: 75vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6vw;
    border-radius: var(--radius);
    gap: 6vw;
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    box-shadow: var(--shadow);
  }

  .creator > div > * {
    margin: 0;
  }

  .creator > div:not(.creattitle, .tbuttons) > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 10vw;
  }

  .creator > div:not(.creattitle, .tbuttons) > div > div:first-of-type {
    align-self: flex-start;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 2vw;
    flex-grow: 0;
  }

  .creator > div:not(.creattitle, .tbuttons) > div > div:last-of-type {
    display: none;
  }

  .tbuttons {
    width: 75vw;
    padding: 6vw;
    border-radius: var(--radius);
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 2vw;
    box-shadow: var(--shadow);
    z-index: 5;
    animation: FadeAnimation ease-out 0.5s;
  }

  .tbuttons > a {
    padding: 4vw 6vw;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }

  .tbuttons > a:active, .tbuttons > router-link:active {
    background: var(--ho);
  }

  .tbuttons > a > img, .tbuttons > router-link > img {
    height: 1.25em;
  }

  .tbuttons > a > p, .tbuttons > router-link > p {
    margin: 0 0 0 2vw;
    padding: 0;
    transition: all 0.25s;
  }

  .creattitle {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4vw;
    padding: 0 0 6vw;
  }

  .creattitle > * {
    margin: 0;
  }

  .creattitle > img {
    height: 40vw;
  }
}

</style>