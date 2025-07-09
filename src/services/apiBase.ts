import axios from 'axios';
import refreshToken from './users/refreshToken';

const baseApi = axios.create({
	baseURL: 'https://dummyjson.com',
});

baseApi.interceptors.response.use(
	(res: any) => {
		console.log(res);
		// const refreshToken = localStorage.getItem('refreshToken');
		// if (accessToken) {
		//     config.headers['Authorization'] = `Bearer ${accessToken}`;
		// }
		return res;
	},
	async (error) => {
		switch (error.status) {
			case 401: {
				try {
					console.error('Unauthorized: Attempting to refresh token.');
					const response: any = await refreshToken();
					return response;
				} catch (error) {
					throw error;
				}
			}
			case 403: {
				console.error('Forbidden: You do not have permission to access this resource.');
				return Promise.reject(error);
			}
			default: {
				console.error('An unexpected error occurred:', error.message || error);
				return Promise.reject(error);
			}
		}
	}
);

export { baseApi };
