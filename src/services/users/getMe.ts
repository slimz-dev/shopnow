import { baseApi } from '../apiBase';

export const getMe = async () => {
	try {
		const accessToken = localStorage.getItem('accessToken');
		const response = await baseApi.get('/auth/me', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		if (response.status === 200) {
			localStorage.setItem('isLoggedIn', JSON.stringify(true));
			return response;
		}
	} catch (error: any) {
		console.error('An unexpected error occurred:', error.message || error);
		return error;
	}
};
