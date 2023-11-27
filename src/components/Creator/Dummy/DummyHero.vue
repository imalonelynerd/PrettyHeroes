<script setup>
import HeroTitle from "@/components/Hero/HeroTitle.vue";
import HeroDesc from "@/components/Hero/HeroDesc.vue";
import HeroLinks from "@/components/Hero/HeroLinks.vue";
import Background from "@/components/Hero/Background.vue";
import CustomFooter from "@/components/Hero/CustomFooter.vue";
import DummyMode from "@/components/Creator/Dummy/DummyMode.vue";
import {Color, hexToRgb, Solver} from "@/assets/js/cssColor";
import {goUp} from "@/assets/js/miscTools";

const props = defineProps(['hero']);

defineEmits([
  'update:hideBtn'
])

goUp();

let params = {
  '--cbg': props.hero.colors.background,
  '--cwi': props.hero.colors.widget,
  '--clk': props.hero.colors.link,
  '--cho': props.hero.colors.hover,
  '--ctt': props.hero.colors.title,
  '--ctxt': props.hero.colors.text
}
for (let elem in params) {
  if (params[elem] !== undefined) {
    document.documentElement.style.setProperty(elem, params[elem]);
  }
}

if (props.hero.colors.title !== undefined) {
  let rgb = hexToRgb(props.hero.colors.title);
  if (rgb != null) {
    let color = new Color(rgb[0], rgb[1], rgb[2]);
    let solver = new Solver(color);
    document.documentElement.style.setProperty('--fil', solver.solve().filter);
  }
}

</script>

<template>
  <div class="dummy">
    <Background :bg-img="hero.colors.bgimg"/>
    <DummyMode
        @update:hideBtn="$emit('update:hideBtn')"
    />
    <div class="hero">
      <div>
        <HeroTitle
            :catchphrase="hero.title.catchphrase"
            :img-src="hero.title.img"
            :pronouns="hero.title.pronouns"
            :title="hero.title.title"
        />
        <HeroDesc
            :age="hero.perso.age"
            :desc="hero.perso.desc"
            :flags="hero.perso.flags"
            :location="hero.perso.location"
            :name1="hero.perso.name1"
            :name2="hero.perso.name2"
            :timezone="hero.perso.timezone"
            :work="hero.perso.work"
        />
        <HeroLinks v-if="hero.urls.linksList.length !== 0" :links="hero.urls.linksList"/>
      </div>
    </div>
    <CustomFooter og-file=""/>
  </div>
</template>

<style scoped>

@media screen and (hover: hover) {
  .dummy {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    animation: FadeAnimation ease-out 0.5s;
  }

  .hero {
    margin: 64px 0;
    display: flex;
    align-items: center;
    justify-content: center;

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

@media screen and (hover: none) {
  .dummy {
    z-index: 2;
    animation: FadeAnimation ease-out 0.5s;
  }

  .hero {
    margin: 10vw 0;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .hero > div {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 4vw;
  }
}


</style>
