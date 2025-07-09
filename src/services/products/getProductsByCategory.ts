import { baseApi } from '../apiBase';

const getProductsBycategory = async (
	category: string,
	pagination: number,
	sort: {
		sortBy?: string;
		order?: string;
	}
) => {
	const result = await baseApi.get(
		`/products/category/${category}?skip=${pagination}${
			sort?.sortBy && sort?.order ? `&sortBy=${sort.sortBy}&order=${sort.order}` : ''
		}`
	);

	return result.data;
};

export default getProductsBycategory;
