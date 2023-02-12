<template>
  <div class="currentImg">
    <div class="currentImg__container">
      <div class="currentImg__header">
        <div v-if="img.user" class="currentImg__author">
          <img :src="img.user.profile_image.small" alt="" />
          <div class="currentImg__info">
            <h2 class="currentImg__name">{{ img.user.name }}</h2>
            <p class="currentImg__login">@{{ img.user.username }}</p>
          </div>
        </div>
        <div class="currentImg__btns">
          <div class="currentImg__heart" :class="{ isActive: add }">
            <!-- <img
             
              src="@/assets/icons/current/heart.svg"
              alt=""
            /> -->
            <heartSvg @click="addSwitch" />
          </div>
          <div class="currentImg__download">
            <img src="@/assets/icons/current/download.svg" alt="" />
            <p>Download</p>
          </div>
        </div>
      </div>
      <!-- {{img.urls.full}} -->
      <div v-if="img.urls" class="currentImg__mainImage">
        <img :src="img.urls.full" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useImgStore } from "../store/images";
import { onMounted } from "vue";
import { ref } from "vue";
import heartSvg from "@/components/icons/current/heart.vue";
let add = ref(false);

const route = useRoute();
const stateImgs = useImgStore();
const { img } = storeToRefs(stateImgs);
const { getByIdAction, addToFavs } = stateImgs;

onMounted(() => {
  getByIdAction(route.params.id);
});
function addSwitch() {
  if (add.value === true) {
    add.value = false;
    addToFavs(false);
  } else {
    add.value = true;
    // console.log(img.value.color)
    addToFavs(img.value);
  }
}
</script>
<style lang="scss" scoped>
.currentImg {
  background: url("../assets/images/current/background.png");
  width: 100%;
  max-width: 1920px;
  height: 474px;
  backdrop-filter: blur(4px);
  background-size: contain;

  &__container {
    height: 150vh;
    margin: 0 100px;
    @media (max-width: 1200px) {
      margin: 0 20px;
    }
    padding-top: 50px;
  }
  &__info {
    text-align: left;
  }
  &__name,
  &__login {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 35px;
    color: #f2f2f2;
  }
  &__heart.isActive {
    background-color: red;
    svg {
      fill: white;
      path {
      }
    }
  }
  &__heart {
    text-align: center;
    align-items: center;
    width: 49.07px;
    height: 49.07px;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding-top: 14px;
  }
  &__download {
    margin-left: 10px;
    p {
      position: relative;
      bottom: 10px;
    }
    img {
      top: 11px;
      left: 10px;
      position: relative;
    }
    font-family: sans-serif;
    width: 206.25px;
    height: 49.62px;
    background: #fff200;
    border: 1px solid #fff200;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
  &__name {
    font-size: 25px;
  }
  &__author {
    img {
      margin: 5px 10px 40px 0;
      width: 55px;
      height: 55px;
      border: 1px solid #ffffff;
      border-radius: 8px;
    }
  }
  &__mainImage {
    img {
      width: 100%;
      max-width: 1452px;
      height: 744px;
      object-fit: cover;
      @media (max-width: 800px) {
        object-fit: contain;
      }
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    @media (max-width: 550px) {
      display: block;
    }
  }
  &__author {
    display: flex;
  }
  &__btns {
    display: flex;
  }
}
</style>
