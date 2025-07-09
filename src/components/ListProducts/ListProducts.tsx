import routeName from '@com/config';
import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const ListProducts = ({ items }: { items: any[] }): JSX.Element => {
	console.log(items);
	return (
		<>
			{items &&
				items.map((item, index) => {
					return (
						<Link
							className="flex-1"
							key={index}
							to={routeName.productdetailPage(item.id)}
						>
							<div className="group  flex flex-col cursor-pointer">
								<div className="overflow-hidden ">
									<img
										className="rounded-xl bg-[#e5e5e5] border w-full aspect-[1/1] group-hover:scale-150 duration-1000"
										src={item.thumbnail}
										alt="product thumbnail"
									/>
								</div>
								<div className="flex flex-col flex-1">
									<div className="font-semibold h-full my-2 text-2xl">
										{item.title}
									</div>
									<div className="flex items-center mb-2">
										<Rating
											initialValue={item.rating}
											size={24}
											allowFraction
										/>
										<span className="leading-[24px] pt-1 ml-2">{`${item.rating}`}</span>
										<span className="leading-[24px] pt-1 text-[gray]">{`/5`}</span>
									</div>
									<div className="flex">
										<div className="font-semibold text-2xl">{`$${(
											(item.price * (100 - item.discountPercentage)) /
											100
										).toFixed(2)}`}</div>
										{item.discountPercentage && (
											<>
												<div className="relative mx-3 text-2xl">
													<span className="text-[#c4c5c7]">{`$${item.price}`}</span>
													<div className="w-[110%] h-[2px] -left-[5%]  absolute top-[54%] bg-[#c4c5c7]"></div>
												</div>
												<div className="text-[red] font-semibold bg-red-100 h-full p-1 px-3 rounded-3xl">
													{`-${item.discountPercentage}%`}
												</div>
											</>
										)}
									</div>
								</div>
							</div>
						</Link>
					);
				})}
		</>
	);
};

export default ListProducts;
