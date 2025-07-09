import { baseApi } from '../apiBase';

const refreshToken = async () => {
	try {
		const refreshToken = localStorage.getItem('refreshToken');
		if (!refreshToken) {
			throw new Error('No refresh token found');
		}
		const request = await baseApi.post('/auth/refresh', {
			refreshToken,
			expiresInMins: 1,
		});
		if (request.status === 200) {
			const { accessToken } = request.data;
			localStorage.setItem('accessToken', accessToken);
			return request;
		}
	} catch (error: any) {
		console.error('An unexpected error occurred:', error.message || error);
	}
};

export default refreshToken;
