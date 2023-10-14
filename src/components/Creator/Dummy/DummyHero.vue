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
            :pronouns="res.title.pronouns"
        />
        <HeroDesc
            :name1="res.personal.name1"
            :name2="res.personal.name2"
            :age="res.personal.age"
            :flags="res.personal.flags"
            :work="res.personal.work"
            :location="res.personal.location"
            :timezone="res.personal.timezone"
            :desc="res.personal.desc"
        />
        <HeroLinks :links="res.urls"/>
      </div>
    </div>
    <CustomFooter/>
  </div>
</template>

<style scoped>

@media screen and (orientation: landscape) {
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
    margin: 64px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: Blur ease-out 0.5s;
  }

  .hero > div {
    width: 650px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 16px;
  }
}

@media screen and (orientation: portrait) {
  .dummy {
    z-index: 2;
    animation: Blur ease-out 0.5s;
  }

  .hero {
    margin: 5vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: Blur ease-out 0.5s;
  }

  .hero > div {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 2vh;
  }
}


</style>
