/* eslint-disable */
<template>
  <div class="modal" :class="{show: getIfWon || getIfTied}">
    <h1 v-if="getIfTied">Empate!</h1>
    <h1 v-if="getIfWon">O {{getWhoWon.Name}} ganhou desta vez!</h1>

    <button @click="playAgain">Voltar a jogar</button>
  </div>
</template>

<script>
export default {
  name: "Modal",
  computed: {
    getIfWon() {
      return this.$store.state.win;
    },
    getIfTied() {
      return this.$store.state.tied;
    },
    getWhoWon() {
      const winningPlayer = this.$store.state.players.find(function(player) {
        return player.WonLastRound;
      });

      return winningPlayer;
    }
  },
  methods: {
    playAgain() {
      this.$store.commit("resetBoard");
    }
  }
};
</script>

<style scoped>
.modal {
  position: absolute;
  height: 200px;
  width: 100%;
  max-width: 650px;
  top: 15%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border: 2px solid black;
  background: white;
  display: none;
}

.show {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>