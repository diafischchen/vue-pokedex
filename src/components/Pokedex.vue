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
            // Prüfen ob Pokemon schon im Cache ist
            let cache = this.getFromPokemonCache(dexId)
            if (cache !== null && cache.length != 0) {
                this.$store.commit('addPokemon', cache[0])
            } else {
                await this.fetchPokemon(dexId)
            }
        },
        async fetchPokemon(dexId) {
            // HTTP Request
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${dexId}`)
                .then((response) => {
                    // Pokemon Objekt bauen
                    let types = [response.data.types[0].type.name]
                    if (response.data.types[1]) {
                        types.push(response.data.types[1].type.name)
                    }
                    let pokemonObj = {
                        id: response.data.id,
                        species: response.data.name,
                        type: types,
                        sprite: response.data.sprites.other['official-artwork'].front_default
                    }

                    // In den Store schieben und abspeichern
                    this.putInPokemonCache(pokemonObj)
                    this.$store.commit('addPokemon', pokemonObj)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        async getPokemonAmount(amount) {
            for (let i = 1; i <= amount; i++) {
                await this.getPokemon(i)
            }
        },
        putInPokemonCache(pokemonObj) {
            // Pokemon Cache auslesen
            let pokemonCacheJson = this.getPokemonCacheJson();

            // Array mit dem neuen Pokemon Objekt zusammenfügen
            if (pokemonCacheJson) {
                pokemonCacheJson.push(pokemonObj)
            } else {
                pokemonCacheJson = [pokemonObj]
            }

            // Als String abspeichern
            localStorage.setItem('pokemonCache', JSON.stringify(pokemonCacheJson))
        },
        getFromPokemonCache(dexId) {
            // Pokemon Cache auslesen
            let pokemonCacheJson = this.getPokemonCacheJson();

            // Array Filtern
            if (pokemonCacheJson) {
                pokemonCacheJson = pokemonCacheJson.filter((pokemon) => pokemon.id == dexId)
            }

            return pokemonCacheJson
        },
        getPokemonCacheJson() {
            // Pokemon Cache auslesen
            let pokemonCache = localStorage.getItem('pokemonCache')
            if (pokemonCache === null) {
                pokemonCache = 'null'
            }

            // String in ein Array umwandeln
            return JSON.parse(pokemonCache)
        }
    },

    async created() {
        await this.getPokemonAmount(898);
    }
}
</script>

<style scoped>

</style>