<script setup>

import homeInfo from "@/assets/json/homeInfo.json"
import helpInfo from "@/assets/json/helpInfo.json";
import FlagsDisplayer from "@/components/Hero/FlagsDisplayer.vue";

defineEmits([
  "update:hideBtn"
])

</script>

<template>
  <div id="helpmess">
    <div>
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
        Et voilà ! To access your hero from any instance, head out to <b>pretty.heroes.instance/#/foobar</b>.</p>
      <h3>About the flags</h3>
      <p>Each flag is associated to a <b>specific keyword</b>, that you can enter in the <b>flags</b> entries. Right
        below is a list of all the flags available alongside their associated keyword.</p>
      <FlagsDisplayer :flags-list="[]" has-all="all"/>
      <h3>About the colors</h3>
      <p>Colors are represented as <b>hexadecimal code</b>. They usually look either like <b>#FF5263</b>
        or <b>#27233F40</b>. You can check previews to know if the imputed code is valid. Make sure the colors you
        picked creates a good contrast between the text and the background. You can use this <a
            href="https://coolors.co/contrast-checker"><b>[tool]</b></a> to check
        contrasts between colors.</p>
      <h3>About the description</h3>
      <p>The <b>description</b> block supports <b>Markdown</b> ! You can, for example, write <b>** bold **</b>, <i>*italic
        *</i> or
        <del>~~ struck ~~</del>
        text. More info can be found <a href="https://www.markdownguide.org/basic-syntax/"><b>[here]</b></a>.
      </p>
      <div>
        <a @click="$emit('update:hideBtn')">
          <img src="/icons/back.png">
          <p>Back</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

@media screen and (hover: hover) {
  #helpmess {
    margin: 0;
    height: fit-content;
    width: 100%;
    padding: 64px 0;
    overflow: scroll;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    z-index: 15;
    align-items: center;
    justify-content: center;

  }

  #helpmess > div {
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    background: color-mix(in srgb, var(--bg), var(--alpha));
    backdrop-filter: var(--blur);
    border-radius: var(--radius);
    padding: 32px;
    float: right;

    box-shadow: var(--shadow);
    gap: 24px;
  }

  #helpmess > div > * {
    margin: 0;
  }

  #helpmess > div > div:not(.flags) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }


  #helpmess > div > div:not(.flags) > a {
    width: fit-content;
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

  #helpmess > div > div:not(.flags) > a:hover {
    background: var(--ho);
  }

  #helpmess > div > div:not(.flags) > a > img {
    height: 1.25em;
  }

  #helpmess > div > div:not(.flags) > a > p {
    margin: 0 0 0 8px;
    padding: 0;
    transition: all 0.25s;
  }

  #helpmess > div > img {
    height: 128px;
  }
}

@media screen and (hover: none) {
  #helpmess {
    margin: 0;
    height: fit-content;
    width: 100%;
    padding: 6vw 0;
    overflow: scroll;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    z-index: 15;
    align-items: center;
    justify-content: center;
  }

  #helpmess > div {
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    height: fit-content;
    padding: 10vw 0;
    float: right;

    gap: 6vw;
  }

  #helpmess > div > * {
    margin: 0;
  }

  #helpmess > div > div:not(.flags) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #helpmess > div > p {
    font-size: 1em;
  }

  #helpmess > div > p > a {
    color: var(--ho);
  }

  #helpmess > div > img {
    height: 40vw;
    width: 100%;
    object-fit: contain;
  }

  #helpmess > div > div:not(.flags) > a {
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
    box-shadow: var(--shadow);
  }

  #helpmess > div > div:not(.flags) > a:hover {
    background: var(--ho);
  }

  #helpmess > div > div:not(.flags) > a > img {
    height: 1.25em;
  }

  #helpmess > div > div:not(.flags) > a > p {
    margin: 0 0 0 2vw;
    padding: 0;
    transition: all 0.25s;
  }

  #helpmess > div > div > a {
    width: 80vw;
  }
}

</style>