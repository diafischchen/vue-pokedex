import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      pokemon: [],
      search: ''
    }
  },
  mutations: {
    addPokemon(state, obj) {
      state.pokemon.push(obj)
    },
    searchQuery(state, query) {
      state.search = query
    }
  }
})
