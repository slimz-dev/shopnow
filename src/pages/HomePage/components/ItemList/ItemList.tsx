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
			<div className="pb-20 flex justify-center items-center font-[integral-cf] text-5xl">
				{header}
			</div>
			<div className="flex flex-row justify-between">
				{data.map((item, index) => {
					return (
						<div key={index}>
							<img
								src={item.thumbnail}
								alt="product thumbnail"
								className="w-96 rounded-2xl border"
							/>
							<div className="font-bold py-2 text-xl">{item.title}</div>
							<div className="flex items-center">
								<Rating
									size={20}
									allowFraction
									readonly
									initialValue={item.rating}
								/>
								<div className="text-sm pt-[6px] flex items-end ml-2">
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
