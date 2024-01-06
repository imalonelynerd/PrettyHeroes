<script setup>

import hostInfo from "@/assets/json/hostInfo.json"
import FlagsDisplayer from "@/components/Hero/FlagsDisplayer.vue";
import WideButton from "@/components/Home/WideButton.vue";
import {changeLoc} from "@/assets/js/miscTools";

defineEmits([
  "update:hideBtn"
])

</script>

<template>
  <div class="help-container">
    <div id="helpmess">
      <img src="/images/help.png" alt="Help">
      <h1>Help</h1>
      <h3>How does all of this work ?</h3>
      <p>To create and make a <b>hero</b> public is a <b>{{ hostInfo.appName }}</b> instance with a <b>Hero Creator</b>
        and a <b>GitHub</b> account, with a <b>repo</b> named after your account ID. For example, if your account ID is
        <b>foobar</b>, then you'll need to create a <b>repo</b> called <b>foobar</b>. To check if this repo is public,
        just go to <b>github.com/foobar/foobar</b>.</p>
      <p>Then, all you have to do is to create your <b>hero</b> using the <b>Hero
        Creator</b> and save it. You'll obtain a <b>hero.toml</b> file. Finally, push the file to the aforementioned
        repo.
        Et voilà ! To access your hero from any instance, head out to <b>pretty.heroes.instance/foobar</b>.</p>
      <h3>About the flags</h3>
      <p>Each flag is associated to a <b>specific keyword</b>, that you can enter in the <b>flags</b> entries. Right
        below is a list of all the flags available alongside their associated keyword.</p>
      <FlagsDisplayer :flags-list="[]" has-all="all" bg-special="var(--wi)"/>
      <h3>About the colors</h3>
      <p>Colors are represented as <b>hexadecimal code</b>. They usually look either like</p>
      <ul>
        <li><b>#774</b></li>
        <li><b>#A5F9</b></li>
        <li><b>#FF5263</b></li>
        <li><b>#3AD2A640</b></li>
      </ul>
      <p>You can check previews to know if the imputed code is valid. Make sure the colors you
        picked creates a good contrast between the text and the background. You can use the <b>tool below</b> to check
        contrasts between colors.
      </p>
      <h3>About the description</h3>
      <p>The <b>description</b> block supports <b>Markdown</b> ! You can, for example, write : </p>
      <ul>
        <li>**bold** → <b>bold</b></li>
        <li>*italic* → <i>italic</i></li>
        <li>~~struck~~ →
          <del>struck</del>
        </li>
      </ul>
      <p>More info can be found <b>below</b>.</p>
      <div>
        <WideButton @update:buttonClicked="$emit('update:hideBtn')"
                    shown-title="Back"
                    img-link="/icons/back.png"
                    :fil-color="true"
        />
        <WideButton @update:buttonClicked="changeLoc('https://coolors.co/contrast-checker')"
                    shown-title="Contrast tools"
                    img-link="/icons/link.png"
                    :fil-color="true"
        />
        <WideButton @update:buttonClicked="changeLoc('https://www.markdownguide.org/basic-syntax/')"
                    shown-title="Markdown syntax"
                    img-link="/icons/link.png"
                    :fil-color="true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

@media screen and (hover: hover) {
  .help-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--bg), var(--alpha2));
    z-index: 5;
    animation: BgAnimation ease-out 0.5s;
  }

  #helpmess {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 40vw;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 32px;
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    animation: SlideAnimation ease-out 0.5s;
    padding: 64px;
  }

  #helpmess > * {
    margin: 0;
  }

  #helpmess > p {
    width: 100%;
  }

  #helpmess > ul {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  #helpmess > div:not(.flags) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  #helpmess > img {
    height: 128px;
  }
}

@media screen and (hover: none) {
  .help-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 5;
    animation: BgAnimation ease-out 0.5s;
  }

  #helpmess {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 6vw;
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    animation: SlideAnimation ease-out 0.5s;
    padding: 16vw 8vw 8vw;
  }

  #helpmess > * {
    margin: 0;
  }

  #helpmess > p {
    width: 100%;
  }

  #helpmess > ul {
    display: flex;
    flex-direction: column;
    gap: 4vw;
  }

  #helpmess > div:not(.flags) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 2vw;
  }

  #helpmess > img {
    height: 40vw;
  }

  #helpmess > a {
    width: 70vw;
  }
}

</style>