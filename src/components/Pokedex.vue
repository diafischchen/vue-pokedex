<template>
    <div class="content">
        <div class="z-20 bg-blue-600 shadow-lg">
            <Menu />
        </div>
        <div class="pokedex grid grid-cols-3 m-6 gap-6 z-10">
            <Pokemon v-for="pokemon in pokemonArr" :key="pokemon.id" :species="pokemon.species" :type="pokemon.type" :sprite="pokemon.sprite" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Pokemon from './Pokemon.vue'
import Menu from './Menu.vue'

export default {
    components: {
        Pokemon,
        Menu
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
        await this.getPokemonAmount(151);
    }
}
</script>

<style scoped>

</style>