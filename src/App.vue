<template>
  <div id="app">
    <board />
    <modal />
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "app",
  components: {
    Board,
    Modal
  }
};
</script>

<style>
#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3fc1c9;
}
</style>
