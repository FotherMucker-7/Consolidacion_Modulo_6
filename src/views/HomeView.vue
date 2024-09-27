<template>
  <div class="game-list-container">
    <div class="container py-5">
      <h1 class="text-center mb-5">Descubre Nuevos Juegos</h1>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="game in displayedGames" :key="game.id">
          <GameCard :game="game" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from '@/components/GameCard.vue';

export default {
  name: 'HomeView',
  components: {
    GameCard,
  },
  data() {
    return {
      games: [],
    };
  },
  computed: {
    displayedGames() {
      return this.games.slice(0, 3);
    },
  },
  created() {
    this.fetchGames();
  },
  methods: {
    async fetchGames() {
      try {
        const response = await fetch(
          'https://api.rawg.io/api/games?key=6ffd385723b64589b77cefa086c31e79&dates=2024-09-01,2024-09-11&ordering=-released'
        );
        const data = await response.json();
        this.games = data.results;
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    },
  },
};
</script>

<style scoped>
.game-list-container {
  background-color: #f8f9fa;
  min-height: 100vh;
}

h1 {
  color: #2c3e50;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
