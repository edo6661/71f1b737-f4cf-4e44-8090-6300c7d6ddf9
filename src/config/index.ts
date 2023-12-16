import axios from "axios";

export const axiosAku = axios.create({
  baseURL: "https://dummyjson.com/products/",
});
