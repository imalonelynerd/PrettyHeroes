<script setup>

defineProps(["imgSrc"]);

(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.getElementById("parallax");

  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.005}%`;
    let x = `${_depth}`;
    //console.log(x);
    elem.style.backgroundPosition = x;
  }
})();
</script>

<template>
  <!--<div id="parallax" :style="'background: url(' + imgSrc + ')'"/>-->
  <div id="parallax" style="background: url('https://imalonelynerd.fr/landing/images/bg.png')"/>

</template>

<style scoped>
#parallax {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 120%;
  z-index: 0;
}
</style>