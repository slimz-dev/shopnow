import { JSX, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

type itemListProps = {
	header: string;
	fetch: () => any;
	navigate: string;
};

const ItemList = ({ header, fetch, navigate }: itemListProps): JSX.Element => {
	const [data, setData] = useState<any[]>([]);
	useEffect(() => {
		const fetchItem = async () => {
			const result = await fetch();
			setData(result.products);
		};
		fetchItem();
	}, []);
	return (
		<div className="py-20 border-t border-[#e1e1e1]">
			<div className="pb-20 flex justify-center items-center font-[integral-cf] text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
				{header}
			</div>
			<div className="flex flex-row max-lg:overflow-x-scroll gap-5 justify-between">
				{data.map((item, index) => {
					return (
						<div key={index}>
							<img
								src={item.thumbnail}
								alt="product thumbnail"
								className="w-96  max-[1800px]:w-80 max-[1500px]:w-72 max-[1400px]:w-64 max-[1300px]:w-56 rounded-2xl border"
							/>
							<div className="font-bold py-2 text-xl w-96  max-[1800px]:w-80 max-[1500px]:w-72 max-[1400px]:w-64 max-[1300px]:w-56 whitespace-nowrap overflow-hidden text-ellipsis">
								{item.title}
							</div>
							<div className="flex items-center">
								<Rating
									size={20}
									allowFraction
									readonly
									initialValue={item.rating}
								/>
								<div className="text-sm pt-[6px] flex max-lg:text-xs items-end ml-2">
									{item.rating}
								</div>
							</div>
							<div className="font-bold text-2xl">{`$${item.price}`}</div>
						</div>
					);
				})}
			</div>
			<Link to={navigate}>
				<div className="w-fit font-semibold py-3 px-20 mt-10 rounded-full border mx-auto">
					View All
				</div>
			</Link>
		</div>
	);
};

export default ItemList;
