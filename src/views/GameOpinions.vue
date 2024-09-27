<template>
  <div class="game-opinions container py-5">
    <h1 class="text-center mb-5">Opiniones sobre {{ gameName }}</h1>

    <div class="card mb-5">
      <div class="card-body">
        <h5 class="card-title">{{ isEditing ? 'Editar opinión' : 'Deja tu opinión' }}</h5>
        <div class="mb-3">
          <label for="authorName" class="form-label">Tu nombre:</label>
          <input type="text" class="form-control" id="authorName" v-model="newOpinion.author">
        </div>
        <div class="mb-3">
          <label for="opinionContent" class="form-label">Tu opinión:</label>
          <textarea class="form-control" id="opinionContent" rows="3" v-model="newOpinion.content"></textarea>
        </div>
        <button class="btn btn-primary" @click="submitOpinion">{{ isEditing ? 'Actualizar' : 'Agregar' }}</button>
        <button v-if="isEditing" class="btn btn-secondary ms-2" @click="cancelEdit">Cancelar</button>
      </div>
    </div>

    <h2 class="text-center mt-5 mb-4">Opiniones de la comunidad</h2>

    <div v-if="opinions.length === 0" class="alert alert-info">
      No hay opiniones para mostrar.
    </div>

    <div v-else>
      <div class="card mb-4" v-for="(opinion, index) in opinions" :key="index">
        <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h5 class="mb-0">{{ opinion.author }}</h5>
          <font-awesome-icon 
            icon="chevron-down" 
            @click="toggleOpinion(index)" 
            class="toggle-icon"
            :class="{ 'rotate': showOpinions[index] }"
          />
        </div>
        <div v-show="showOpinions[index]" class="card-body bg-light">
          <p class="card-text">{{ opinion.content }}</p>
        </div>
        <div class="card-footer bg-white d-flex justify-content-end">
          <button class="btn btn-sm btn-primary me-2" @click="editOpinion(index)">
            <font-awesome-icon icon="pen" class="me-1" /> Editar
          </button>
          <button class="btn btn-sm btn-danger" @click="deleteOpinion(index)">
            <font-awesome-icon icon="trash" class="me-1" /> Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'GameOpinions',
  data() {
    return {
      newOpinion: {
        author: '',
        content: ''
      },
      isEditing: false,
      editingIndex: -1,
      showOpinions: []
    };
  },
  computed: {
    ...mapGetters('opinions', ['getOpinions']),
    gameName() {
      return this.$route.params.gameName;
    },
    opinions() {
      return this.getOpinions(this.gameName);
    }
  },
  methods: {
    submitOpinion() {
      if (this.isEditing) {
        this.$store.dispatch('opinions/updateOpinion', {
          gameName: this.gameName,
          index: this.editingIndex,
          opinion: this.newOpinion
        });
        this.isEditing = false;
        this.editingIndex = -1;
      } else {
        this.$store.dispatch('opinions/addOpinion', {
          gameName: this.gameName,
          opinion: this.newOpinion
        });
      }
      this.newOpinion = { author: '', content: '' };
      this.resetShowOpinions();
    },
    editOpinion(index) {
      this.isEditing = true;
      this.editingIndex = index;
      this.newOpinion = { ...this.opinions[index] };
    },
    deleteOpinion(index) {
      this.$store.dispatch('opinions/removeOpinion', {
        gameName: this.gameName,
        index: index
      });
      this.resetShowOpinions();
    },
    cancelEdit() {
      this.isEditing = false;
      this.editingIndex = -1;
      this.newOpinion = { author: '', content: '' };
    },
    toggleOpinion(index) {
      this.$set(this.showOpinions, index, !this.showOpinions[index]);
    },
    resetShowOpinions() {
      this.showOpinions = new Array(this.opinions.length).fill(false);
    }
  },
  mounted() {
    this.resetShowOpinions();
  }
};

</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.card-header {
  border-radius: 10px 10px 0 0;
}

.btn {
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-danger:hover {
  background-color: #c82333;
}

.toggle-icon {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.toggle-icon.rotate {
  transform: rotate(180deg);
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
  max-height: 1000px;
  opacity: 1;
}

.fade-enter, .fade-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
</style>