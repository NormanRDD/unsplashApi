<template>
  <div class="header">
    <div class="header__nav">
      <div class="header__left">
        <img src="@/assets/icons/logo.svg" alt="" />
      </div>
      <div class="header__right">
        <img src="@/assets/icons/heart.svg" alt="" />
        <p class="header__caption">Избранное</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  &__nav {
    padding: 0 220px;
    padding-top: 37px;
    height: 148px;
    background: #000000;
    display: flex;
    justify-content: space-between;
  }
  &__left {
    img {
      width: 100%;
      max-width: 185px;
    }
  }
  &__caption {
    margin-left: 10px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
  &__right {
    display: flex;
    img {
      width: 23px;
      height: 21px;
    }
  }
}
</style>
