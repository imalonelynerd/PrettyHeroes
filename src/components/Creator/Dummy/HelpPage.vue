<script setup>

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
      <h3>About the flags</h3>
      <p>In order to display the flags correctly, you must enter in the <b>flags</b> entries a <b>specific keyword</b>.
        Hover your mouse over one of the <b>flags</b> below to get the corresponding keyword.</p>
      <FlagsDisplayer flags-list="all"/>
      <h3>About the colors</h3>
      <p>To enter a color, it must correspond to a <b>valid hexadecimal code</b>. They usually look either like <b>#FF5263</b>
        or <b>#27233F40</b> (for transparency). The input's color will change accordingly if your input is valid.</p>
      <h3>About the description</h3>
      <p>The <b>description</b> entry can contain <b>Markdown</b> tags. Some of them includes <b>** bold **</b>, <i>*
        italic *</i> or
        <del>~~ struck ~~</del>
        . More of these can be found <a href="https://www.markdownguide.org/basic-syntax/"><b>[here]</b></a>.
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

/*.helpbtn {
  position: fixed;
  top: 32px;
  left: 32px;
}*/

#helpmess > div > div:not(.flags) > a {
  width: fit-content;
  padding: 16px 24px;
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
  filter: var(--shadow);
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

#helpmess {
  overflow-y: scroll;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  display: flex;
  z-index: 15;
  align-items: center;
  justify-content: center;
  animation: Blur ease-out 0.5s;
}

#helpmess > div {
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  background: var(--bg);
  border-radius: 32px;
  padding: 32px;
  float: right;
  animation: slidein ease-out 0.25s;
  filter: var(--shadow);
}

#helpmess > div > * {
  margin: 0;
}

#helpmess > div > *:not(:last-child) {
  margin-bottom: 24px;
  text-align: center;
}

#helpmess > div > div:not(.flags) {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#helpmess > div > p {
  font-size: 0.8em;
}

#helpmess > div > p > a {
  color: var(--ho);
}

#helpmess > div > img {
  height: 128px;
}

#helpmess > div > div:not(.flags) > *:not(:last-child) {
  margin-right: 8px;
}
</style>