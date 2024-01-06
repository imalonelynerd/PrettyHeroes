<script setup>

// Custom inputs
import CustomInput from "@/components/Creator/CustomInput.vue";
import ImageInput from "@/components/Creator/ImageInput.vue";
import LargeInput from "@/components/Creator/LargeInput.vue";
import ListInput from "@/components/Creator/ListInput.vue";
import ColorInput from "@/components/Creator/ColorInput.vue";
import DoubleListInput from "@/components/Creator/DoubleListInput.vue";

// Dummy componements
import DummyHero from "@/components/Creator/DummyHero.vue";

// Functions & objects
import {ref} from "vue";
import {copyHero, loadHero, resetHero, saveHero} from "@/assets/js/heroSaver";
import {changeLoc, defFil, defineHeader} from "@/assets/js/miscTools";
import {Hero} from "@/assets/js/heroFactory";

// Others
import HelpPage from "@/components/Creator/HelpPage.vue";
import TripleInput from "@/components/Creator/TripleInput.vue";
import WideButton from "@/components/Home/WideButton.vue";

const hero = ref(new Hero());

const dummyShown = ref(false);
const helpShown = ref(false);

document.documentElement.style = null;

function definePageStyle(elem, value) {
  if (elem === 'reset') {
    document.documentElement.style = null;
  } else {
    document.documentElement.style.setProperty(elem, value);
    if (elem === '--ctt') {
      defFil(value)
    }
  }
}

defineHeader("Creator", "/icons/create.png", "Creator")

</script>

<template>
  <HelpPage
      v-if="helpShown"
      @update:hide-btn="helpShown = false"/>
  <div class="creator">
    <div class="creattitle">
      <img src="/images/creator.png" alt="Creator"/>
      <h1>Hero Creator</h1>
      <p>Create your <b>Hero</b> (hero.toml) file here ! If you need help, <b>click on the button</b> below or feel
        free to ask for <b>help on GitHub</b> !</p>
      <div>
        <WideButton @update:buttonClicked="changeLoc('#creator',false)"
                    img-link="/icons/more.png"
                    shown-title="Start editing"
                    :fil-color="true"
        />
        <WideButton
            @update:buttonClicked="helpShown = true"
            img-link="/icons/help.png"
            shown-title="Help"
            :fil-color="true"
        />
      </div>
    </div>
    <div id="creator">
      <h1>Title</h1>
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
    </div>
    <div>
      <h1>Personal info</h1>
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
    </div>
    <div>
      <h1>Colors</h1>
      <div>
        <ImageInput
            :img-src="hero.colors.bgimg"
            place-holder="Background URL"
            @update:imgUpdated="newValue => hero.colors.bgimg = newValue"/>
        <div class="gridc">
          <ColorInput
              :color="hero.colors.background"
              place-holder="Background color"
              @update:colorUpdated="newValue => {hero.colors.background = newValue; definePageStyle('--cbg', newValue) }"/>
          <ColorInput
              :color="hero.colors.widget"
              place-holder="Widget color"
              @update:colorUpdated="newValue => { hero.colors.widget = newValue; definePageStyle('--cwi', newValue)}"/>
          <ColorInput
              :color="hero.colors.link"
              place-holder="Links color"
              @update:colorUpdated="newValue => {hero.colors.link = newValue; definePageStyle('--clk', newValue)}"/>
          <ColorInput
              :color="hero.colors.hover"
              place-holder="Hovered links color"
              @update:colorUpdated="newValue => {hero.colors.hover = newValue; definePageStyle('--cho', newValue)}"/>
          <ColorInput
              :color="hero.colors.title"
              place-holder="Title color"
              @update:colorUpdated="newValue => {hero.colors.title = newValue; definePageStyle('--ctt', newValue)}"/>
          <ColorInput
              :color="hero.colors.text"
              place-holder="Text color"
              @update:colorUpdated="newValue => {hero.colors.text = newValue; definePageStyle('--ctxt', newValue)}"/>
        </div>
      </div>
    </div>
    <div>
      <h1>URLs</h1>
      <div>
        <DoubleListInput
            :list-dbl-items="hero.urls.linksList"
            :place-holders="['Link Title','URL']"
            :sections="['title','url']"
            empty-place-holder="Links"
        />
      </div>
    </div>
    <div class="tbuttons" v-if="!(dummyShown)">
      <WideButton
          @update:buttonClicked="copyHero(hero)"
          img-link="/icons/copy.png"
          shown-title="Copy"
          :fil-color="true"
      />
      <WideButton
          @update:buttonClicked="loadHero(hero)"
          img-link="/icons/load.png"
          shown-title="Load"
          :fil-color="true"
      />
      <WideButton
          @update:buttonClicked="saveHero(hero)"
          img-link="/icons/save.png"
          shown-title="Save"
          :fil-color="true"
      />
      <WideButton
          @update:buttonClicked="resetHero(hero); definePageStyle('reset',0)"
          img-link="/icons/reset.png"
          shown-title="Reset"
          :fil-color="true"
      />
      <WideButton
          @update:buttonClicked="helpShown = true"
          img-link="/icons/help.png"
          shown-title="Help"
          :fil-color="true"
      />
    </div>
  </div>
  <DummyHero
      :hero="hero"
  />
</template>

<style scoped>
@media screen and (hover: hover) {
  .creator {
    position: fixed;
    overflow: scroll;
    left: 0;
    top: 0;
    bottom: 0;
    right: 60%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: start;
    gap: 64px;
    padding: 0 64px 64px;
    animation: FadeAnimation ease-out 0.5s;
  }

  .creator > div:not(.creattitle, .tbuttons) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 16px;
  }

  .creator > div:not(.creattitle, .tbuttons) > h1 {
    text-align: center;
  }

  .creator > div:not(.creattitle, .tbuttons) > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 12px;
  }

  .creator > div:not(.creattitle, .tbuttons) > div > * {
    flex-grow: 1;
  }

  .tbuttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    gap: 8px;
    animation: FadeAnimation ease-out 0.5s;
  }

  .gridc {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    justify-content: stretch;
    gap: 12px;
  }

  .creattitle {
    height: 100vh;
    flex-shrink: 0;
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
}

@media screen and (hover: none) {
  .creator {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16vw;
    animation: FadeAnimation ease-out 0.5s;
    padding: 0 6vw 6vw;
  }

  .creator > div:not(.creattitle, .tbuttons) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vw;
  }

  .creator > div:not(.creattitle, .tbuttons) > h1 {
    text-align: center;
  }

  .creator > div:not(.creattitle, .tbuttons) > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 2vw;
  }

  .tbuttons {
    width: 100%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    justify-content: stretch;
    gap: 2vw;
    animation: FadeAnimation ease-out 0.5s;
  }

  .gridc {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    justify-content: stretch;
    gap: 2vw;
  }

  .creattitle {
    height: 100vh;
    flex-shrink: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6vw;
    animation: FadeAnimation ease-out 0.5s;
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
}


</style>