<script setup>

import homeInfo from "@/assets/json/homeInfo.json"
import helpInfo from "@/assets/json/helpInfo.json";
import FlagsDisplayer from "@/components/Hero/FlagsDisplayer.vue";
import {goUp} from "@/assets/js/miscTools";

defineEmits([
  "update:hideBtn"
])

goUp();

</script>

<template>
  <div id="helpmess">
    <img :src="helpInfo.imgsource">
    <h1 v-html="helpInfo.title"></h1>
    <h3>How does all of this work ?</h3>
    <p>To create and make a <b>hero</b> public is a <b>{{ homeInfo.appName }}</b> instance with a <b>Hero Creator</b>
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
    <FlagsDisplayer :flags-list="[]" has-all="all"/>
    <h3>About the colors</h3>
    <p>Colors are represented as <b>hexadecimal code</b>. They usually look either like</p>
    <ul>
      <li><b>#774</b></li>
      <li><b>#A5F9</b></li>
      <li><b>#FF5263</b></li>
      <li><b>#3AD2A640</b></li>
    </ul>
    <p>You can check previews to know if the imputed code is valid. Make sure the colors you
      picked creates a good contrast between the text and the background. You can use this <a
          href="https://coolors.co/contrast-checker"><b>[tool]</b></a> to check
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
    <p>More info can be found <a href="https://www.markdownguide.org/basic-syntax/"><b>[here]</b></a>.
    </p>
    <div>
      <a @click="$emit('update:hideBtn')">
        <img src="/icons/back.png">
        <p>Back</p>
      </a>
    </div>
  </div>
</template>

<style scoped>

@media screen and (orientation: landscape) {
  #helpmess {
    height: fit-content;
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 32px;
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    animation: FadeAnimation ease-out 0.5s;
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
  }


  #helpmess > div:not(.flags) > a {
    width: fit-content;
    padding: 16px 24px;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    /*backdrop-filter: var(--blur);*/
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }

  #helpmess > div:not(.flags) > a:hover {
    background: var(--ho);
  }

  #helpmess > div:not(.flags) > a > img {
    height: 1.25em;
  }

  #helpmess > div:not(.flags) > a > p {
    margin: 0 0 0 8px;
    padding: 0;
    transition: all 0.25s;
  }

  #helpmess > img {
    height: 128px;
  }
}

@media screen and (orientation: portrait) {
  #helpmess {
    margin: 0;
    height: fit-content;
    width: 80vw;
    overflow: scroll;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    z-index: 15;
    justify-content: center;
    animation: FadeAnimation ease-out 0.5s;
    flex-direction: column;
    align-items: stretch;
    padding: 10vw;
    gap: 6vw;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    backdrop-filter: var(--blur);
  }

  #helpmess > * {
    margin: 0;
  }

  #helpmess > p {
    width: 100%;
  }

  #helpmess > div:not(.flags) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #helpmess > p {
    font-size: 1em;
  }

  #helpmess > p > a {
    color: var(--ho);
  }

  #helpmess > img {
    height: 40vw;
    width: 100%;
    object-fit: contain;
  }

  #helpmess > div:not(.flags) > a {
    padding: 4vw 6vw;
    border-radius: var(--radius-button);
    font-size: 1em;
    font-weight: bold;
    background: color-mix(in srgb, var(--wi), var(--alpha));
    /*backdrop-filter: var(--blur);*/
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
    box-shadow: var(--shadow);
  }

  #helpmess > div:not(.flags) > a:hover {
    background: var(--ho);
  }

  #helpmess > div:not(.flags) > a > img {
    height: 1.25em;
  }

  #helpmess > div:not(.flags) > a > p {
    margin: 0 0 0 2vw;
    padding: 0;
    transition: all 0.25s;
  }

  #helpmess > div > a {
    width: 80vw;
  }
}

</style>