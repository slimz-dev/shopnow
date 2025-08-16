import axios from 'axios';
import handleRefreshToken from './users/refreshToken';

const baseApi = axios.create({
	baseURL: 'https://dummyjson.com',
});

const noAuthApi = axios.create({
	baseURL: 'https://dummyjson.com',
});
let refreshedToken: any = null;
baseApi.interceptors.response.use(
	(res: any) => {
		return res;
	},
	async (error) => {
		console.log(error);
		switch (error.status) {
			case 401: {
				try {
					if (error.config.url === '/auth/refresh') {
						console.error(
							'Forbidden: You do not have permission to access this resource.'
						);
						localStorage.removeItem('accessToken');
						localStorage.removeItem('refreshToken');
						localStorage.removeItem('isLoggedIn');
						return Promise.reject(error);
					}
					console.error('Unauthorized: Attempting to refresh token.');
					if (!refreshedToken) {
						refreshedToken = handleRefreshToken();
					}
					const newToken = await refreshedToken;
					if (newToken) {
						const { accessToken } = newToken.data;
						error.config.headers['Authorization'] = `Bearer ${accessToken}`;
						return baseApi(error.config);
					}
					return Promise.reject(error);
				} catch (error) {
					throw error;
				}
			}
			case 403: {
				console.error('Forbidden: You do not have permission to access this resource.');
				localStorage.removeItem('accessToken');
				localStorage.removeItem('refreshToken');
				localStorage.removeItem('isLoggedIn');
				return Promise.reject(error);
			}
			default: {
				console.error('An unexpected error occurred 5:', error.message || error);
				return Promise.reject(error);
			}
		}
	}
);

export { baseApi, noAuthApi };
