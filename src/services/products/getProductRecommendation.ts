import { baseApi } from '../apiBase';

const getProductRecommendation = async (category: string, limit: number) => {
	const result = await baseApi.get(`/products/category/${category}?limit=${limit}`);

	return result.data;
};

export default getProductRecommendation;
