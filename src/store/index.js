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
      state.search = query.toLowerCase()
    }
  },
  getters: {
    filteredPokemon(state) {
      return state.pokemon.filter((pokemon) => {
        if (pokemon.species.indexOf(state.search) > -1) {
          return true
        } else {
          return false
        }
      })
    }
  }
})
