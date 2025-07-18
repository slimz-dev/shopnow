import { baseApi } from '../apiBase';

const refreshToken = async () => {
	try {
		const refreshToken = localStorage.getItem('refreshToken');
		// if (!refreshToken) {
		// 	throw new Error('No refresh token found');
		// }
		const request = await baseApi.post('/auth/refresh', {
			refreshToken,
			expiresInMins: 60,
		});
		if (request.status === 200) {
			const { accessToken, refreshToken } = request.data;
			localStorage.setItem('accessToken', accessToken);
			localStorage.setItem('refreshToken', refreshToken);
			localStorage.setItem('isLoggedIn', JSON.stringify(true));
			return request;
		}
	} catch (error: any) {
		console.error('An unexpected error occurred:', { error });
		return error;
	}
};

export default refreshToken;
