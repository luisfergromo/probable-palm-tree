<template>
  <div class="character">
    <img :src="character.image" :alt="character.name" />
    <div class="character__info">
      <h3>{{ character.name }}</h3>
      <div class="status">
        <span></span>
        <span>{{ character.status }} - {{ character.specie }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
};
</script>

<style>
</style>