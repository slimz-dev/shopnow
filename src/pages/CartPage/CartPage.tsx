import PageIndex from '@com/components/PageIndex/PageIndex';
import ProductCount from '@com/components/ProductCount/ProductCount';
import { AuthContext } from '@com/contexts/AuthContext';
import getCart from '@com/services/products/getCart';
import updateCart from '@com/services/products/updateCart';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, useContext, useEffect, useState } from 'react';

type myCartProps = {
	discountedTotal: number;
	id: number;
	products: any[];
	total: number;
	totalProducts: number;
	totalQuantity: number;
	userId: number | undefined;
};
const CartPage = (): JSX.Element => {
	const { user } = useContext(AuthContext);
	const [myCart, setMyCart] = useState<myCartProps>({
		discountedTotal: 0,
		id: 0,
		products: [],
		total: 0,
		totalProducts: 0,
		totalQuantity: 0,
		userId: undefined,
	});
	useEffect(() => {
		const fetchCart = async (id: string) => {
			const result = await getCart(id);
			setMyCart(result);
		};
		if (user.id) {
			fetchCart(user.id);
		}
	}, [user]);

	const updateMyCart = async (productQuantity: number, productID: number) => {
		console.log(productQuantity, productID);
		const result = await updateCart(myCart.id, {
			id: productID,
			quantity: productQuantity,
		});
		console.log(result);
		setMyCart(result);
	};

	return (
		<>
			{myCart.userId && (
				<div className="border-t border-[gray]">
					<PageIndex category="Cart" />
					<div className="font-[integral-cf] text-5xl mb-6">Your cart</div>
					<div className="flex gap-8">
						<div className="rounded-xl overflow-hidden flex-[2]">
							<div className=" h-[500px] rounded-xl overflow-y-scroll  border   px-8  ">
								{myCart.products.map((item) => {
									return (
										<div className=" flex border-b py-8">
											<div className="mr-4">
												<img
													className="border rounded-xl w-32 h-3w-32"
													src={item.thumbnail}
												/>
											</div>
											<div className="flex  justify-between h-32 flex-1">
												<div className="flex flex-col justify-between ">
													<div>
														<div className="font-semibold text-2xl">
															{item.title}
														</div>
													</div>
													<div className="flex">
														<div className="text-2xl font-semibold">{`$${
															item.discountedTotal
																? item.discountedTotal
																: item.discountedPrice
														}`}</div>
														<div className="relative mx-3 text-2xl">
															<span className="text-[#c4c5c7]">
																{(
																	item.price * item.quantity
																).toFixed(2)}
															</span>
															<div className="w-[110%] h-[2px] -left-[5%]  absolute top-[54%] bg-[#c4c5c7]"></div>
														</div>
														<div className="text-[red] font-semibold bg-red-100 h-full p-1 px-3 rounded-3xl">
															{`-${item.discountPercentage}%`}
														</div>
													</div>
												</div>
												<div className="flex flex-col justify-between items-end">
													<FontAwesomeIcon
														size="xl"
														icon={faTrash}
														color="red"
													/>
													<ProductCount
														value={item.quantity}
														productID={item.id}
														handlerFunc={(productQuantity, productID) =>
															updateMyCart(productQuantity, productID)
														}
													/>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>

						<div className="border p-4 rounded-xl flex-1 h-fit">
							<div className="text-2xl font-semibold mb-6">Order Summary</div>
							<div className="border-b">
								<div className="my-4 text-xl flex justify-between items-center">
									<span>Subtotal</span>
									<span className="font-semibold">{`${myCart.total.toFixed(
										2
									)}`}</span>
								</div>
								<div className="my-4 text-xl flex justify-between items-center">
									<span>{`Discount (-${(
										100 -
										(myCart.discountedTotal / myCart.total) * 100
									).toFixed(2)}%)`}</span>
									<span className="text-red-600 font-semibold">{`-$${(
										myCart.total - myCart.discountedTotal
									).toFixed(2)}`}</span>
								</div>
							</div>
							<div className="my-4 text-xl flex justify-between items-center">
								<span>Total</span>
								<span className="font-semibold">{`$${myCart.discountedTotal}`}</span>
							</div>
							<div className="bg-black text-white flex items-center justify-center rounded-full p-6 my-8">
								<div>
									<span className="mr-2">Go to Checkout</span>
									<FontAwesomeIcon size="xl" icon={faArrowRight} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CartPage;
