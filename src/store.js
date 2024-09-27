import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const opinionsModule = {
  namespaced: true,
  state: {
    opinions: {}
  },
  mutations: {
    ADD_OPINION(state, { gameName, opinion }) {
      if (!state.opinions[gameName]) {
        Vue.set(state.opinions, gameName, [])
      }
      state.opinions[gameName].push(opinion)
    },
    UPDATE_OPINION(state, { gameName, index, opinion }) {
      Vue.set(state.opinions[gameName], index, opinion)
    },
    REMOVE_OPINION(state, { gameName, index }) {
      state.opinions[gameName].splice(index, 1)
    }
  },
  actions: {
    addOpinion({ commit }, { gameName, opinion }) {
      commit('ADD_OPINION', { gameName, opinion })
    },
    updateOpinion({ commit }, { gameName, index, opinion }) {
      commit('UPDATE_OPINION', { gameName, index, opinion })
    },
    removeOpinion({ commit }, { gameName, index }) {
      commit('REMOVE_OPINION', { gameName, index })
    }
  },
  getters: {
    getOpinions: (state) => (gameName) => state.opinions[gameName] || []
  }
}

export default new Vuex.Store({
  modules: {
    opinions: opinionsModule
  }
})