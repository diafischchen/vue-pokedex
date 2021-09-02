<template>
  <div class="grid grid-cols-6 bg-gray-200">
    <div class="col-span-1 h-screen overflow-auto bg-white shadow-xl z-20 relative">
      <Sidebar />
    </div>
    <div class="col-span-5 h-screen overflow-auto z-10 relative">
      <Pokedex />
    </div>
  </div>
</template>

<script>
import Pokedex from './components/Pokedex.vue'
import Sidebar from './components/Sidebar.vue'
import AOS from 'aos'

export default {
  name: 'App',
  components: {
    Pokedex,
    Sidebar
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
