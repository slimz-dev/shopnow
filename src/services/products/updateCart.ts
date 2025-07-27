import { baseApi } from '../apiBase';

type cartProducts = {
	id: number;
	quantity: number;
};
const updateCart = async (cartID: number, cart: cartProducts) => {
	const result = await baseApi.put(`/carts/${cartID}`, {
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
