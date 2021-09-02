<template>
    <div class="content bg-gray-100 py-6">
        <h1 class="text-center text-2xl text-blue-500 font-bold">Vue Pokedex</h1>
        <p class="mt-4 text-gray-800 text-center">Kleines aber feines Vue Projekt</p>
        <div class="pokedex grid grid-cols-3 m-6 gap-6">
            <Pokemon v-for="pokemon in pokemonArr" :key="pokemon.id" :species="pokemon.species" :type="pokemon.type" :sprite="pokemon.sprite" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Pokemon from './Pokemon.vue'

export default {
    components: {
        Pokemon
    },
    setup() {

    },
    computed: {
        pokemonArr() {
            return this.$store.state.pokemon
        }
    },
    methods: {
        async getPokemon(dexId) {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${dexId}`)
                .then((response) => {

                    let types = [response.data.types[0].type.name]
                    if (response.data.types[1]) {
                        types.push(response.data.types[1].type.name)
                    }

                    this.$store.commit('addPokemon', {
                        id: response.data.id,
                        species: response.data.name,
                        type: types,
                        sprite: response.data.sprites.other['official-artwork'].front_default
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        async getPokemonAmount(amount) {
            for (let i = 1; i <= amount; i++) {
                await this.getPokemon(i)
            }
        }
    },
    async created() {
        await this.getPokemonAmount(10);
    }
}
</script>

<style scoped>

</style>