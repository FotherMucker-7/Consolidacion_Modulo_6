<template>
    <div class="admin-view">
      <div v-if="!showAdminPanel" class="login-prompt">
        <h2>Ingrese sus datos para ver la información</h2>
        <button @click="promptUserData" class="btn btn-primary">
          Ingrese sus datos
        </button>
      </div>
  
      <div v-else class="admin-panel">
        <div class="sidebar">
          <div class="avatar">
            <img :src="avatarUrl" :alt="fullName" />
          </div>
          <h2>Bienvenid@<br>"{{ firstName }} {{ lastName }}"</h2>
        </div>
        <div class="main-content">
          <h1>Resumen de tu cuenta</h1>
          <p class="game-like-info">
            Le diste me gusta al juego "<strong>{{ gameName }}</strong>"
          </p>
  
          <div class="card coins-card">
            <h4 class="text-center">¿Deseas comprar coins para este juego?</h4>
            <button @click="addCoins" class="btn btn-warning">
              <font-awesome-icon icon="coins" /> Agregar coins
            </button>
            <hr class="separator" />
            <h4 class="text-center">Cantidad de coins comprados</h4>
            <div class="progress-bar" :style="progressBarStyle">
              ${{ amountSpent }}
            </div>
            <p v-if="amountSpent === 50" class="max-message">
              Llegaste al máximo de tus créditos
            </p>
          </div>
  
          <div class="stats">
            <div class="stat-item yellow">
              <h3>% de finalización de juego</h3>
              <p>17% <font-awesome-icon icon="gamepad" /></p>
            </div>
            <div class="stat-item green">
              <h3>Logros en el juego</h3>
              <p>166 <font-awesome-icon icon="trophy" /></p>
            </div>
            <div class="stat-item blue">
              <h3>Recompensas</h3>
              <p>200 <font-awesome-icon icon="medal" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdminView",
    props: ["gameName"],
    data() {
      return {
        showAdminPanel: false,
        firstName: "",
        lastName: "",
        amountSpent: 0,
      };
    },
    computed: {
      fullName() {
        return `${this.firstName} ${this.lastName}`;
      },
      avatarUrl() {
        
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(
          this.fullName
        )}&background=random&color=fff`;
      },
      progressBarStyle() {
        let percentage = (this.amountSpent / 50) * 100;
        let color = "#28a745";
  
        if (this.amountSpent > 30) color = "#dc3545";
        else if (this.amountSpent > 20) color = "#ffc107";
  
        return {
          width: `${percentage}%`,
          backgroundColor: color,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        };
      },
    },
    methods: {
      promptUserData() {
        this.firstName = prompt("Por favor, ingrese su nombre:");
        if (this.firstName) {
          this.lastName = prompt("Por favor, ingrese su apellido:");
          if (this.lastName) {
            this.showAdminPanel = true;
          }
        }
      },
      addCoins() {
        if (this.amountSpent < 50) {
          this.amountSpent += 5;
        }
      },
    },
  };
  
  </script>
  
  <style scoped>
  .admin-view {
    display: flex;
    height: 100vh;
  }
  
  .login-prompt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  
  .admin-panel {
    display: flex;
    width: 100%;
  }
  
  .sidebar {
    width: 300px;
    background-color: #333;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .avatar img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  
  .game-like-info {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .game-like-info strong {
    font-weight: bold;
  }
  
  .main-content {
    flex-grow: 1;
    padding: 20px;
  }
  
  .card {
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .coins-card {
    text-align: center;
  }
  
  .coins-card h4 {
    margin-bottom: 15px;
  }
  
  .coins-card .btn {
    margin-bottom: 20px;
  }
  
  .separator {
    margin: 20px auto;
    width: 50%;
    border: none;
    border-top: 2px solid #ccc;
  }
  
  .progress-bar {
    width: 100%;
    height: 20px;
    background-color: #e9ecef;
    border-radius: 10px;
    margin-top: 10px;
    position: relative;
    font-weight: bold;
  }
  
  .max-message {
    color: #dc3545;
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
  }
  
  .stats {
    display: flex;
    justify-content: space-between;
  }
  
  .stat-item {
    flex-basis: 30%;
    padding: 20px;
    border-radius: 10px;
    color: white;
  }
  
  .yellow {
    background-color: #ffc107;
  }

  .green {
    background-color: #28a745;
  }

  .blue {
    background-color: #17a2b8;
  }
  
  .btn-warning {
    background-color: #ffc107;
    border: none;
    color: #333;
  }
  
  .avatar img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
  }
  </style>
  