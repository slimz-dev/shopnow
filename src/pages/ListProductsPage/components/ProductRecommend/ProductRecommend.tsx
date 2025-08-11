import ListProducts from '@com/components/ListProducts/ListProducts';
import getProductRecommendation from '@com/services/products/getProductRecommendation';
import { JSX, useEffect, useState } from 'react';

type ProductRecommendProps = {
	category: string;
};
const ProductRecommend = ({ category }: ProductRecommendProps): JSX.Element => {
	const [products, setProducts] = useState<any[]>([]);
	console.log(category, products);
	useEffect(() => {
		const fetchProductRecommendations = async () => {
			const result = await getProductRecommendation(category, 5);
			if (result && result.products) {
				setProducts(result.products);
			}
		};
		fetchProductRecommendations();
	}, [category]);
	return (
		<div className="my-4">
			<div className="font-[integral-cf] my-10 text-6xl flex items-center justify-center">
				You might also like
			</div>
			<div className="grid grid-cols-5 mt-6 gap-8 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-[550px]:grid-cols-1">
				<ListProducts items={products} />
			</div>
		</div>
	);
};

export default ProductRecommend;
