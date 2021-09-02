<template>
    <div class="pokemon p-6 rounded-lg shadow-lg" data-aos="zoom-in" :class="type[0]">
        <h1 class="uppercase font-bold tracking-wider">{{ species }}</h1>
        <p class="uppercase font-semibold tracking-wider">{{ type[0] }} <span v-if="type[1]">/ {{ type[1] }}</span></p>
        <img class="w-full" :src="sprite" />
    </div>
</template>

<script>
export default {
    props: {
        species: String,
        type: Array,
        sprite: String
    },

    setup() {

    }
}
</script>

<style scoped>

.pokemon {
    --font-light: #F3F4F6;
    --font-dark: #1F2937;

    --normal: #A8A77A;
    --fire: #EE8130;
    --water: #6390F0;
    --electric: #F7D02C;
    --grass: #7AC74C;
    --ice: #96D9D6;
    --fighting: #C22E28;
    --poison: #A33EA1;
    --ground: #E2BF65;
    --flying: #A98FF3;
    --psychic: #F95587;
    --bug: #A6B91A;
    --rock: #B6A136;
    --ghost: #735797;
    --dragon: #6F35FC;
    --dark: #705746;
    --steel: #B7B7CE;
    --fairy: #D685AD;
}

.normal {
    background-color: var(--normal);
    color: var(--font-dark);
}

.fire {
    background-color: var(--fire);
    color: var(--font-dark);
}

.water {
    background-color: var(--water);
    color: var(--font-dark);
}

.electric {
    background-color: var(--electric);
    color: var(--font-dark);
}

.grass {
    background-color: var(--grass);
    color: var(--font-dark);
}

.ice {
    background-color: var(--ice);
    color: var(--font-dark);
}

.fighting {
    background-color: var(--fighting);
    color: var(--font-light);
}

.poison {
    background-color: var(--poison);
    color: var(--font-light);
}

.ground {
    background-color: var(--ground);
    color: var(--font-dark);
}

.flying {
    background-color: var(--flying);
    color: var(--font-dark);
}

.psychic {
    background-color: var(--psychic);
    color: var(--font-dark);
}

.bug {
    background-color: var(--bug);
    color: var(--font-dark);
}

.rock {
    background-color: var(--rock);
    color: var(--font-light);
}

.ghost {
    background-color: var(--ghost);
    color: var(--font-light);
}

.dragon {
    background-color: var(--dragon);
    color: var(--font-light);
}

.dark {
    background-color: var(--dark);
    color: var(--font-light);
}

.steel {
    background-color: var(--steel);
    color: var(--font-dark);
}

.fairy {
    background-color: var(--fairy);
    color: var(--font-dark);
}

.fade-in-enter-active {
    transition: opacity .5s ease-in-out, transform .5s ease-in-out;
}

.fade-in-enter-from {
    opacity: 0;
    transform: scale(0);
}

</style>