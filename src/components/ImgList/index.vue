<template>
  <div class="imgList">
    <div class="imgList__container">
      <div v-for="img in imgs" :key="img" class="ImgCard__wrapper">
        <ImgCard :image="img" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs, mapActions } from "pinia";
import { useCounterStore } from "../../store/images";
import ImgCard from "./ImgCard.vue";
import { onMounted } from "vue";

const stateImgs = useCounterStore();
const { imgs } = storeToRefs(stateImgs);
const { getRandomAction } = stateImgs;

onMounted(() => {
  getRandomAction();
});
</script>
<style lang="scss" scoped>
.ImgCard {
  &__wrapper {
    margin: 0 12px;
  }
}
.imgList {
  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 122px 20px;
  }
}
</style>
