<script setup>
import homeInfo from "@/assets/json/homeInfo.json"
</script>

<template>
  <div class="bulletpoints">
    <h2><span>The advantages </span>as a user...</h2>
    <div>
      <div>
        <div>
          <img src="/icons/easy.png" alt="Easy">
          <h3>Simple to setup</h3>
        </div>
        <p>All you have to do is to <b>fill a form</b> and <b>push a file</b>. Easy !</p>
      </div>
      <div>
        <div>
          <img src="/icons/custom.png" alt="Custom">
          <h3>Fully personalised</h3>
        </div>
        <p>Everything on the page can be <b>customised</b> to your liking, from the colors to the background.</p>
      </div>
      <div>
        <div>
          <img src="/icons/agnostic.png" alt="Web-agnostic">
          <h3>Website-agnostic</h3>
        </div>
        <p>Since everything's stored on your <b>GitHub</b>, nothing is saved on any of the {{ homeInfo.appName }}'s
          instances.</p>
      </div>
    </div>
  </div>
</template>

<style>
@media screen and (orientation: landscape) {
  .bulletpoints {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  .bulletpoints > div {
    width: 1200px;
    max-width: 90vw;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  }

  .bulletpoints > div > div {
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border-radius: var(--radius);
    background: color-mix(in srgb, var(--wi), var(--alpha));
    box-shadow: var(--shadow);
    text-align: center;
    gap: 16px;
  }

  .bulletpoints > div > div:hover {
    background: var(--ho);
  }

  .bulletpoints > div > div * {
    margin: 0;
  }

  .bulletpoints > div > div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .bulletpoints > div > div > div > img {
    height: 32px;
  }

  .bulletpoints > h2 > span {
    font-size: 0.8em;
    opacity: 0.5;
  }
}
</style>