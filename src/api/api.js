import { instance } from "@/plugins/axios";
const clienId = "A3bgwzO64v6lsr1AjI956fkhVlFSHjAyqLbsq4SvanE";

const endpoints = {
  // REGISTRATION
  search: "/search/photos",
  getRandom: "/photos/random",
  getById: "/photos/",
};
const api = {
  async getById(id) {
    const response = await instance.get(
      endpoints.getById + `${id}?client_id=${clienId}`
    );
    return response.data;
  },
  async getRandom() {
    const response = await instance.get(
      endpoints.getRandom + `?count=8&client_id=${clienId}`
    );
    return response.data;
  },
  async searchRequest(data) {
    const response = await instance.get(
      endpoints.search + `?query=${data}&client_id=${clienId}`
    );
    return response.data;
  },
};
export default api;
