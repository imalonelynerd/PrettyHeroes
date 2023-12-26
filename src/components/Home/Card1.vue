<script setup>
import WideButton from "@/components/Home/WideButton.vue";
</script>

<template>
  <div class="card" id="card1">
    <div>
      <h2>A simple, colorful, straight-to-the-point <b>About Me</b> page</h2>
      <p>Tired of having to fit all of your <b>personal stuff</b> in a Discord bio ? You wish to have an easy way to
        show your
        <b>pronouns</b> ? Your <b>contact info</b> ? Your <b>personal projects</b> ?</p>
      <p>
        Well, I have <b>good news</b> for you !
      </p>
      <WideButton
          shown-title="Search for a Hero"
          img-link="/icons/search.png"
          @update:buttonClicked="$router.push('/search')"
      />
    </div>
    <img src="/cards/c1.png" alt="Card n°1">
  </div>
</template>

<style>
@media screen and (hover: hover) {
  .card {
    padding: 76px 64px;
    width: 1200px;
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .card > img {
    height: 312px;
  }

  .card > div {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }

  .card > div > h2 {
    text-align: center;
  }

  .card > div > *:not(a) {
    width: 80%;
    margin: 0;
  }
}

@media screen and (hover: none) {
  .card {
    padding: 16vw 6vw;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 6vw;
  }

  .card > img {
    width: 100%;
  }

  .card > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 8vw;
  }

  .card > div > h2 {
    text-align: center;
  }

  .card > div > * {
    margin: 0;
  }
}

</style>