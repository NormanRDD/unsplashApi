<template>
  <div class="imgList">
    <div class="imgList__container">
      <div v-for="img in imgs" :key="img" class="ImgCard__wrapper">
        <router-link :to="`/${img.id}`">
          <ImgCard :image="img.urls.small_s3" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs, mapActions } from "pinia";
import { useImgStore } from "../../store/images";
import ImgCard from "./ImgCard.vue";
import { onMounted } from "vue";

const stateImgs = useImgStore();
const { imgs } = storeToRefs(stateImgs);
const { getRandomAction } = stateImgs;

onMounted(() => {
  getRandomAction();
});
</script>
<style lang="scss" scoped>
.ImgCard {
  &__wrapper {
    @media (min-width: 800px) {
      margin: 0 12px;
    }
  }
}
.imgList {
  &__container {
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 800px) {
      grid-template-columns: repeat(1, 1fr);
    }
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 122px 20px;
  }
}
</style>
