import { baseApi } from '../apiBase';

export const login = async (username: string, password: string) => {
	try {
		const response = await baseApi.post('/user/login', {
			username,
			password,
			expiresInMins: 1,
		});
		if (response.status === 200) {
			const { accessToken, refreshToken, ...user } = response.data;
			localStorage.setItem('user', JSON.stringify(user));
			localStorage.setItem('accessToken', accessToken);
			localStorage.setItem('refreshToken', refreshToken);
		}
	} catch (error: any) {
		switch (error.status) {
			case 400: {
				console.error('Bad Request: Please check your input.');
				break;
			}
			default: {
				console.error('An unexpected error occurred:', error.message || error);
				break;
			}
		}
	}
};
