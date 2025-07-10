import { baseApi } from '../apiBase';

export const getMe = async () => {
	try {
		const accessToken = localStorage.getItem('accessToken');
		const response = await baseApi.get('/auth/me', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		console.log('getting user details');
		if (response.status === 200) {
			return response;
		}
	} catch (error: any) {
		console.error('An unexpected error occurred:', error.message || error);
	}
};
