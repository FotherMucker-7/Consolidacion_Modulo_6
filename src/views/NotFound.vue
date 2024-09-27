<template>
  <div class="not-found text-center">
    <img src="@/assets/not-found0.png" alt="Error 404" class="error-image" />

    <router-link to="/" class="btn btn-primary mt-3">Volver al Inicio</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
}

.error-image {
  width: 80%;
  max-width: 800px;
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
