import { baseApi } from '../apiBase';

const getProduct = async (productID: string) => {
	const result = await baseApi.get(`/products/${productID}`);

	return result.data;
};

export default getProduct;
