import { baseApi } from '../apiBase';

const searchProduct = async (query: string, limit: number) => {
	const result = await baseApi.get(`/products/search?q=${query}&limit=${limit}`);
	return result.data;
};

export default searchProduct;
