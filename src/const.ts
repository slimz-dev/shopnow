const NEW_ARRIVAL = 'new-arrivals';
const TOP_SELLING = 'top-selling';
const FEATURED = 'featured';
const CATEGORIES = [
	{ name: 'beauty', img: require('@com/assets/img/eyelash.png') },
	{ name: 'fragrances', img: require('@com/assets/img/fragrance.png') },
	{ name: 'furniture', img: require('@com/assets/img/furniture.png') },
	{ name: 'groceries', img: require('@com/assets/img/grocery.png') },
	{ name: 'home-decoration', img: require('@com/assets/img/shelf.png') },
	{ name: 'kitchen-accessories', img: require('@com/assets/img/cutlery.png') },
	{ name: 'laptops', img: require('@com/assets/img/laptop.png') },
	{ name: 'mens-shirts', img: require('@com/assets/img/t-shirt.png') },
	{ name: 'mens-shoes', img: require('@com/assets/img/shoes.png') },
	{ name: 'mens-watches', img: require('@com/assets/img/watch.png') },
	{ name: 'mobile-accessories', img: require('@com/assets/img/charger.png') },
	{ name: 'motorcycle', img: require('@com/assets/img/motorbike.png') },
	{ name: 'skin-care', img: require('@com/assets/img/skin-care.png') },
	{ name: 'smartphones', img: require('@com/assets/img/smartphone.png') },
	{ name: 'sports-accessories', img: require('@com/assets/img/gym-accessories.png') },
	{ name: 'sunglasses', img: require('@com/assets/img/sunglasses.png') },
	{ name: 'tablets', img: require('@com/assets/img/tablet.png') },
	{ name: 'tops', img: require('@com/assets/img/shirt.png') },
	{ name: 'vehicle', img: require('@com/assets/img/car.png') },
	{ name: 'womens-bags', img: require('@com/assets/img/handbag.png') },
	{ name: 'womens-dresses', img: require('@com/assets/img/woman-clothes.png') },
	{ name: 'womens-jewellery', img: require('@com/assets/img/necklace.png') },
	{ name: 'womens-shoes', img: require('@com/assets/img/high-heels.png') },
	{ name: 'womens-watches', img: require('@com/assets/img/wristwatch.png') },
];
export const productTypes = { NEW_ARRIVAL, TOP_SELLING, FEATURED, CATEGORIES };
