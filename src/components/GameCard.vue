<template>
    <div class="card game-card h-100 shadow-sm">
      <img :src="game.background_image" class="card-img-top" :alt="game.name">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ game.name }}</h5>
        <p class="card-text">
          <span class="badge bg-primary me-2">Rating: {{ game.rating.toFixed(1) }}</span>
          <small class="text-muted">Released: {{ formatDate(game.released) }}</small>
        </p>
        <p class="card-text mt-auto">
          <small class="text-muted">Updated: {{ formatDate(game.updated) }}</small>
        </p>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <button class="btn btn-outline-primary" @click="goToOpinions">Opinar</button>
          <font-awesome-icon 
            icon="heart" 
            class="text-danger" 
            style="font-size: 1.5rem; cursor: pointer;" 
            @click="goToAdmin"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GameCard',
    props: {
      game: {
        type: Object,
        required: true
      }
    },
    methods: {
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      },
      goToOpinions() {
      this.$router.push({ 
      name: 'GameOpinions', 
      params: { gameName: this.game.name }
    });
      },
      goToAdmin() {
        this.$router.push({ 
          name: 'AdminView', 
          params: { gameName: this.game.name }
        });
      }

    }
  }
  </script>
  
  <style scoped>
  .game-card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  .game-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
  }
  
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  
  .card-title {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .badge {
    font-size: 0.8rem;
  }
  
  .btn-outline-primary {
    transition: all 0.3s ease;
  }
  
  .btn-outline-primary:hover {
    transform: scale(1.05);
  }
  
  .text-danger {
    transition: all 0.3s ease;
  }
  
  .text-danger:hover {
    transform: scale(1.2);
  }
  </style>