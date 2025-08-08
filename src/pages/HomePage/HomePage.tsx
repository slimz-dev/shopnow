import { url } from 'inspector';
import { JSX, useEffect, useState } from 'react';
import Slider from 'react-slick';
import CategoryList from './components/CategoryList/CategoryList';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import ItemList from './components/ItemList/ItemList';
import getNewArrival from '@com/services/products/getNewArrivalProduct';
import getTopSelling from '@com/services/products/getTopSelling';
import routeName from '@com/config';
import { productTypes } from '@com/const';
import useIncrease from '@com/hooks/useIncrease';
import { toast } from 'react-toastify';

const HomePage = (): JSX.Element => {
	const brandNum = useIncrease({ from: 0, to: 200, time: 500 });
	const productNum = useIncrease({ from: 0, to: 2000, time: 500 });
	const customerNum = useIncrease({ from: 0, to: 30000, time: 500 });
	var settings = {
		autoplay: true,
		speed: 4000,
		infinite: true,
		autoplaySpeed: 0,
		slidesToShow: 6,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 3,
					rows: 2,
					slidesPerRow: 1,
				},
			},
		],
	};

	return (
		<div className="border-t  -mx-20 border-black">
			<div className="flex px-20 justify-between h-[600px] max-xl:min-h-[600px] max-xl:h-auto max-lg:flex-col overflow-hidden max-lg:px-6 bg-[#f2f0f1]">
				<div className="flex-1 pt-20">
					<div className="font-[integral-cf] flex flex-col text-6xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
						find clothes that matches your style
					</div>
					<div className="my-6 ">
						Browse through our diverse range of meticulously crafted garments, dessigned
						to bring out your individually and cater to your sense of style.
					</div>
					<div
						onClick={() => toast.warn('Feature Comming soon')}
						className=" cursor-pointer bg-black max-lg:w-full max-lg:text-center max-lg:py-5 my-6 p-3 px-10 w-fit text-white rounded-full"
					>
						Shop Now
					</div>
					<div className="flex items-center max-lg:flex-wrap justify-between">
						<div className="flex flex-col">
							<span className="text-4xl font-bold ">{`${brandNum}+`}</span>
							<span>International Brands</span>
						</div>
						<div className="flex flex-col border-x px-8 border-gray-300">
							<span className="text-4xl font-bold ">{`${productNum}+`}</span>
							<span>High-Quality Products</span>
						</div>
						<div className="flex flex-col">
							<span className="text-4xl font-bold ">{`${customerNum}+`}</span>
							<span>Happy Customers</span>
						</div>
					</div>
				</div>
				<div className="flex-[2] max-[1700px]:!flex-1 flex justify-end">
					<img
						src="https://daniel2silva.github.io/shop/img/casal%202.png"
						className="w-[70%]"
						alt="model"
					/>
				</div>
			</div>
			<div className="overflow-hidden">
				<Slider {...settings}>
					<img
						className="h-32 max-lg:h-24 "
						alt="brand logo"
						src={require('@com/assets/img/zara.jpg')}
					/>
					<img
						className="h-32 max-lg:h-24"
						alt="brand logo"
						src={require('@com/assets/img/louis-vuitton.jpg')}
					/>
					<img
						className="h-32 max-lg:h-24"
						alt="brand logo"
						src={require('@com/assets/img/prada.jpg')}
					/>
					<img
						className="h-32 max-lg:h-24"
						alt="brand logo"
						src={require('@com/assets/img/gucci.jpg')}
					/>
					<img
						className="h-32 max-lg:h-24"
						alt="brand logo"
						src={require('@com/assets/img/versace.jpg')}
					/>
					<img
						className="h-32 max-lg:h-24"
						alt="brand logo"
						src={require('@com/assets/img/calvin-klein.jpg')}
					/>
				</Slider>
			</div>
			<div className="max-lg:px-6 px-20 mb-20">
				<ItemList
					header="new arrivals"
					fetch={() => getNewArrival(4)}
					navigate={routeName.categoryPage(productTypes.NEW_ARRIVAL)}
				/>
				<ItemList
					header="top selling"
					fetch={() => getTopSelling(4)}
					navigate={routeName.categoryPage(productTypes.TOP_SELLING)}
				/>
				<CategoryList />
				<CustomerReviews />
			</div>
		</div>
	);
};

export default HomePage;
