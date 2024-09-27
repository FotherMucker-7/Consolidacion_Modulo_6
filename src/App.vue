<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img :src="require('@/assets/logo.png')" alt="Logo" class="navbar-logo" />
          <span class="ms-2">Game Opinion</span>
          <font-awesome-icon icon="gamepad" class="ms-2" />
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/" active-class="active">
                <font-awesome-icon icon="house" class="me-1 text-light" />
                <span class="text-light">Home</span>
              </router-link>
            </li>            
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <router-view></router-view>
      </transition>
    </main>

    <footer class="bg-dark text-light py-4 mt-5">
      <div class="container text-center">
        <p>&copy; 2024 Games Opinion. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.animate__animated.animate__fadeIn {
  --animate-duration: .5s;
}

.animate__animated.animate__fadeOut {
  --animate-duration: .5s;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
  padding: 0;
}

.navbar {
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-logo {
  height: 40px;
  width: auto;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}

main {
  flex-grow: 1;
}

.nav-link {
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #ffc107 !important;
}

footer {
  margin-top: auto;
}
</style>
