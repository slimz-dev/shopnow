import routeName from '@com/config';
import {
	faCartShopping,
	faChevronDown,
	faDoorOpen,
	faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Header.module.scss';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import { signOut } from '@com/utils/signOut';
import { productTypes } from '@com/const';
import getClassname from '@com/utils/getClassname';
const cx = getClassname(styles);

const DefaultHeader = ({ isAuthenticated, user, cart, setIsAuthenticated }: any): JSX.Element => {
	return (
		<header
			className={cx(
				'max-lg:hidden h-20 text-lg flex max-xl:text-base items-center  px-20 py-2 justify-between font-medium font-sans'
			)}
		>
			<div className="font-[integral-cf] max-xl:text-2xl flex-1 text-4xl cursor-pointer">
				<Link to={routeName.homePage()}>ShopNow</Link>
			</div>
			<div className="flex group  items-center px-4 cursor-pointer justify-center rounded-xl hover:bg-[#f1f1f1] flex-1 relative h-full">
				<div className="mr-2   ">Category</div>
				<FontAwesomeIcon icon={faChevronDown} />
				<div className="absolute border hidden rounded-2xl overflow-hidden max-h-96  bg-white top-full group-hover:flex flex-col z-10 ">
					<div className="overflow-y-scroll">
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
											<span className="capitalize font-semibold	">
												{cate.name}
											</span>
										</div>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
			<Link
				to={routeName.categoryPage(productTypes.ON_SALE)}
				className="  h-full flex items-center justify-center px-4 cursor-pointer flex-1 rounded-xl hover:bg-[#f1f1f1] "
			>
				On sale
			</Link>
			<Link
				to={routeName.categoryPage(productTypes.NEW_ARRIVAL)}
				className="   h-full flex items-center px-4 cursor-pointer flex-1 hover:bg-[#f1f1f1]  rounded-xl justify-center "
			>
				New Arrivals
			</Link>
			<SearchComponent />
			<div className="flex-1   	h-full justify-center flex items-center">
				<Link
					to={routeName.cartPage()}
					className="relative cursor-pointer hover:bg-[#f1f1f1] "
				>
					<FontAwesomeIcon size="xl" icon={faCartShopping} />
					<div className="absolute bg-[red] max-xl:w-6 max-xl:h-6 w-8 h-8 text-sm flex items-center justify-center text-white rounded-full top-[-20px] right-[-20px]">
						{cart.totalQuantity}
					</div>
				</Link>
			</div>
			<div className="flex-1  	h-full justify-center flex items-center">
				<div className="cursor-pointer h-full ">
					{isAuthenticated ? (
						<div className="relative group flex h-full items-center">
							<img
								alt="user"
								src={user.image}
								className="h-[60%] aspect-square rounded-full object-fit hover:bg-[#f1f1f1] "
							/>

							<div className="group-hover:text-[#7e7e7e] text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap pl-2">{`${user.username}`}</div>
							<div className="group-hover:block absolute hidden top-full w-max bg-white  border rounded-lg shadow-lg">
								<Link
									to={routeName.profilePage()}
									className="flex items-center hover:text-blue-400 pl-3 pr-8 py-3 hover:bg-gray-100 cursor-pointer"
								>
									<FontAwesomeIcon icon={faUserCircle} />
									<span className="pl-2">Profile</span>
								</Link>
								<Link
									to={routeName.cartPage()}
									className="hover:text-blue-400 flex items-center pl-3 pr-8 py-3 hover:bg-gray-100 cursor-pointer"
								>
									<FontAwesomeIcon icon={faCartShopping} />
									<span className="pl-2">Orders</span>
								</Link>
								<div
									onClick={() => signOut(() => setIsAuthenticated(false))}
									className="hover:text-blue-400 flex items-center pl-3 pr-8 py-3 hover:bg-gray-100 cursor-pointer"
								>
									<FontAwesomeIcon icon={faDoorOpen} />
									<span className="pl-2">Sign out</span>
								</div>
							</div>
						</div>
					) : (
						<div className="flex h-full items-center justify-center">
							<FontAwesomeIcon
								size="xl"
								icon={faUserCircle}
								className="hover:bg-[#f1f1f1] "
							/>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default DefaultHeader;
