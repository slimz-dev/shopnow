import { JSX } from 'react';
import { Rating } from 'react-simple-star-rating';

const ItemList = ({ header }: { header: string }): JSX.Element => {
	return (
		<div className="py-20 border-t border-[#e1e1e1]">
			<div className="pb-20 flex justify-center items-center font-[integral-cf] text-5xl">
				{header}
			</div>
			<div className="flex flex-row justify-between">
				{Array(4)
					.fill('')
					.map((item, index) => {
						return (
							<div key={index}>
								<img
									src={
										'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu91lqkHpDCEp3L5GsbCsgVzomm3fo_My89w&s'
									}
									className="w-96 rounded-2xl"
								/>
								<div className="font-bold py-2 text-xl">
									T-shirt with Tape Detail
								</div>
								<div className="flex items-center">
									<Rating size={20} allowFraction readonly initialValue={4.5} />
									<div className="text-sm pt-[6px] flex items-end ml-2">
										4.5/5
									</div>
								</div>
								<div className="font-bold text-2xl">$120</div>
							</div>
						);
					})}
			</div>
			<div className="w-fit font-semibold py-3 px-20 mt-10 rounded-full border mx-auto">
				View All
			</div>
		</div>
	);
};

export default ItemList;
