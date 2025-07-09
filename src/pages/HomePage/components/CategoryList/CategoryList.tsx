import { JSX } from 'react';

const CategoryList = (): JSX.Element => {
	return (
		<div className="bg-[#f0f0f0] rounded-3xl p-20">
			<div className="pb-20 flex justify-center items-center font-[integral-cf] text-5xl">
				Browse by category
			</div>
			<div className="grid grid-cols-[2fr_3fr] gap-5 mb-5">
				<div className="relative flex bg-white h-80 rounded-3xl">
					<span className="absolute font-semibold text-3xl left-10 top-10">Clothes</span>
					<img className="w-full rounded-3xl" src="https://i.imgur.com/QkIa5tT.jpeg" />
				</div>
				<div className="relative flex bg-white h-80 rounded-3xl">
					<span className="absolute font-semibold text-3xl left-10 top-10">
						Electronics
					</span>
					<img className="w-full rounded-3xl" src="https://i.imgur.com/ZANVnHE.jpeg" />
				</div>
			</div>
			<div className="grid grid-cols-[3fr_2fr] gap-5">
				<div className="relative flex bg-white h-80 rounded-3xl">
					<span className="absolute font-semibold text-3xl left-10 top-10">
						Furniture
					</span>
					<img className="w-full rounded-3xl" src="https://i.imgur.com/Qphac99.jpeg" />
				</div>
				<div className="relative flex bg-white h-80 rounded-3xl">
					<span className="absolute font-semibold text-3xl left-10 top-10">Shoes</span>
					<img className="w-full rounded-3xl" src="https://i.imgur.com/qNOjJje.jpeg" />
				</div>
			</div>
		</div>
	);
};

export default CategoryList;
