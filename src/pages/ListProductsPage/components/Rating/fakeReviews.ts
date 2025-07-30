const reviews = [
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
	{
		star: 4,
		name: 'Brian H.',
		review: "ShopNow brings fashion right to my fingertips. It's user-friendly and full of amazing deals. Definitely a must-have app!",
		time: '2025-05-03T13:25:00Z',
	},
	{
		star: 5,
		name: 'Laura J.',
		review: 'Excellent customer service and fast delivery. I always receive compliments when I wear their outfits!',
		time: '2025-05-04T09:10:00Z',
	},
	{
		star: 4.5,
		name: 'Tom W.',
		review: "Good variety and the checkout process is smooth. I'd love to see more eco-friendly options in the future.",
		time: '2025-05-05T17:50:00Z',
	},
	{
		star: 3,
		name: 'Jessica T.',
		review: 'Decent selection but some items looked different in person. Return process was easy, though.',
		time: '2025-05-06T11:00:00Z',
	},
	{
		star: 5,
		name: 'Kevin M.',
		review: "One of the best online shopping experiences I've had. Their mobile app is super intuitive.",
		time: '2025-05-07T15:45:00Z',
	},
	{
		star: 4,
		name: 'Hannah G.',
		review: "The seasonal sales are unbeatable. I've updated my whole wardrobe thanks to ShopNow!",
		time: '2025-05-08T10:20:00Z',
	},
	{
		star: 5,
		name: 'Eric V.',
		review: 'Perfect sizing guide and top-notch quality. I’ve become a regular customer now.',
		time: '2025-05-09T14:30:00Z',
	},
	{
		star: 4.5,
		name: 'Rachel N.',
		review: 'Shopping for gifts has never been easier. The packaging is always neat and premium-looking.',
		time: '2025-05-10T12:05:00Z',
	},
];

const getReview = (page: number, perPage: number) => {
	const totalPage = Math.ceil(reviews.length / perPage);
	const data = reviews.slice((page - 1) * perPage, page * perPage);
	return {
		page,
		perPage,
		totalPage,
		totalReviews: reviews.length,
		data: data,
	};
};

export default getReview;
