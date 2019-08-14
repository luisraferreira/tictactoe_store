<template>
  <div class="info">
    <div v-for="item in getPlayers" :key="item.id" class="player">
      <p>Nome: {{ item.Name }}</p>
      <p>Símbolo: {{ item.Symbol }}</p>
    </div>
    <p>Player a jogar: {{getActivePlayer.Name}}</p>
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