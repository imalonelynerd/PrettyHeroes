<script setup>
import HeroTitle from "@/components/Hero/HeroTitle.vue";
import HeroDesc from "@/components/Hero/HeroDesc.vue";
import HeroLinks from "@/components/Hero/HeroLinks.vue";
import Background from "@/components/Hero/Background.vue";
import HeroFooter from "@/components/Hero/HeroFooter.vue";
import {Color, hexToRgb, Solver} from "@/assets/js/cssColor";
import WideButton from "@/components/Home/WideButton.vue";

const props = defineProps(['hero']);

defineEmits([
  'update:hideBtn'
])

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
    <WideButton id="hide"
                :fil-color="true"
                img-link="/icons/back.png"
                shown-title="Back"
                @update:buttonClicked="$emit('update:hideBtn')"
    />
    <div class="hero">
      <HeroTitle
          :catchphrase="hero.title.catchphrase"
          :img-src="hero.title.img"
          :pronouns="hero.title.pronouns"
          :title="hero.title.title"
          :name1="hero.perso.name1"
          :name2="hero.perso.name2"
          :age="hero.perso.age"
      />
      <HeroDesc
          :desc="hero.perso.desc"
          :flags="hero.perso.flags"
          :location="hero.perso.location"
          :timezone="hero.perso.timezone"
          :work="hero.perso.work"
      />
      <HeroLinks v-if="hero.urls.linksList.length !== 0" :links="hero.urls.linksList"/>
    </div>
    <HeroFooter og-file=""/>
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
    z-index: 10;
    animation: FadeAnimation ease-out 0.5s;
  }

  .hero {
    margin: 32px auto 48px;
    width: 500px;
    max-width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    animation: FadeAnimation ease-out 0.5s;
    padding: 64px;
    gap: 56px;
    border-radius: var(--radius);
    background: color-mix(in srgb, var(--cbg), var(--alpha));
    backdrop-filter: var(--blur);
  }

  #hide {
    position: fixed;
    bottom: 36px;
    right: 36px;
    z-index: 4;
  }
}

</style>
