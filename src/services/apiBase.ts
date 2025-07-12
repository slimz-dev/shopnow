import axios from 'axios';
import handleRefreshToken from './users/refreshToken';

const baseApi = axios.create({
	baseURL: 'https://dummyjson.com',
});

baseApi.interceptors.response.use(
	(res: any) => {
		console.log(res);
		return res;
	},
	async (error) => {
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
					const response: any = await handleRefreshToken();
					if (response) {
						const { accessToken, refreshToken } = response.data;
						localStorage.setItem('accessToken', accessToken);
						localStorage.setItem('refreshToken', refreshToken);
						localStorage.setItem('isLoggedIn', JSON.stringify(true));
						return response;
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

export { baseApi };
