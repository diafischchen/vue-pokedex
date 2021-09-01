<template>
    <div class="content bg-gray-100 py-6">
        <h1 class="text-center text-2xl text-blue-500 font-bold">Vue Pokedex</h1>
        <p class="mt-4 text-gray-800 text-center">Kleines aber feines Vue Projekt</p>
        <div class="pokedex grid grid-cols-3 mt-6">
            <Pokemon species="Bisasam" type="grass" />
            <Pokemon species="Glumanda" type="fire" />
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