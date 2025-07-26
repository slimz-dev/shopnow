import { baseApi } from '../apiBase';

const getCart = async (userID: string) => {
	const result = await baseApi.get(`/carts/user/${userID}`);
	console.log(result);
	return result.data.carts[0];
};

export default getCart;
