<script setup>
import CustomInput from "@/components/Creator/CustomInput.vue";
import {ref} from "vue";
import ImageInput from "@/components/Creator/ImageInput.vue";
import LargeInput from "@/components/Creator/LargeInput.vue";
import ListInput from "@/components/Creator/ListInput.vue";
import ColorInput from "@/components/Creator/ColorInput.vue";
import DoubleListInput from "@/components/Creator/DoubleListInput.vue";

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
        pronouns: ["awa"],
        desc: "",
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

</script>

<template>
  <div class="creator">
    <div>
      <div>
        <h1>Title</h1>
        <CustomInput
            v-model="values.title.title"
            place-holder="Hero Title"/>
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
        <h1>Personal info</h1>
        <CustomInput
            v-model="values.personal.age"
            place-holder="Age"/>
        <LargeInput
            v-model="values.personal.desc"
            place-holder="Description"/>
        <ListInput
            :list-items="values.personal.pronouns"
            place-holder="Pronouns"
        />
      </div>
      <div>
        <h1>Colors</h1>
        <ImageInput
            :img-src="values.colors.bgimg"
            v-on:update:imgSrc="newValue => values.colors.bgimg = newValue"
            place-holder="Background URL"/>
        <ColorInput
            :color="values.colors.background"
            v-on:update:color="newValue => values.colors.background = newValue"
            place-holder="Background"/>
        <ColorInput
            :color="values.colors.widget"
            v-on:update:color="newValue => values.colors.widget = newValue"
            place-holder="Widget"/>
        <ColorInput
            :color="values.colors.link"
            v-on:update:color="newValue => values.colors.link = newValue"
            place-holder="Links"/>
        <ColorInput
            :color="values.colors.hover"
            v-on:update:color="newValue => values.colors.hover = newValue"
            place-holder="Hovered links"/>
        <ColorInput
            :color="values.colors.title"
            v-on:update:color="newValue => values.colors.title = newValue"
            place-holder="Title"/>
        <ColorInput
            :color="values.colors.text"
            v-on:update:color="newValue => values.colors.text = newValue"
            place-holder="Text"/>
      </div>
      <div>
        <h1>Urls</h1>
        <DoubleListInput
            :list-dbl-items="values.urls"
            :place-holders="['Link Title','URL']"
            :sections="['title','url']"
        />
        {{values.urls}}
      </div>
    </div>
  </div>

</template>

<style scoped>
.creator {
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.creator > div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--bg2);
  padding: 32px;
  border-radius: 32px;
  filter: var(--shadow);
}

.creator > div > div {
  display: flex;
  flex-direction: column;
}
</style>