<template>
  <div class="info">
    <div v-for="item in getPlayers" :key="item.id" class="player">
      <p>Nome: {{ item.Name }}</p>
      <p>Símbolo: {{ item.Symbol }}</p>
      <p>Vitórias: {{ item.Wins  }}</p>
    </div>
    <p>Player a jogar: {{getActivePlayer.Name}}</p>
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.player {
  padding: 0 40px;
}
</style>