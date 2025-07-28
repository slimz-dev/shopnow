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
			<div className="flex gap-8">
				<ListProducts items={products} />
			</div>
		</div>
	);
};

export default ProductRecommend;
