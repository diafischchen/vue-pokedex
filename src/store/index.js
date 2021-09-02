import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      pokemon: []
    }
  },
  mutations: {
    addPokemon(state, obj) {
      state.pokemon.push(obj)
    }
  }
})
