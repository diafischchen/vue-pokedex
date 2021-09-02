<template>
    <div class="content bg-gray-100 py-6">
        <h1 class="text-center text-2xl text-blue-500 font-bold">Vue Pokedex</h1>
        <p class="mt-4 text-gray-800 text-center">Kleines aber feines Vue Projekt</p>
        <div class="pokedex grid grid-cols-3 m-6 gap-6">
            <Pokemon :stateKey="0" />
            <Pokemon :stateKey="1" />
            <Pokemon :stateKey="2" />
        </div>
    </div>
</template>

<script>
import Pokemon from './Pokemon.vue'

export default {
    components: {
        Pokemon
    },
    setup() {
        
    },
}
</script>

<style scoped>

</style>