<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <h3>{{ name }}</h3>
    <h2>{{ counter }}</h2>
    <h3>{{ doubleCount }}</h3>
    <button @click="add(20)">click me</button>
    <button @click="reset">reset</button>
    <button @click="clear ">clear</button>
    <!-- <button @click="main.addOne"></button> -->
    <!-- <button @click="addOne"></button> -->
  </div>
  <router-view />
</template>
<script setup lang="ts">
import { storeToRefs, mapActions } from "pinia";
import { useCounterStore } from "./store/counter";
const main = useCounterStore();
const { counter, name, doubleCount } = storeToRefs(main);
const { addOne, reset } = main;
// const { addOne } = mapActions(useCounterStore, ["addOne"]);

function add(value: number) {
  main.$patch({
    counter: counter.value + value,
  });
}

main.$subscribe((mutation, state) => {
  console.log("mutation", mutation);
  console.log("state", state);
});

// function reset() {
//   main.$reset();
// }

function clear() {
  main.$state = { counter: 123, name: "bob" };
}

// export default {
//   setup() {

//   },
// };
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
