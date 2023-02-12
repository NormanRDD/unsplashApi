<template>
  <div class="header">
    <div class="header__nav">
      <div class="header__left">
        <router-link :to="'/'">
          <img src="@/assets/icons/logo.svg" alt="" />
        </router-link>
      </div>
      <div class="header__right">
        <div v-if="route.path !== '/'" class="header__searchIcon">
          <router-link :to="'/'">
            <img src="@/assets/icons/blackSearch.svg" alt="" />
            <p class="header__caption">Поиск</p>
          </router-link>
        </div>
        <router-link :to="'/favorites'">
          <img src="@/assets/icons/heart.svg" alt="" />
          <p class="header__caption">Избранное</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped lang="scss">
.header {
  &__nav {
    @media (max-width: 1200px) {
      padding: 0 20px;
    }
    padding: 0 100px;
    padding-top: 37px;
    height: 148px;
    background: #000000;
    display: flex;
    justify-content: space-between;
  }
  &__left {
    margin-right: 10px;
    img {
      width: 100%;
      max-width: 185px;
    }
  }
  &__searchIcon {
    display: flex;
    margin-right: 38px;
  }
  &__caption {
    @media (max-width: 600px) {
      display: none;
    }
    margin-left: 10px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
  &__right {
    padding-top: 20px;
    display: flex;
    a {
      display: flex;
    }
    img {
      width: 23px;
      height: 21px;
    }
  }
}
</style>
