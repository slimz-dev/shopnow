import routeName from '@com/config';
import { productTypes } from '@com/const';
import { signOut } from '@com/utils/signOut';
import {
	faChevronUp,
	faDoorOpen,
	faFireFlameCurved,
	faTableList,
	faTags,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { JSX, useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Link } from 'react-router-dom';
import AuthBox from './components/AuthBox/AuthBox';
const cl = classNames;
const DrawerNavigation = ({
	isOpen,
	toggleDrawer,
	user,
	setIsAuthenticated,
	setIsOpen,
}: any): JSX.Element => {
	const [isOpenCategory, setIsOpenCategory] = useState(false);
	return (
		<Drawer
			open={isOpen}
			onClose={toggleDrawer}
			direction="left"
			className=" !w-[40%] overflow-y-scroll max-[500px]-overscroll-x-scroll"
			lockBackgroundScroll={true}
		>
			<AuthBox user={user} />
			<div
				className="flex justify-between py-2 px-4 hover:bg-[#e5e5e5] cursor-pointer"
				onClick={() => setIsOpenCategory(!isOpenCategory)}
			>
				<div className="flex items-center">
					<FontAwesomeIcon icon={faTableList} size="xl" className="w-6" />
					<div className="text-xl font-semibold pl-3">Category</div>
				</div>
				<FontAwesomeIcon
					icon={faChevronUp}
					className={cl(' transition-transform duration-300 ease-in-out', {
						'pt-2': !isOpenCategory,
						'pb-2': isOpenCategory,
						'rotate-180': isOpenCategory,
					})}
				/>
			</div>

			<div
				className={cl('h-0 overflow-hidden', {
					'animate-expand': isOpenCategory,
					'animate-collapse': !isOpenCategory,
				})}
			>
				{productTypes.CATEGORIES.map((cate, index) => {
					return (
						<Link key={index} to={routeName.categoryPage(cate.name)}>
							<div className="w-full cursor-pointer hover:bg-[#d5d5d5]">
								<div className="h-12 w-max flex items-center p-2 px-4 ">
									<img
										className="h-full mr-3"
										src={cate.img}
										alt="category icon"
									/>
									<span className="capitalize font-semibold	">{cate.name}</span>
								</div>
							</div>
						</Link>
					);
				})}
			</div>

			<Link
				to={routeName.categoryPage(productTypes.ON_SALE)}
				className="flex items-center py-2 px-4 hover:bg-[#e5e5e5] cursor-pointer"
			>
				<FontAwesomeIcon className="w-6" icon={faTags} size="xl" />
				<div className="text-xl font-semibold pl-3">On sale</div>
			</Link>

			<Link
				to={routeName.categoryPage(productTypes.NEW_ARRIVAL)}
				className="flex items-center py-2 px-4 hover:bg-[#e5e5e5] cursor-pointer"
			>
				<FontAwesomeIcon className="w-6" icon={faFireFlameCurved} size="xl" />
				<div className="text-xl font-semibold pl-3">New Arrival</div>
			</Link>
			{user && (
				<div
					onClick={() => signOut(setIsAuthenticated(false))}
					className="flex items-center py-2 px-4 hover:bg-[#e5e5e5] cursor-pointer"
				>
					<FontAwesomeIcon className="w-6" icon={faDoorOpen} size="xl" />
					<div className="text-xl font-semibold pl-3">Sign out</div>
				</div>
			)}
		</Drawer>
	);
};

export default DrawerNavigation;
