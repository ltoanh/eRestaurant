import axiosClient from './axiosClient';

const URL_PRODUCTS = '/products';
const URL_CATEGORIES = '/categories';
const URL_RATINGS = '/ratings';

const URL_USERS = '/users';
const URL_LOGIN = '/auth/local';

const pizzdeeApi = {
	getProducts: (params) => {
		return axiosClient.get(URL_PRODUCTS, params);
	},
	getCategories: (params) => {
		return axiosClient.get(URL_CATEGORIES, params);
	},
  getRatings: (params) => {
    return axiosClient.get(URL_RATINGS, params);
  },

	getUserByID: (id) => {
		const url = URL_USERS + "/" + id;
		return axiosClient.get(url, {});
	},
	getProductByID: (id) => {
		const url = URL_PRODUCTS + "/" + id;
		return axiosClient.get(url, {});
	},
	
	// authenticate
	loginWithEmail: (loginData = {identifier: '', password: ''}) => {
		return axiosClient.post(URL_LOGIN, loginData);
	}
};

export default pizzdeeApi;
