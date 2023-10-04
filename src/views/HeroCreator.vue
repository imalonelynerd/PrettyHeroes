<script setup>
import CustomInput from "@/components/Creator/CustomInput.vue";
import {ref} from "vue";
import ImageInput from "@/components/Creator/ImageInput.vue";
import LargeInput from "@/components/Creator/LargeInput.vue";
import ListInput from "@/components/Creator/ListInput.vue";
import ColorInput from "@/components/Creator/ColorInput.vue";
import DoubleListInput from "@/components/Creator/DoubleListInput.vue";
import DummyHero from "@/components/Creator/Dummy/DummyHero.vue";
import {copyHero, loadHero, saveHero} from "@/assets/js/saveMgmt";
import homeInfo from "@/assets/json/homeInfo.json";
import HelpPage from "@/components/Creator/Dummy/HelpPage.vue";

const values = ref(
    {
      title: {
        title: "",
        img: "",
        catchphrase: "",
        name1: "",
        name2: ""
      },
      personal: {
        age: "",
        pronouns: [""],
        desc: "",
        flags: [""],
      },
      colors: {
        background: "",
        widget: "",
        link: "",
        hover: "",
        title: "",
        text: "",
        bgimg: "",
      },
      urls: [{
        title: "",
        url: ""
      }]
    })

const dummyShown = ref(false);
const helpShown = ref(false);

function showElem(val, showbool) {
  switch (showbool) {
    case "help":
      helpShown.value = val;
      break;
    case "dummy":
      dummyShown.value = val;
      break;
  }
}

document.querySelector('head title').textContent = `Creator - PrettyHeroes`;
document.querySelector("link[rel~='icon']").href = `/icons/create.png`;
document.querySelector("meta[name='description']").content = `${homeInfo.tagLine}`
document.querySelector("meta[name='og:title']").content = `Creator - ${homeInfo.appName}`
document.querySelector("meta[name='og:description']").content = `${homeInfo.tagLine}`

</script>

<template>
  <DummyHero
      :res="values"
      v-if="dummyShown"
      @update:hide-btn="showElem(false,'dummy')"/>
  <HelpPage
      v-if="helpShown"
      @update:hide-btn="showElem(false,'help')"/>
  <div class="creator" v-if="!(dummyShown || helpShown)">
    <div>
      <div>
        <div>
          <h2>Title</h2>
          <CustomInput
              v-model="values.title.title"
              place-holder="Hero title"/>
          <CustomInput
              v-model="values.title.name1"
              place-holder="Name"/>
          <CustomInput
              v-model="values.title.name2"
              place-holder="Name (2nd part)"/>
          <CustomInput
              v-model="values.title.catchphrase"
              place-holder="Catchphrase"/>
          <ImageInput
              :img-src="values.title.img"
              v-on:update:imgSrc="newValue => values.title.img = newValue"
              place-holder="Favicon URL"/>
        </div>
        <div>
          <h2>Personal info</h2>
          <CustomInput
              v-model="values.personal.age"
              place-holder="Age"/>
          <LargeInput
              v-model="values.personal.desc"
              place-holder="Description"/>
          <ListInput
              :list-items="values.personal.pronouns"
              place-holder="Pronoun"
              empty-place-holder="Pronouns"/>
          <ListInput
              :list-items="values.personal.flags"
              place-holder="Flag keyword"
              empty-place-holder="Flags"/>
        </div>
        <div>
          <h2>Colors</h2>
          <ImageInput
              :img-src="values.colors.bgimg"
              v-on:update:imgSrc="newValue => values.colors.bgimg = newValue"
              place-holder="Background URL"/>
          <ColorInput
              :color="values.colors.background"
              v-on:update:color="newValue => values.colors.background = newValue"
              place-holder="Background color"/>
          <ColorInput
              :color="values.colors.widget"
              v-on:update:color="newValue => values.colors.widget = newValue"
              place-holder="Widget color"/>
          <ColorInput
              :color="values.colors.link"
              v-on:update:color="newValue => values.colors.link = newValue"
              place-holder="Links color"/>
          <ColorInput
              :color="values.colors.hover"
              v-on:update:color="newValue => values.colors.hover = newValue"
              place-holder="Hovered links color"/>
          <ColorInput
              :color="values.colors.title"
              v-on:update:color="newValue => values.colors.title = newValue"
              place-holder="Title color"/>
          <ColorInput
              :color="values.colors.text"
              v-on:update:color="newValue => values.colors.text = newValue"
              place-holder="Text color"/>
        </div>
        <div>
          <h2>Urls</h2>
          <DoubleListInput
              :list-dbl-items="values.urls"
              :place-holders="['Link Title','URL']"
              :sections="['title','url']"
              empty-place-holder="Links"
          />
        </div>
      </div>
      <div class="test">
        <a @click="showElem(true,'dummy')">
          <img src="/icons/create.png"/>
          <p>Test on a dummy Hero</p>
        </a>
        <a @click="showElem(true,'help')">
          <img src="/icons/help.png"/>
          <p>Help</p>
        </a>
        <a @click="copyHero(values)">
          <img src="/icons/copy.png"/>
          <p>Copy</p>
        </a>
        <a @click="loadHero(values)">
          <img src="/icons/load.png"/>
          <p>Load</p>
        </a>
        <a @click="saveHero(values)">
          <img src="/icons/save.png"/>
          <p>Save</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .creator {
    margin: 64px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: Blur ease-out 0.5s;
  }

  .creator > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    border-radius: 32px;

    background: var(--wi);
  }

  .creator > div > *:not(:last-child) {
    margin-bottom: 48px;
  }

  .creator > div > div:not(.test) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: start;
    gap: 32px;
  }

  .creator > div > div > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 250px;
  }

  .creator > div > div > div > *:not(:last-child) {
    margin-bottom: 8px;
  }

  .creator h2 {
    text-align: center;
    margin: 0 0 16px !important;
  }

  .test {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

  }

  .test > a, .test > router-link {
    padding: 16px 24px;
    border-radius: 999px;
    font-size: 1em;
    font-weight: bold;
    background: var(--bg);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }

  .test > a:hover, .test > router-link:hover {
    background: var(--ho);
  }

  .test > a > img, .test > router-link > img {
    height: 1.25em;
  }

  .test > a > p, .test > router-link > p {
    margin: 0 0 0 8px;
    padding: 0;
    transition: all 0.25s;
  }

  .test > *:not(:last-child) {
    margin-right: 8px;
  }
}
@media screen and (orientation: portrait) {
  .creator {
    margin: 5vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: Blur ease-out 0.5s;
  }

  .creator > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .creator > div > *:not(:last-child) {
    margin-bottom: 3vh;
  }

  .creator > div > div:not(.test) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .creator > div > div:not(.test):not(:last-child) {
    margin-bottom: 8vh;
  }

  .creator > div > div > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 80vw;
  }

  .creator > div > div > div:not(:last-child) {
    margin-bottom: 4vh;
  }

  .creator > div > div > div > *:not(:last-child) {
    margin-bottom: 2vh;
  }

  .creator h2 {
    text-align: center;
    font-size: 1.75em;
    margin: 0 0 2vh !important;
  }

  .test {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 80vw;
  }

  .test > a, .test > router-link {
    padding: 2vh 3vh;
    border-radius: 999px;
    font-size: 1em;
    font-weight: bold;
    background: var(--wi);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }

  .test > a:hover, .test > router-link:hover {
    background: var(--ho);
  }

  .test > a > img, .test > router-link > img {
    height: 1.25em;
  }

  .test > a > p, .test > router-link > p {
    margin: 0 0 0 1vh;
    padding: 0;
    transition: all 0.25s;
  }

  .test > *:not(:last-child) {
    margin-bottom: 2vh;
  }
}

</style>