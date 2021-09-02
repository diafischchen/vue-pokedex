<template>
  <Pokedex />
</template>

<script>
import Pokedex from './components/Pokedex.vue'
import AOS from 'aos'

export default {
  name: 'App',
  components: {
    Pokedex
  },
  created() {
    AOS.init({
      once: true
    })
  }
}
</script>

<style>

</style>
