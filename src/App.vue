<template>
  <div id="nav">
    <Header />
    <router-view />
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/Header.vue";
import { storeToRefs, mapActions } from "pinia";
import { useCounterStore } from "./store/counter";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
