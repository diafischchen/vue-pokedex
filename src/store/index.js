import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      pokemon: [
        {
          species: 'bulbasaur',
          type: ['grass', 'poison'],
          sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        },
        {
          species: 'charmander',
          type: ['fire'],
          sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
        },
        {
          species: 'squirtle',
          type: ['water'],
          sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
        }
      ]
    }
  }
})
