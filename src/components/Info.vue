<template>
  <div class="info">
    <div v-for="item in getPlayers" :key="item.id" class="player">
      <p>{{ item.Name }}</p>
      <p>Vitórias: {{ item.Wins }}</p>
      <p>{{ item.Symbol }}</p>
    </div>
    <p class="playing">
      Player a jogar:
      <span>{{getActivePlayer.Name}}</span>
    </p>
    <span>Empates: {{getTies}}</span>
  </div>
</template>

<script>
export default {
  name: "Info",
  computed: {
    getPlayers() {
      return this.$store.state.players;
    },
    getActivePlayer() {
      const activePlayer = this.$store.state.players.find(function(player) {
        return player.Active;
      });
      return activePlayer;
    },
    getTies() {
      return this.$store.state.ties;
    }
  }
};
</script>

<style scoped>
.info {
  display: block;
}

.player {
  width: 100%;
  max-width: 300px;
  border: 2px solid #fc5185;
  margin: 10px auto;
}

.player p:nth-of-type(2),
.player p:nth-of-type(3),
span {
  font-weight: bold;
}

.playing {
  font-size: 20px;
}
</style>