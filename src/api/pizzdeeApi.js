import axiosClient from "./axiosClient";

export const URL_PRODUCTS = '/products';

const pizzdeeApi = {
  getLatestProducts : (params) => {
    const url = `${URL_PRODUCTS}`;
    
    return axiosClient.get(url, params);
  }
};

export default pizzdeeApi;