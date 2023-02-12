<template>
  <div class="favs">
    <div class="favs__container">
      <h2 class="favs__header">Избранное</h2>
      <div class="favs__imgs">
        <div v-for="img in favorites" :key="img"></div>
        <ImgCard :image="img.urls.regular" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useImgStore } from "../store/images";
import ImgCard from "../components/ImgList/ImgCard.vue";
import { onMounted } from "vue";

const stateImgs = useImgStore();
const { favorites } = storeToRefs(stateImgs);
</script>
<style lang="scss" scoped>
.favs {
  .imgCard img {
    width: unset;
    max-width: unset;
  }
  &__header {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    @media (max-width: 801px) {
      font-size: 35px;
    }
    font-size: 72px;
    line-height: 84px;
    text-align: center;
    color: #000000;
  }
  &__container {
    @media (max-width: 1201px) {
      margin: 0 20px;
    }
    margin: 0 100px;
  }
  &__imgs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 20px 0px;
    @media (max-width: 1201px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 701px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
