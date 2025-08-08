import getClassname from '@com/utils/getClassname';
import { faArrowLeft, faArrowRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, useRef } from 'react';
import { Rating } from 'react-simple-star-rating';
import Slider from 'react-slick';
import './CustomerReviews.scss';
const fakeCustomers = [
	{
		star: 5,
		name: 'Alex K.',
		review: 'Finding clothes that align with my personal style used to be a challenge until I discovered ShopNow. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
	},
	{
		star: 4,
		name: 'Samantha L.',
		review: 'ShopNow has completely transformed my shopping experience. The quality is excellent, and I always find something unique to wear for every event.',
	},
	{
		star: 5,
		name: 'Daniel P.',
		review: 'I love how ShopNow curates their collection. It feels like each piece is handpicked for fashion-forward individuals like me. Highly recommend!',
	},
	{
		star: 5,
		name: 'Emily R.',
		review: 'Amazing service and an even better selection! ShopNow has become my go-to for all my wardrobe needs.',
	},
	{
		star: 4,
		name: 'Michael B.',
		review: 'I appreciate the fast shipping and easy returns. ShopNow takes the hassle out of online shopping, making it a breeze.',
	},
	{
		star: 5,
		name: 'Natalie S.',
		review: 'Their customer support team is phenomenal! I had an issue with sizing, and they handled it promptly and kindly. Very impressed!',
	},
	{
		star: 3.5,
		name: 'Chris D.',
		review: 'Great styles, but sometimes my size runs out quickly. Still, I love browsing and finding hidden gems on ShopNow.',
	},
	{
		star: 5,
		name: 'Olivia M.',
		review: 'Stylish, affordable, and always on-trend. ShopNow never disappoints, whether I’m shopping for casual wear or something more formal.',
	},
];

const CustomerReviews = (): JSX.Element => {
	const reviewsRef: any = useRef(null);
	var settings = {
		speed: 700,
		arrows: true,
		dots: true,
		centerMode: true,
		autoplaySpeed: 0,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const handlePrevious = () => {
		reviewsRef.current.slickPrev();
	};

	const handleNext = () => {
		reviewsRef.current.slickNext();
	};
	return (
		<div className="pb-32 pt-20">
			<div className="flex justify-between flex-wrap items-end   mb-10">
				<div className="font-[integral-cf] text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
					Our happy customers
				</div>
				<div className="max-lg:hidden flex gap-4 items-center">
					<div className="cursor-pointer" onClick={handlePrevious}>
						<FontAwesomeIcon size="lg" icon={faArrowLeft} />
					</div>
					<div className="cursor-pointer" onClick={handleNext}>
						<FontAwesomeIcon size="lg" icon={faArrowRight} />
					</div>
				</div>
			</div>
			<div className="himas  overflow-hidden">
				<Slider ref={reviewsRef} {...settings}>
					{fakeCustomers.map((customer) => {
						return (
							<div className="border p-8 !h-full rounded-2xl ">
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
								<div className="text-[gray]">{`"${customer.review}"`}</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default CustomerReviews;
