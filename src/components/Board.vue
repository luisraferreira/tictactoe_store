/* eslint-disable */
<template>
  <div class="game">
    <h1>Game Board</h1>
    <div class="board">
      <div v-for="cell in getBoard" :key="cell.id" @click="writeMark(cell.id)">{{ cell.mark }}</div>
    </div>
  </div>
</template>

<script>
import { debuglog } from "util";
export default {
  name: "Board",
  computed: {
    getBoard() {
      return this.$store.state.board;
    }
  },
  methods: {
    writeMark(cellId) {
      const activePlayer = this.$store.state.players.find(function(player) {
        return player.Active;
      });

      const settings = {
        cell: cellId,
        player: activePlayer
      };

      this.$store.dispatch("writeMark", settings);
    }
  }
};
</script>

<style>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0;
  max-width: 300px;
  margin: 0 auto;
}

.board div {
  height: 100px;
  width: 100px;
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>