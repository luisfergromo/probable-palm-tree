<template>
  <section>
    <div class="characters">
      <div
        class="characters_item"
        v-for="character in characters"
        :key="character.id"
      >
<<<<<<< HEAD
        <CardCharacter />
=======
        {{ character.name }}
>>>>>>> 9f187ea9cb6c461139d5c5c70e3b10eafe9c2dce
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
<<<<<<< HEAD
import CardCharacter from "../components/CardCharacter.vue";
export default {
  componets: {
    CardCharacter,
  },
=======
export default {
>>>>>>> 9f187ea9cb6c461139d5c5c70e3b10eafe9c2dce
  setup() {
    const store = useStore();
    const characters = computed(() => {
      return store.state.charactersFilter;
    });
    onMounted(() => {
      store.dispatch("getCharacters");
    });
    return {
      characters,
    };
  },
};
</script>
<<<<<<< HEAD
=======

>>>>>>> 9f187ea9cb6c461139d5c5c70e3b10eafe9c2dce
<style>
</style>