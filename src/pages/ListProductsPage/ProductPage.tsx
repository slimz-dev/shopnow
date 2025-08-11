import PageIndex from '@com/components/PageIndex/PageIndex';
import ProductCount from '@com/components/ProductCount/ProductCount';
import getProduct from '@com/services/products/getProduct';
import getClassname from '@com/utils/getClassname';
import {
	faCircleCheck,
	faCircleInfo,
	faDolly,
	faTruckFast,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import FAQ from './components/FAQ/FAQ';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductRecommend from './components/ProductRecommend/ProductRecommend';
import ProductReviews from './components/Rating/ProductReviews';
import style from './ProductPage.module.scss';
import ImgModal from './components/ImgModal/ImgModal';
import { useAppDispatch, useAppSelector } from '@com/redux/hooks';
import { updateCartFromRedux } from '@com/redux/slices/counter/counterSlice';

type DynamicState = {
	[key: string]: any;
};
const ProductPage = (): JSX.Element => {
	const { productID } = useParams<string>();
	const [selectedItem, setSelectedItem] = useState<number>(0);
	const [modalSelectedItem, setModalSelectedItem] = useState<number>(0);
	const [isOpenImgModal, setIsOpenImgModal] = useState<boolean>(false);
	const [item, setItem] = useState<DynamicState>({});
	const dispatch = useAppDispatch();
	const cart = useAppSelector((state) => state.cart);
	useEffect(() => {
		setItem({});
		const fetchProduct = async () => {
			if (productID) {
				const result = await getProduct(productID);
				setItem(result);
			}
		};
		if (productID) {
			fetchProduct();
		}
	}, [productID]);
	const [activeTab, setActiveTab] = useState<number>(0);
	const cx = getClassname(style);
	const lineRef = useRef<HTMLDivElement>(null);
	const [quantity, setQuantity] = useState<number>(1);
	const updatecart = async (productQuantity: number) => {
		setQuantity(productQuantity);
	};
	const handleAddToCart = () => {
		dispatch(
			updateCartFromRedux({
				cartID: cart.id,
				updatedItem: {
					id: productID,
					quantity: quantity,
				},
				isAddOutside: true,
			})
		);
	};
	const handleAnimation = (e: any, index: number) => {
		const width = e.target.offsetWidth;
		if (lineRef && lineRef.current) {
			console.log(`translateX(${width * index})`);
			lineRef.current.style.transform = `translateX(${width * index}px)`;
		}
	};
	const handleImageModal = (index: number) => {
		if (window.innerWidth <= 1080) return;
		setIsOpenImgModal(true);
		setModalSelectedItem(index);
		document.body.style.overflow = 'hidden';
	};
	return (
		<>
			{Object.keys(item).length !== 0 && (
				<div className="border-t border-[gray]">
					<PageIndex category={item.category} item={item.title} activeCategory={true} />
					<div className="flex h-[700px] max-lg:flex-col max-lg:h-auto">
						<div className="flex-1 max-lg:hidden overflow-y-scroll">
							<div className="grid gap-4 mr-1 ">
								{item.images.map((image: string, index: number) => {
									return (
										<div
											onClick={() => handleImageModal(index)}
											onMouseOver={() => setSelectedItem(index)}
											key={index}
											className={cx('overflow-hidden border rounded-2xl ', {
												'border-black': index === selectedItem,
											})}
										>
											<img
												alt="product"
												className={cx(
													' hover:scale-150 duration-1000 cursor-pointer'
												)}
												src={image}
											/>
										</div>
									);
								})}
							</div>
						</div>
						<div
							onClick={() => handleImageModal(selectedItem)}
							className="flex-[3]   cursor-pointer"
						>
							<img
								alt="product"
								className="border h-full rounded-2xl"
								src={item.images[selectedItem]}
							/>
						</div>
						<div className="flex-1 max-lg:pt-6 hidden max-lg:block overflow-y-scroll  max-lg:overflow-y-hidden">
							<div className="grid gap-4 max-lg:overflow-x-auto max-lg:overflow-y-hidden  max-lg:flex mr-1 ">
								{item.images.map((image: string, index: number) => {
									return (
										<div
											onClick={() => handleImageModal(index)}
											onMouseOver={() => setSelectedItem(index)}
											key={index}
											className={cx(
												' max-lg:w-[calc((100%-2rem)/3)] overflow-hidden flex-none  border rounded-2xl ',
												{
													'border-black': index === selectedItem,
												}
											)}
										>
											<img
												alt="product"
												className={cx(
													' hover:scale-150 duration-1000 cursor-pointer'
												)}
												src={image}
											/>
										</div>
									);
								})}
							</div>
						</div>
						<div className="flex-[4] px-5">
							<div className="border-b  border-[gray] py-5">
								<div className="font-[integral-cf] text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
									{item.title}
								</div>
								<div className="flex items-center">
									<Rating initialValue={item.rating} readonly size={25} />
									<div className="ml-3">{`${item.rating}/5`}</div>
								</div>
								<div className="flex items-center">
									<div className="text-4xl font-semibold my-3 mr-4">
										{`$${(
											(item.price * (100 - item.discountPercentage)) /
											100
										).toFixed(2)}`}
									</div>
									<div className="relative text-4xl  text-[#c4c5c7] my-3 mr-4 ">
										<span className="font-semibold ">{`$${item.price}`}</span>
										<div className="w-[110%] h-[2px] -left-[5%]  absolute top-[54%] bg-[#c4c5c7]"></div>
									</div>
									{item.discountPercentage && (
										<div className="text-[red] font-semibold bg-red-100 h-full p-2 px-5 rounded-3xl">
											{`-${item.discountPercentage}%`}
										</div>
									)}
								</div>
								<div className="text-[#7a7777] text-lg">{item.description}</div>
							</div>
							<div className="border-b  border-[gray] py-5">
								<div className="flex items-center">
									<div className="mr-2">
										<FontAwesomeIcon icon={faCircleInfo} size="xl" />
									</div>
									<div className="pb-2  text-2xl font-[integral-cf]">
										Infomation
									</div>
								</div>
								<div className="flex">
									<div className="">
										<div className="flex items-center font-bold">
											<FontAwesomeIcon icon={faDolly} />
											<div className="flex flex-1 ml-2 justify-between">
												<span>Return Policy</span>
												<span className="mx-1">:</span>
											</div>
										</div>
										<div className="flex items-center font-bold">
											<FontAwesomeIcon icon={faTruckFast} />
											<div className="flex flex-1 ml-2 justify-between">
												<span>Shipping</span>
												<span className="mx-1">:</span>
											</div>
										</div>
										<div className="flex items-center font-bold">
											<FontAwesomeIcon icon={faCircleCheck} />
											<div className="flex flex-1 ml-2 justify-between">
												<span>Warranty</span>
												<span className="mx-1">:</span>
											</div>
										</div>
									</div>
									<div className="">
										<div className="  text-[#7a7777]">{item.returnPolicy}</div>
										<div className="  text-[#7a7777]">
											{item.shippingInformation}
										</div>
										<div className="  text-[#7a7777]">
											{item.warrantyInformation}
										</div>
									</div>
								</div>
							</div>
							<div className="flex justify-between items-center mt-6">
								<ProductCount
									value={1}
									handlerFunc={(productQuantity) => updatecart(productQuantity)}
									productID={item.id}
								/>
								<div
									onClick={handleAddToCart}
									className="bg-black cursor-pointer  text-white text-xl p-4 flex-[0.95] flex justify-center rounded-full"
								>
									Add to Cart
								</div>
							</div>
						</div>
					</div>
					<div className=" my-10 ">
						<div className="border-b cursor-pointer relative flex text-[gray] border-[gray]">
							<div
								onMouseOver={(e) => handleAnimation(e, 0)}
								onClick={() => setActiveTab(0)}
								className={cx(
									'flex-1 flex items-center justify-center text-2xl max-lg:text-xl  pb-5 ',
									{
										'text-black': activeTab === 0,
									}
								)}
							>
								Product Details
							</div>
							<div
								onMouseOver={(e) => handleAnimation(e, 1)}
								onClick={() => setActiveTab(1)}
								className={cx(
									'flex-1 flex items-center justify-center text-2xl max-lg:text-xl max-sm:text-lg  pb-5 ',
									{
										'text-black': activeTab === 1,
									}
								)}
							>
								Rating & Reviews
							</div>
							<div
								onMouseOver={(e) => handleAnimation(e, 2)}
								onClick={() => setActiveTab(2)}
								className={cx(
									'flex-1 flex items-center justify-center text-2xl max-lg:text-xl max-sm:text-lg pb-5 ',
									{
										'text-black': activeTab === 2,
									}
								)}
							>
								FAQs
							</div>
							<div
								ref={lineRef}
								className="absolute duration-1000 w-1/3 h-[2px] bg-black bottom-0 rounded-full"
							></div>
						</div>
						{activeTab === 0 && <ProductDetails />}
						{activeTab === 1 && <ProductReviews />}
						{activeTab === 2 && <FAQ />}
					</div>
					<ProductRecommend category={item.category} />
				</div>
			)}
			{isOpenImgModal && (
				<ImgModal
					item={item}
					modalSelectedItem={modalSelectedItem}
					setModalSelectedItem={setModalSelectedItem}
					setIsOpenImgModal={setIsOpenImgModal}
				/>
			)}
		</>
	);
};

export default ProductPage;
