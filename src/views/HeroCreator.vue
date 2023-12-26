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
import DummyPage from "@/components/Creator/Dummy/DummyPage.vue";

// JSONs
import creatorInfo from "@/assets/json/creatorInfo.json";
import HeroDesc from "@/components/Hero/HeroDesc.vue";
import HeroLinks from "@/components/Hero/HeroLinks.vue";

// Functions & objects
import {ref} from "vue";
import {copyHero, loadHero, resetHero, saveHero} from "@/assets/js/heroSaver";
import {changeLoc, defineHeader, goUp} from "@/assets/js/miscTools";
import {Hero} from "@/assets/js/heroFactory";

// Others
import HelpPage from "@/components/Creator/HelpPage.vue";
import TripleInput from "@/components/Creator/TripleInput.vue";
import WideButton from "@/components/Home/WideButton.vue";

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
  <div class="creattitle">
    <img :src="creatorInfo.imgSource" alt="Creator"/>
    <h1>{{ creatorInfo.title }}</h1>
    <p v-html="creatorInfo.description"></p>
    <div>
      <WideButton @update:buttonClicked="changeLoc('#creator',false)"
                  img-link="/icons/more.png"
                  shown-title="Start editing"
      />
      <WideButton
          @update:buttonClicked="showElem(true,'help')"
          img-link="/icons/help.png"
          shown-title="Help"
      />
    </div>
  </div>
  <div v-if="!dummyShown" class="creator" id="creator">
    <div>
      <h1>Title</h1>
      <div>
        <div>
          <ImageInput
              :img-src="hero.title.img"
              place-holder="Profile picture URL"
              @update:imgUpdated="newValue => hero.title.img = newValue"/>
          <CustomInput
              :customValue="hero.title.title"
              place-holder="Hero title (header)"
              @update:valueUpdated="newValue => hero.title.title = newValue"/>
          <TripleInput
              :custom-value1="hero.perso.name1"
              :custom-value2="hero.perso.name2"
              :custom-value3="hero.perso.age"
              place-holder1="Name"
              place-holder2="2nd part"
              place-holder3="Age"
              @update:value2Updated="newValue => hero.perso.name2 = newValue"
              @update:value1Updated="newValue => hero.perso.name1 = newValue"
              @update:value3Updated="newValue => hero.perso.age = newValue"/>
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
              :name1="hero.perso.name1IsEmpty() ? 'First name' : hero.perso.name1"
              :name2="hero.perso.name2IsEmpty() ? 'Last name' : hero.perso.name2"
              :age="hero.perso.ageIsEmpty() ? '1234' : hero.perso.age"
          />
        </div>
      </div>
    </div>
    <div>
      <h1>Personal info</h1>
      <div class="endstretch">
        <div>
          <TripleInput
              :custom-value1="hero.perso.location"
              :custom-value2="hero.perso.work"
              :custom-value3="hero.perso.timezone"
              place-holder1="Location"
              place-holder2="Work"
              place-holder3="Timezone"
              @update:value1-updated="newValue => hero.perso.location = newValue"
              @update:value2-updated="newValue => hero.perso.work = newValue"
              @update:value3-updated="newValue => hero.perso.timezone = newValue"/>
          <ListInput
              :list-items="hero.perso.flags"
              empty-place-holder="Flags"
              place-holder="Flag keyword"/>
          <LargeInput
              :custom-value="hero.perso.desc"
              place-holder="Description"
              @update:valueUpdated="newValue => hero.perso.desc = newValue"/>

        </div>
        <div>
          <HeroDesc
              :flags="hero.perso.flags"
              :location="hero.perso.locationIsEmpty() ? 'Location' : hero.perso.location"
              :timezone="hero.perso.timezoneIsEmpty() ? 'Timezone' : hero.perso.timezone"
              :work="hero.perso.workIsEmpty() ? 'Work' : hero.perso.work"
              :desc="hero.perso.descIsEmpty() ? '\\*\\*Hello\\*\\* \\*world\\* ! ---> **Hello** *world* !' : hero.perso.desc"
          />
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
    <div>
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
    <div class="tbuttons" v-if="!(dummyShown)">
      <WideButton
          @update:buttonClicked="showElem(true,'dummy'); goUp()"
          img-link="/icons/create.png"
          shown-title="Test"
      />
      <WideButton
          @update:buttonClicked="copyHero(hero)"
          img-link="/icons/copy.png"
          shown-title="Copy"
      />
      <WideButton
          @update:buttonClicked="loadHero(hero)"
          img-link="/icons/load.png"
          shown-title="Load"
      />
      <WideButton
          @update:buttonClicked="saveHero(hero)"
          img-link="/icons/save.png"
          shown-title="Save"
      />
      <WideButton
          @update:buttonClicked="resetHero(hero)"
          img-link="/icons/reset.png"
          shown-title="Reset"
      />
      <WideButton
          @update:buttonClicked="showElem(true,'help')"
          img-link="/icons/help.png"
          shown-title="Help"
      />
    </div>
  </div>
</template>

<style scoped>
@media screen and (hover: hover) {
  .creator {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: FadeAnimation ease-out 0.5s;
    gap: 32px;
    padding: 32px 0;
    width: 1200px;
    max-width: 90vw;
  }

  .creator > div:not(.creattitle, .tbuttons) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    border-radius: var(--radius);
    gap: 32px;
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
    width: 425px;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 10px;
    flex-grow: 0;
  }

  .creator > div:not(.creattitle, .tbuttons) > div > div:last-of-type {
    flex: 1 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 24px;
    border-radius: var(--radius);
    background: url("/bg/creatbg.png") center center no-repeat;
    background-size: cover !important;
    box-shadow: var(--shadow);
  }

  .creator > div:not(.creattitle, .tbuttons) > div > div:last-of-type > div {
    width: 80%;
    background: color-mix(in srgb, var(--bg), var(--alpha));
    padding: 32px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
  }

  .creator > div > * {
    margin: 0;
  }

  .tbuttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    animation: FadeAnimation ease-out 0.5s;
  }

  .creattitle {
    height: 100vh;
    width: 100vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    animation: FadeAnimation ease-out 0.5s;
  }

  .creattitle > * {
    margin: 0;
  }

  .creattitle > img {
    height: 160px;
  }

  .creattitle > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
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

  .endstretch {
    flex: 1 0 !important;
  }

  .endstretch > div:first-of-type {
    align-self: stretch !important;
  }

  .endstretch > div:first-of-type > *:not(:last-child) {
    flex: 0 0 !important;
  }

  .endstretch > div:first-of-type > *:last-child {
    flex: 1 0 !important;
  }
}

@media screen and (hover: none) {
  .creator {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: FadeAnimation ease-out 0.5s;
    gap: 12vw;
    padding: 6vw;
  }

  .creator > div:not(.creattitle, .tbuttons) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius);
    gap: 6vw;
  }

  .creator > div:not(.creattitle, .tbuttons) > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 6vw;
  }

  .creator > div:not(.creattitle, .tbuttons) > div > div:first-of-type {
    align-self: flex-start;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 2vw;
  }

  .creator > div:not(.creattitle, .tbuttons) > div > div:last-of-type {
    display: none;
  }

  .creator > div > * {
    margin: 0;
  }

  .tbuttons {
    width: 100%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    justify-content: center;
    gap: 2vw;
    animation: FadeAnimation ease-out 0.5s;
  }

  .creattitle {
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4vw;
    animation: FadeAnimation ease-out 0.5s;
    margin: 0 6vw;
  }

  .creattitle > * {
    margin: 0;
  }

  .creattitle > img {
    height: 40vw;
  }

  .creattitle > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 2vw;
  }

  .half > div {
    display: flex !important;
    flex-direction: row !important;
    align-items: stretch !important;
    justify-content: stretch !important;
  }
}


</style>