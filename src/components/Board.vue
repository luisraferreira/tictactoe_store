/* eslint-disable */
<template>
  <div class="game">
    <Info />
    <div class="board">
      <div
        v-for="cell in getBoard"
        :key="cell.id"
        @click="writeMark(cell.id)"
        :id="cell.id"
        class="cell"
      >{{ cell.mark }}</div>
    </div>
  </div>
</template>

<script>
import Info from "./Info.vue";

export default {
  name: "Board",
  components: {
    Info
  },
  computed: {
    getBoard() {
      return this.$store.state.board;
    }
  },
  methods: {
    writeMark(cellId) {
      //Check if someone already won and don't let them place a mark
      if (!this.$store.state.win) {
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
  }
};
</script>

<style>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0;
  width: 100%;
  max-width: 450px;
  margin: 40px auto;
}

.board div {
  height: 150px;
  max-width: 150px;
  width: 100%;
  border: 1px solid #fc5185;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(24px + (80 - 24) * ((100vw - 300px) / (1600 - 300)));
}

/*cell config*/
.board div:nth-of-type(1),
.board div:nth-of-type(2),
.board div:nth-of-type(3) {
  border-top: none;
}

.board div:nth-of-type(7),
.board div:nth-of-type(8),
.board div:nth-of-type(9) {
  border-bottom: none;
}

.board div:nth-of-type(1),
.board div:nth-of-type(4),
.board div:nth-of-type(7) {
  border-left: none;
}

.board div:nth-of-type(3n + 3) {
  border-right: none;
}

.win {
  background-color: #364f6b;
}
</style>