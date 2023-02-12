// import BaseApi from "@/api";
import Vue from "vue";
import axios from "axios";

const baseURL = process.env.BASE_API_URL || "https://api.unsplash.com/";

// Aplication
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// const token = Vue.cookie.get("token");

// if (token) {
//   headers["Authorization"] = `Token ${token}`;
// }

const instance = axios.create({
  baseURL,
  headers,
});

export { instance };
