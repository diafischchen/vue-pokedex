import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      pokemon: [],
      types: [
        'normal',
        'fire',
        'water',
        'electric',
        'grass',
        'ice',
        'fighting',
        'poison',
        'ground',
        'flying',
        'psychic',
        'bug',
        'rock',
        'ghost',
        'dragon',
        'dark',
        'steel',
        'fairy'
      ],
      search: '',
      searchType1: 'any',
      searchType2: 'any'
    }
  },
  mutations: {
    addPokemon(state, obj) {
      state.pokemon.push(obj)
    },
    searchQuery(state, query) {
      state.search = query.toLowerCase()
    },
    typeSearch(state, query) {
      state.searchType1 = query[0]
      state.searchType2 = query[1]
    }
  },
  getters: {
    filteredPokemon(state) {
      let value = state.pokemon.filter((pokemon) => {
        if (pokemon.species.indexOf(state.search) > -1) {
          return true
        } else {
          return false
        }
      })

      value = value.filter((pokemon) => {
        if (state.searchType1 != 'any') {
          if (pokemon.type[0] == state.searchType1) {
            return true
          } else {
            return false
          }
        } else {
          return true
        }
      })

      value = value.filter((pokemon) => {
        if (state.searchType2 != 'any') {
          if (pokemon.type[1]) {
            if (state.searchType2 == 'none') {
              return false
            } else {
              if (state.searchType2 == pokemon.type[1]) {
                return true
              } else {
                return false
              }
            }
          } else {
            if (state.searchType2 == 'none') {
              return true
            } else {
              return false
            }
          }
        } else {
          return true
        }
      })

      return value
    }
  }
})
