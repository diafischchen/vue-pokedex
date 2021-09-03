<template>
    <div class="md:p-6 p-4">
        <h1 class="text-center font-bold text-blue-600 md:text-xl text-base">Filter Options:</h1>

        <div class="md:mt-8 mt-4 md:text-base text-sm">
            <label for="select-type-1">Type 1:</label>
            <select id="select-type-1" class="md:px-3 md:py-2 md:text-base px-2 py-1 text-sm w-full mt-2 border-blue-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600" v-model="typeQuery1" @change="search">
                <option value="any">any</option>
                <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
            </select>
        </div>

        <div class="md:mt-6 mt-2 md:text-base text-sm">
            <label for="select-type-2" class="mt-40">Type 2:</label>
            <select id="select-type-2" class="md:px-3 md:py-2 md:text-base px-2 py-1 text-sm w-full mt-2 border-blue-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600" v-model="typeQuery2" @change="search">
                <option value="any">any</option>
                <option value="none">none</option>
                <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            typeQuery1: 'any',
            typeQuery2: 'any'
        }
    },

    computed: {
        types() {
            return this.$store.state.types
        }
    },

    methods: {
        search() {
            this.$store.commit('typeSearch', [this.typeQuery1, this.typeQuery2])
        }
    }
}
</script>

<style scoped>

</style>