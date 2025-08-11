import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import getReview from './fakeReviews';

const month: { [key: string]: string } = {
	1: 'January',
	2: 'February',
	3: 'March',
	4: 'April',
	5: 'May',
	6: 'June',
	7: 'July',
	8: 'August',
	9: 'September',
	10: 'October',
	11: 'November',
	12: 'December',
};

const ProductReviews = (): JSX.Element => {
	const [data, setData] = useState<any>({});
	const [page, setPage] = useState<number>(1);
	const getTime = (time: string) => {
		const newDate = new Date(time);
		return `${month[newDate.getMonth() + 1]} ${newDate.getDate()}, ${newDate.getFullYear()}`;
	};
	useEffect(() => {
		const fetchReview = () => {
			const result = getReview(page, 8);
			setData((prev: any) => {
				if (Object.keys(prev).length === 0) return result;
				return { ...result, data: [...prev.data, ...result.data] };
			});
		};
		fetchReview();
	}, [page]);
	return (
		<>
			{Object.keys(data).length > 0 && (
				<div>
					<div className="flex items-center flex-wrap justify-between my-10">
						<div>
							<span className="text-3xl font-semibold">All Reviews</span>
							<span className="ml-2 text-[gray]">{`(${data.totalReviews})`}</span>
						</div>
						<div className="flex text-lg">
							<div className="bg-black p-3 cursor-not-allowed text-white flex items-center justify-center rounded-full px-10">
								Write a Review
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8  text-lg">
						{data.data.map((customer: any, index: number) => {
							return (
								<div
									key={index}
									className="border p-8 !h-full flex flex-col rounded-2xl "
								>
									<Rating
										readonly
										allowFraction
										size={24}
										initialValue={customer.star}
									/>
									<div className="flex items-center ">
										<div className="my-2 mr-2 font-semibold text-xl">
											{customer.name}
										</div>
										<FontAwesomeIcon
											color="#01ab31"
											size="lg"
											icon={faCheckCircle}
										/>
									</div>
									<div className="text-[gray] flex-1">{`"${customer.review}"`}</div>
									<div className="mt-6 text-[#606060] font-medium">{`Posted on ${getTime(
										customer.time
									)}`}</div>
								</div>
							);
						})}
					</div>
					<div className="flex items-center justify-center my-8">
						{page === data.totalPage ? (
							<div>No more reviews</div>
						) : (
							<div
								onClick={() => setPage(page + 1)}
								className="cursor-pointer hover:bg-[#f9f9f9] w-fit p-4 px-10 font-semibold text-lg rounded-full border "
							>
								Load More Reviews
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
};
export default ProductReviews;
