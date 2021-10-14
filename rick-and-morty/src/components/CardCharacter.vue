<template>
  <div class="character">
    <div class="character__info">
      <h1>{{ character.name }}</h1>
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