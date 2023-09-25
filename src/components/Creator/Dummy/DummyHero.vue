<script setup>
import HeroTitle from "@/components/Hero/HeroTitle.vue";
import HeroDesc from "@/components/Hero/HeroDesc.vue";
import HeroLinks from "@/components/Hero/HeroLinks.vue";
import Background from "@/components/Hero/Background.vue";
import CustomFooter from "@/components/Hero/CustomFooter.vue";
import DummyMode from "@/components/Creator/Dummy/DummyMode.vue";

const props = defineProps(['res']);

defineEmits([
  'update:hideBtn'
])

let params = {
  '--cbg': props.res.colors.background,
  '--cwi': props.res.colors.widget,
  '--clk': props.res.colors.link,
  '--cho': props.res.colors.hover,
  '--ctt': props.res.colors.title,
  '--ctxt': props.res.colors.text
}
for (let elem in params) {
  if (params[elem] !== undefined) {
    document.documentElement.style.setProperty(elem, params[elem]);
  }
}

</script>

<template>
  <div class="dummy">
    <Background :bg-img="res.colors.bgimg"/>
    <DummyMode
        @update:hideBtn="$emit('update:hideBtn')"
    />
    <div class="hero">
      <div>
        <HeroTitle
            :title="res.title.title"
            :catchphrase="res.title.catchphrase"
            :img-src="res.title.img"
            :bg-img="res.colors.bgimg"
        />
        <HeroDesc
            :name1="res.title.name1"
            :name2="res.title.name2"
            :age="res.personal.age"
            :pronouns="res.personal.pronouns"
            :desc="res.personal.desc"
        />
        <HeroLinks :links="res.urls"/>
      </div>
    </div>
    <CustomFooter/>
  </div>
</template>

<style scoped>

.dummy {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  animation: Blur ease-out 0.5s;
}

.hero {
  padding: 64px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero > div {
  min-width: 500px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

.hero > div > *:not(:last-child) {
  margin-bottom: 16px;
}
</style>
