<template>
    <div class="md:py-6 md:px-10 px-6 py-4 md:flex md:justify-between md:items-center">
        <div class="hidden md:block">
            <input @keyup="search" type="text" placeholder="Filter by Name" v-model="query" class=" 2xl:w-96 border-blue-800 rounded-lg shadow-sm focus:ring-2 focus:ring-white" />
        </div>
        <div class="md:text-right text-center">
            <h1 class="md:text-2xl text-blue-50 font-bold"><span class="text-sm font-light">0.1.1</span> Vue Pokédex</h1>
            <p class="text-blue-300 hidden md:inline">Made with Vue, Tailwind, PokeAPI and Love by diafischchen</p>
        </div>
        <div class="md:hidden">
            <input @keyup="search" type="text" placeholder="Filter by Name" v-model="query" class="mt-2 px-2 py-1 text-sm border-blue-800 rounded-lg shadow-sm focus:ring-2 focus:ring-white w-full" />
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