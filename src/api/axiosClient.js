import axios from 'axios';
import queryString from 'query-string';
import { authenticatedCookie } from 'utils/handleAuthenticatedCookie';

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'content-type': 'Application/json',
	},
	paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
	const token = authenticatedCookie;
  if (token) {
		config.headers.authorization = `Bearer ${token}`;
	 }
  return config;
});

axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) return response.data;

		return response;
	},
	(err) => {
		throw err;
	}
);

export default axiosClient;
