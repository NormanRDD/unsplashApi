<template>
  <div class="imgCard">
    <img :src="image.urls.small" alt="" />
  </div>
</template>
<script setup lang="ts">
import { defineProps, reactive } from "vue";

const props = defineProps({
  image: String,
});
</script>
<style lang="scss" scoped>
.imgCard {
    margin: 23px;
  img {
    height: 453px;
    width: 100%;
    max-width: 473.72px;
    border-radius: 8px;
  }
}
</style>
