<template>
  <div class="search">
    <div class="search__container">
      <div class="search__wrapper">
        <div class="search__input">
          <form @submit.prevent="sendRequest(searchData)">
            <input v-model="searchData" placeholder="Поиск" type="text" />
            <div class="search__icon">
              <img
                @click="sendRequest(searchData)"
                src="../assets/icons/searchIcon.svg"
                alt=""
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs, mapActions } from "pinia";
import { useImgStore } from "../store/images";
import api from "../api/api";

const searchData = ref("");

const stateImgs = useImgStore();
const { imgs } = storeToRefs(stateImgs);
const { sendRequest } = stateImgs;
</script>
<style scoped lang="scss">
.search {
  background: url("../assets/images/background.png");
  &__wrapper {
    @media (max-width: 1200px) {
      margin: 0 20px;
    }
  }
  &__container {
    height: 253px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &__icon {
    position: absolute;
    right: 23px;
    bottom: 20px;
  }
  &__input {
    padding-top: 92px;
    align-items: center;
    margin: 0 auto;
    @media (min-width: 1201px) {
      max-width: min-content;
      max-height: min-content;
    }
    @media (max-width: 1200px) {
      max-width: 466px;
      margin: 0 auto;
    }
    position: relative;
    input {
      @media (max-width: 1200px) {
        width: 100%;
      }
      width: 866px;
      height: 70px;
      padding-left: 39px;
      background: #ffffff;
      font-family: sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      color: #000000;
    }
  }
}
</style>
