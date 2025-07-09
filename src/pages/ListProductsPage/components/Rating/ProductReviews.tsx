import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';
import { Rating } from 'react-simple-star-rating';

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

const fakeCustomers = [
	{
		star: 5,
		name: 'Alex K.',
		review: 'Finding clothes that align with my personal style used to be a challenge until I discovered ShopNow. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
		time: '2025-04-25T10:00:00Z',
	},
	{
		star: 4,
		name: 'Samantha L.',
		review: 'ShopNow has completely transformed my shopping experience. The quality is excellent, and I always find something unique to wear for every event.',
		time: '2025-04-26T14:15:00Z',
	},
	{
		star: 5,
		name: 'Daniel P.',
		review: 'I love how ShopNow curates their collection. It feels like each piece is handpicked for fashion-forward individuals like me. Highly recommend!',
		time: '2025-04-27T09:30:00Z',
	},
	{
		star: 5,
		name: 'Emily R.',
		review: 'Amazing service and an even better selection! ShopNow has become my go-to for all my wardrobe needs.',
		time: '2025-04-28T11:45:00Z',
	},
	{
		star: 4,
		name: 'Michael B.',
		review: 'I appreciate the fast shipping and easy returns. ShopNow takes the hassle out of online shopping, making it a breeze.',
		time: '2025-04-29T16:00:00Z',
	},
	{
		star: 5,
		name: 'Natalie S.',
		review: 'Their customer support team is phenomenal! I had an issue with sizing, and they handled it promptly and kindly. Very impressed!',
		time: '2025-04-30T08:20:00Z',
	},
	{
		star: 3.5,
		name: 'Chris D.',
		review: 'Great styles, but sometimes my size runs out quickly. Still, I love browsing and finding hidden gems on ShopNow.',
		time: '2025-05-01T12:35:00Z',
	},
	{
		star: 5,
		name: 'Olivia M.',
		review: 'Stylish, affordable, and always on-trend. ShopNow never disappoints, whether I’m shopping for casual wear or something more formal.',
		time: '2025-05-02T10:10:00Z',
	},
];

const ProductReviews = (): JSX.Element => {
	const getTime = (time: string) => {
		const newDate = new Date(time);
		console.log();
		return `${month[newDate.getMonth() + 1]} ${newDate.getDate()}, ${newDate.getFullYear()}`;
	};
	return (
		<div>
			<div className="flex items-center justify-between my-10">
				<div>
					<span className="text-3xl font-semibold">All Reviews</span>
					<span className="ml-2 text-[gray]">{`(${fakeCustomers.length})`}</span>
				</div>
				<div className="flex text-lg">
					<div className="bg-black p-3 cursor-not-allowed text-white flex items-center justify-center rounded-full px-10">
						Write a Review
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-8  text-lg">
				{fakeCustomers.map((customer, index) => {
					return (
						<div key={index} className="border p-8 !h-full rounded-2xl ">
							<Rating readonly allowFraction size={24} initialValue={customer.star} />
							<div className="flex items-center ">
								<div className="my-2 mr-2 font-semibold text-xl">
									{customer.name}
								</div>
								<FontAwesomeIcon color="#01ab31" size="lg" icon={faCheckCircle} />
							</div>
							<div className="text-[gray]">{`"${customer.review}"`}</div>
							<div className="mt-6 text-[#606060] font-medium">{`Posted on ${getTime(
								customer.time
							)}`}</div>
						</div>
					);
				})}
			</div>
			<div className="flex items-center justify-center my-8">
				<div className="cursor-pointer hover:bg-[#f9f9f9] w-fit p-4 px-10 font-semibold text-lg rounded-full border ">
					Load More Reviews
				</div>
			</div>
		</div>
	);
};
export default ProductReviews;
