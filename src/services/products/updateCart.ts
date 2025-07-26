import { baseApi } from '../apiBase';

type cartProducts = {
	id: number;
	quantity: number;
};
const updateCart = async (userID: number, cart: cartProducts) => {
	const result = await baseApi.put(`/carts/${userID}`, {
		merge: true,
		products: [
			{
				id: cart.id,
				quantity: cart.quantity,
			},
		],
	});
	return result.data;
};

export default updateCart;
