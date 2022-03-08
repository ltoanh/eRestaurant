import axiosClient from './axiosClient';

const URL_PRODUCTS = '/products';
const URL_CATEGORIES = '/categories';
const URL_RATINGS = '/ratings';

const URL_BILLS = '/bills';
const URL_PRODUCT_BILL = '/product-bills';

const URL_USERS = '/users';
const URL_ME = '/users/me';
const URL_LOGIN = '/auth/local';
const URL_SIGNUP = '/auth/local/register';

const erestaurantApi = {
	getProducts: (params) => {
		return axiosClient.get(URL_PRODUCTS, params);
	},
	getCategories: (params) => {
		return axiosClient.get(URL_CATEGORIES, params);
	},
	// rating
	getRatings: (params) => {
		return axiosClient.get(URL_RATINGS, params);
	},
	createRatingProduct: (params) => {
		return axiosClient.post(URL_RATINGS, params);
	},
	
	getUserByID: (id) => {
		const url = URL_USERS + '/' + id;
		return axiosClient.get(url, {});
	},
	getProductByID: (id) => {
		const url = URL_PRODUCTS + '/' + id;
		return axiosClient.get(url, {});
	},

	// authenticate
	loginWithEmail: (loginData = { identifier: '', password: '' }) => {
		return axiosClient.post(URL_LOGIN, loginData);
	},
	signupWithEmail: (signupData) => {
		return axiosClient.post(URL_SIGNUP, signupData);
	},
	getMe: () => {
		return axiosClient.get(URL_ME, {});
	},
	// bill
	createBill: (billData) => {
		return axiosClient.post(URL_BILLS, billData);
	},
	createProductBill: (params) => {
		return axiosClient.post(URL_PRODUCT_BILL, params);
	},
	getBillByID: (id) => {
		const url = URL_BILLS + "/" + id;
		return axiosClient.get(url, {});
	}
};

export default erestaurantApi;
