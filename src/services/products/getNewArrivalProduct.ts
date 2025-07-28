import { baseApi } from '../apiBase';

type sortType = {
	sortBy?: string;
	order?: string;
};
const getNewArrival = async (
	limit: number = 20,
	skip: number = 0,
	sort: sortType = { sortBy: 'price', order: 'asc' }
) => {
	const result = await baseApi.get(
		`/products?limit=${limit}&skip=${skip}&sortBy=${sort.sortBy}&order=${sort.order}`
	);
	return result.data;
};

export default getNewArrival;
