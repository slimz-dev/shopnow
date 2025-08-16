import { baseApi } from '../apiBase';

const updateProfile = async (userInfo: FormData) => {
	const result = await baseApi.put(`/users/${userInfo.get('id')}`, { userInfo });
	return result.data;
};

export default updateProfile;
