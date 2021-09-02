<template>
    <div><h1>House is the Religion</h1></div>
    <div>{{ search }}</div>
</template>

<script>
export default {
    setup() {
        
    },

    computed: {
        search() {
            return this.$store.state.search
        }
    }
}
</script>

<style scoped>

</style>