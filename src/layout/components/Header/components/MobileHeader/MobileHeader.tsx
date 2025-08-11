import routeName from '@com/config';
import getClassname from '@com/utils/getClassname';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Header.module.scss';
const cx = getClassname(styles);
const MobileHeader = ({ toggleDrawer, cart }: any): JSX.Element => {
	return (
		<header
			className={cx(
				'lg:hidden h-20 text-lg flex  items-center  px-20 max-lg:px-6 py-2 justify-between font-medium font-sans'
			)}
		>
			<div className="flex items-center">
				<FontAwesomeIcon className="mr-6" size="xl" icon={faBars} onClick={toggleDrawer} />
				<div className="font-[integral-cf] max-xl:text-2xl flex-1 text-4xl cursor-pointer">
					<Link to={routeName.homePage()}>ShopNow</Link>
				</div>
			</div>
			<div className="flex items-center">
				<div className=" mr-6	h-full justify-center flex items-center">
					<Link
						to={routeName.cartPage()}
						className="relative cursor-pointer hover:bg-[#f1f1f1] "
					>
						<FontAwesomeIcon size="xl" icon={faCartShopping} />
						<div className="absolute bg-[red] w-6 h-6 text-sm flex items-center justify-center text-white rounded-full top-[-20px] right-[-10px]">
							{cart.totalQuantity}
						</div>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default MobileHeader;
