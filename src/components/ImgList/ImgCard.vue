<template>
  <div class="imgCard">
    <img :src="image.urls.small_s3" alt="" />
  </div>
</template>
<script setup lang="ts">
import { defineProps, reactive } from "vue";
</script>
<style lang="scss" scoped>
.imgCard {
  margin: 10px;
  @media (max-width: 800px) {
    // margin: 10px 0px;
    img {
      max-width: unset;
      height: unset;
    }
  }
  img {
    height: 453px;
    width: 100%;
    object-fit: fill;
    max-width: 473.72px;
    border-radius: 8px;
  }
}
</style>
