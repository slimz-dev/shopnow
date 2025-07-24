import { baseApi } from '../apiBase';

const updateProfile = async (userInfo: FormData) => {
	console.log(userInfo);
	const result = await baseApi.put(`/users/${userInfo.get('id')}`, { userInfo });
	return result.data;
};

export default updateProfile;
