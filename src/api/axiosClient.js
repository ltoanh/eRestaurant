import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
	baseURL: 'https://strapi-pizzdee.herokuapp.com',
	headers: {
		'content-type': 'Application/json',
	},
	paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => config);

axiosClient.interceptors.response.use(
  response => {
    if(response && response.data) return response.data;

    return response;
  },
  err => {
    throw err;
  }
);

export default axiosClient;