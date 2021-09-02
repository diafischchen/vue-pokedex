<template>
    <div class="py-6 px-10 flex justify-between items-center">
        <div>
            <input @keyup="search" placeholder="Filter by Name" v-model="query" />
        </div>
        <div class="text-right">
            <h1 class="text-2xl text-blue-50 font-bold">Vue Pokedex</h1>
            <p class="text-blue-300">Made with Vue, Tailwind, PokeAPI and Love by diafischchen</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: ''
        }
    },

    methods: {
        search() {
            this.$store.commit('searchQuery', this.query)
        }
    }
}
</script>

<style scoped>

</style>