import { defineStore } from "pinia";
import {api} from "@/api/api";

export const useCounterStore = defineStore("main", {
  state: () => ({
    imgs: [],
  }),
  //   getters: {
  //     doubleCount: (state) => {
  //       return state.counter * 2;
  //     },
  //   },
  actions: {
    getRandomAction() {
      api
        .getRandom()
        .then((res) => {
          console.log(res);
          this.imgs = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendRequest(payload) {
      api
        .searchRequest(payload)
        .then((res) => {
          console.log(res);
          this.imgs = res.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
