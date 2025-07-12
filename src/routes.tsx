import { JSX, ReactNode, useContext } from 'react';
import routeName from './config';
import DefaultLayout from './layout/DefaultLayout/DefaultLayout';
import CartPage from './pages/CartPage/CartPage';
import CategoryListingPage from './pages/CategoryListingPage/CategoryListingPage';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ListProductsPage/ProductPage';
import Login from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { AuthContext } from './contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';

type childrenProps = {
	children: ReactNode;
};

export type routesProps = {
	path: string;
	component: () => JSX.Element;
	layout?: ({ children }: childrenProps) => JSX.Element;
};

const publicRoutes: routesProps[] = [
	{
		path: routeName.loginPage(),
		component: Login,
	},
	{
		path: routeName.registerPage(),
		component: RegisterPage,
	},
	{
		path: routeName.homePage(),
		component: HomePage,
		layout: DefaultLayout,
	},
	{
		path: routeName.productdetailPage(),
		component: ProductPage,
		layout: DefaultLayout,
	},
	{
		path: routeName.categoryPage(),
		component: CategoryListingPage,
		layout: DefaultLayout,
	},
];

const privateRoutes: routesProps[] = [
	{
		path: routeName.cartPage(),
		component: CartPage,
		layout: DefaultLayout,
	},
	{
		path: routeName.profilePage(),
		component: ProfilePage,
		layout: DefaultLayout,
	},
];

const PrivateRoute = (): JSX.Element => {
	const isAuthenticated = localStorage.getItem('isLoggedIn');
	return <>{isAuthenticated ? <Outlet /> : <Navigate to={routeName.loginPage()} />}</>;
};
export { publicRoutes, privateRoutes };
export default PrivateRoute;
