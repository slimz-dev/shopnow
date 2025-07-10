const routeName = {
	homePage: () => '/',
	categoryPage: (categorySlug = ':categorySlug') => `/products/category/${categorySlug}`,
	productdetailPage: (productID = ':productID') => `/products/${productID}`,
	listPage: () => '/list/:listID',
	cartPage: () => '/cart',
	loginPage: () => '/login',
	registerPage: () => '/register',
	profilePage: () => '/user/profile',
};

export default routeName;
