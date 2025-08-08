import { JSX, useContext, useState } from 'react';
import { AuthContext } from '@com/contexts/AuthContext';
import { useAppSelector } from '@com/redux/hooks';
import DrawerNavigation from './components/DrawerNavigation/DrawerNavigation';
import DefaultHeader from './components/DefaultHeader/DefaultHeader';
import MobileHeader from './components/MobileHeader/MobileHeader';

const Header = (): JSX.Element => {
	const { isAuthenticated, user, setIsAuthenticated } = useContext(AuthContext);
	const cart = useAppSelector((state) => state.cart);
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState);
	};
	return (
		<>
			<DefaultHeader
				isAuthenticated={isAuthenticated}
				setIsAuthenticated={setIsAuthenticated}
				cart={cart}
				user={user}
			/>
			<MobileHeader toggleDrawer={toggleDrawer} cart={cart} />
			<DrawerNavigation
				isOpen={isOpen}
				toggleDrawer={toggleDrawer}
				user={user}
				setIsAuthenticated={setIsAuthenticated}
				setIsOpen={setIsOpen}
			/>
		</>
	);
};

export default Header;
