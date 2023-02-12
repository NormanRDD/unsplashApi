import { defineStore } from "pinia";
import api from "@/api/api";

// interface MyObject {
//   img: {};
// }
interface MyFavs {
  img: string;
}
// const arr: Array<MyObject> = [];

export const useImgStore = defineStore("main", {
  state: () => ({
    imgs: [],
    img: {},
    favorites: [] as MyFavs[],
  }),
  actions: {
    addToFavs(image) {
      this.favorites.push(image.urls.regular);
      // this.favorites.push(this.img);
    },
    getByIdAction(id) {
      api
        .getById(id)
        .then((res) => {
          console.log(res);
          this.img = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
