import axiosClient from "./axiosClient";

const URL_PRODUCTS = '/products';
const URL_CATEGORIES = '/categories';

const pizzdeeApi = {
  getLatestProducts : (params) => {
    return axiosClient.get(URL_PRODUCTS, params);
  },
  getCategories: (params) => {
    return axiosClient.get(URL_CATEGORIES, params);
  }
};

export default pizzdeeApi;