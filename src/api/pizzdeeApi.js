import axiosClient from './axiosClient';

const URL_PRODUCTS = '/products';
const URL_CATEGORIES = '/categories';
const URL_RATINGS = '/ratings';

const pizzdeeApi = {
	getLatestProducts: (params) => {
		return axiosClient.get(URL_PRODUCTS, params);
	},
	getCategories: (params) => {
		return axiosClient.get(URL_CATEGORIES, params);
	},
  getRatings: (params) => {
    return axiosClient.get(URL_RATINGS, params);
  }
};

export default pizzdeeApi;
