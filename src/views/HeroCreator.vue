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
import HeroTitle from "@/components/Hero/HeroTitle.vue";
import Background from "@/components/Hero/Background.vue";
import HeroDesc from "@/components/Hero/HeroDesc.vue";
import HeroLinks from "@/components/Hero/HeroLinks.vue";
import DummyDesc from "@/components/Creator/Dummy/DummyDesc.vue";
import DummyPage from "@/components/Creator/Dummy/DummyPage.vue";
import creatorInfo from "@/assets/json/creatorInfo.json";

const values = ref(
    {
      title: {
        title: "",
        img: "",
        catchphrase: "",
        pronouns: [""]
      },
      personal: {
        name1: "",
        name2: "",
        age: "",
        desc: "",
        flags: [""],
        work: "",
        timezone: "",
        location: ""
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
      document.documentElement.style = null;
      dummyShown.value = val;
      break;
  }
}

document.querySelector('head title').textContent = `Creator - ${homeInfo.appName}`;
document.querySelector("link[rel~='icon']").href = `/icons/create.png`;
document.querySelector("meta[name='description']").content = `${homeInfo.tagLine}`
document.querySelector("meta[name='og:title']").content = `Creator - ${homeInfo.appName}`
document.querySelector("meta[name='og:description']").content = `${homeInfo.tagLine}`
document.documentElement.style = null;
</script>

<template>
  <DummyHero
      :res="values"
      v-if="dummyShown"
      @update:hide-btn="showElem(false,'dummy')"/>
  <HelpPage
      v-if="helpShown"
      @update:hide-btn="showElem(false,'help')"/>
  <Background
      v-if="!dummyShown"
      bg-img="/bg/bg.png"/>
  <div class="creator" v-if="!(dummyShown || helpShown)">
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
              :img-src="values.title.img"
              v-on:update:imgSrc="newValue => values.title.img = newValue"
              place-holder="Favicon URL"/>
          <CustomInput
              v-model="values.title.title"
              place-holder="Hero title"/>
          <CustomInput
              v-model="values.title.catchphrase"
              place-holder="Catchphrase"/>
          <ListInput
              :list-items="values.title.pronouns"
              place-holder="Pronoun"
              empty-place-holder="Pronouns"/>
        </div>
        <div>
          <HeroTitle
              :title="values.title.title === '' ? 'Title' : values.title.title"
              :catchphrase="values.title.catchphrase === '' ? 'Catchphrase' : values.title.catchphrase"
              :img-src="values.title.img"
              :pronouns="values.title.pronouns"
          />
        </div>
      </div>
    </div>
    <div>
      <h1>Personal info</h1>
      <div>
        <div>
          <CustomInput
              v-model="values.personal.name1"
              place-holder="Name"/>
          <CustomInput
              v-model="values.personal.name2"
              place-holder="Name (2nd part)"/>
          <CustomInput
              v-model="values.personal.age"
              place-holder="Age"/>
          <ListInput
              :list-items="values.personal.flags"
              place-holder="Flag keyword"
              empty-place-holder="Flags"/>
          <CustomInput
              v-model="values.personal.work"
              place-holder="Work"/>
          <CustomInput
              v-model="values.personal.location"
              place-holder="Location"/>
          <CustomInput
              v-model="values.personal.timezone"
              place-holder="Timezone"/>
        </div>
        <div>
          <HeroDesc
              :name1="values.personal.name1 === '' ? 'First name' : values.personal.name1"
              :name2="values.personal.name2 === '' ? 'Last name' : values.personal.name2"
              :age="values.personal.age === '' ? '1234' : values.personal.age"
              :flags="values.personal.flags"
              :work="values.personal.work === '' ? 'Work' : values.personal.work"
              :location="values.personal.location === '' ? 'Location' : values.personal.location"
              :timezone="values.personal.timezone === '' ? 'Timezone' : values.personal.timezone"
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
              v-model="values.personal.desc"
              place-holder="Description"/>
        </div>
        <div>
          <DummyDesc
              :desc="values.personal.desc === '' ? '\\*\\*Hello\\*\\* \\*world\\* ! ---> **Hello** *world* !' : values.personal.desc"/>
        </div>
      </div>
    </div>
    <div>
      <h1>Colors</h1>
      <div>
        <div>
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
        <div
            :style="values.colors.bgimg === '' ? `background: ${values.colors.bgimg}` : `background: url(${values.colors.bgimg}) center no-repeat`">
          <DummyPage :cols="values.colors"/>
        </div>
      </div>
    </div>
    <div class="half">
      <h1>URLs</h1>
      <div class="nostretch">
        <div>
          <DoubleListInput
              :list-dbl-items="values.urls"
              :place-holders="['Link Title','URL']"
              :sections="['title','url']"
              empty-place-holder="Links"
          />
        </div>
        <div>
          <HeroLinks :links="values.urls"/>
        </div>
      </div>
    </div>
    <div class="tbuttons">
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
</template>

<style scoped>
@media screen and (hover: hover) {
  .creator {
    margin: 64px 0 144px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /*animation: Blur ease-out 0.5s;*/
    gap: 32px;
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
    width: 250px;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 8px;
    flex-grow: 0;
  }

  .creator > div:not(.creattitle, .tbuttons) > div > div:last-of-type {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    padding: 32px;
    border-radius: var(--radius);
    background: url("/bg/creatbg.png");
    background-size: cover !important;
    box-shadow: var(--shadow);
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
    padding: 0 0 32px;
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
    flex: 1 1 50% !important;
    align-self: stretch !important;
  }

  .nostretch > div:first-of-type {
    justify-content: start !important;
  }
}

@media screen and (hover: none) {
  .creator {
    margin: 12vw 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /*animation: Blur ease-out 0.5s;*/
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
    /*flex: 1 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    padding: 6vw;
    border-radius: var(--radius);
    background: url("/bg/bg.png");
    background-size: cover;*/
  }

  .tbuttons {
    width: 75vw;
    padding: 6vw;
    border-radius: var(--radius);
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 2vw;
    box-shadow: var(--shadow);
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