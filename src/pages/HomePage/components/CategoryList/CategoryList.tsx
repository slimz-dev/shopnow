import routeName from '@com/config';
import { productTypes } from '@com/const';
import { JSX } from 'react';
import { Link } from 'react-router-dom';

const CategoryList = (): JSX.Element => {
	return (
		<div className="bg-[#f0f0f0] rounded-3xl p-20 max-lg:p-6">
			<div className="pb-20 flex justify-center items-center font-[integral-cf] text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
				Browse by category
			</div>
			<div className="max-lg:flex-col max-lg:flex grid grid-cols-[2fr_3fr] gap-5 mb-5">
				<div className="relative  flex bg-white max-h-80  rounded-3xl">
					<Link className="w-full " to={routeName.categoryPage('tops')}>
						<span className="absolute font-semibold text-3xl left-10 top-10 bg-[#b3b3b345]">
							Clothes
						</span>
						<img
							className="w-full h-full rounded-3xl"
							alt="category"
							src="https://www.plasticsoupfoundation.org/Nieuws/Untitled-design-3.png"
						/>
					</Link>
				</div>
				<div className="relative overflow-hidden flex bg-white max-h-80 rounded-3xl">
					<Link className="w-full" to={routeName.categoryPage('smartphones')}>
						<span className="absolute font-semibold text-3xl left-10 top-10 bg-[#b3b3b345]">
							Electronics
						</span>
						<img
							className="w-full h-full rounded-3xl"
							alt="category"
							src="https://img.baba-blog.com/2024/02/consumer-electronics-market-in-united-states_00.jpg?x-oss-process=style%2Flarge"
						/>
					</Link>
				</div>
			</div>
			<div className="max-lg:flex-col max-lg:flex grid grid-cols-[3fr_2fr] gap-5">
				<div className="relative overflow-hidden flex bg-white max-h-80 rounded-3xl">
					<Link className="w-full" to={routeName.categoryPage('sunglasses')}>
						<span className="absolute font-semibold text-3xl left-10 top-10 bg-[#b3b3b345]">
							Furniture
						</span>
						<img
							className="w-full h-full rounded-3xl"
							alt="category"
							src="https://www.bassettfurniture.com/on/demandware.static/-/Sites-bassett-Library/default/dw8109f429/living/2-col-impact-living-clp.jpg"
						/>
					</Link>
				</div>
				<div className="relative overflow-hidden flex bg-white max-h-80 rounded-3xl">
					<Link className="w-full" to={routeName.categoryPage('womens-shoes')}>
						<span className="absolute font-semibold text-3xl left-10 top-10 bg-[#b3b3b345]">
							Shoes
						</span>
						<img
							className="w-full h-full rounded-3xl"
							alt="category"
							src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/3d/45/70/friendly-shop.jpg?w=900&h=500&s=1"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CategoryList;
