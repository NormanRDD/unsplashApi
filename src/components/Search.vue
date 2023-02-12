<template>
  <div class="search">
    <div class="search__container">
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
</template>
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs, mapActions } from "pinia";
import { useCounterStore } from "../store/images";
import api from "../api/api";


const searchData = ref("");

const stateImgs = useCounterStore();
const { imgs } = storeToRefs(stateImgs);
const { sendRequest } = stateImgs;
</script>
<style scoped lang="scss">
.search {
  background: url("../assets/images/background.png");
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
    max-width: min-content;
    max-height: min-content;
    position: relative;
    input {
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
