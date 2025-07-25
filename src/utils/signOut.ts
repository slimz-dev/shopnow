import { SetBooleanType } from '@com/types';

export const signOut = (cb: () => SetBooleanType) => {
	cb();
	localStorage.removeItem('accessToken');
	localStorage.removeItem('refreshToken');
	window.location.href = '/';
};
