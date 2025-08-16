import PageIndex from '@com/components/PageIndex/PageIndex';
import ProductCount from '@com/components/ProductCount/ProductCount';
import { useAppDispatch, useAppSelector } from '@com/redux/hooks';
import { updateCartFromRedux } from '@com/redux/slices/counter/counterSlice';

import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';
import { toast } from 'react-toastify';

const CartPage = (): JSX.Element => {
	const cart = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();
	const updatecart = async (productQuantity: number, productID: number) => {
		dispatch(
			updateCartFromRedux({
				cartID: cart.id,
				updatedItem: {
					id: productID,
					quantity: productQuantity,
				},
			})
		);
	};

	return (
		<>
			{cart.userId && (
				<div className="border-t border-[gray]">
					<PageIndex category="Cart" />
					<div className="font-[integral-cf] text-5xl mb-6 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
						Your cart
					</div>
					<div className="flex gap-8 max-lg:flex-col min-w-[350px]">
						<div className="rounded-xl overflow-hidden flex-[2]">
							<div className=" h-[500px] rounded-xl overflow-y-scroll  border   px-8  ">
								{cart.products.map((item) => {
									return (
										<div className=" flex border-b py-8">
											<div className="mr-4 flex-none">
												<img
													className="border rounded-xl w-32 h-3w-32"
													alt="product thumbnail"
													src={item.thumbnail}
												/>
											</div>
											<div className="flex  justify-between h-32 flex-1">
												<div className="flex flex-col justify-between ">
													<div>
														<div className="font-semibold max-xl:text-xl text-2xl">
															{item.title}
														</div>
													</div>
													<div className="flex">
														<div className="text-2xl font-semibold max-xl:text-xl">{`$${item.discountedTotal}`}</div>
														<div className="relative mx-3 text-2xl max-xl:text-xl">
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
													<div
														onClick={() =>
															toast.warn(
																'Cannot delete cause of API not allow LOL'
															)
														}
														className="cursor-pointer"
													>
														<FontAwesomeIcon
															size="xl"
															icon={faTrash}
															color="red"
														/>
													</div>
													<ProductCount
														value={item.quantity}
														productID={item.id}
														handlerFunc={(productQuantity, productID) =>
															updatecart(productQuantity, productID)
														}
													/>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>

						<div className="border p-4 rounded-xl flex-1 h-fit min-w-[350px] max-[350px]:-mx-[24px]">
							<div className="text-2xl font-semibold mb-6">Order Summary</div>
							<div className="border-b">
								<div className="my-4 text-xl flex justify-between items-center">
									<span>Subtotal</span>
									<span className="font-semibold">{`${cart.total.toFixed(
										2
									)}`}</span>
								</div>
								<div className="my-4 text-xl flex justify-between items-center">
									<span>{`Discount (-${(
										100 -
										(cart.discountedTotal / cart.total) * 100
									).toFixed(2)}%)`}</span>
									<span className="text-red-600 font-semibold">{`-$${(
										cart.total - cart.discountedTotal
									).toFixed(2)}`}</span>
								</div>
							</div>
							<div className="my-4 text-xl flex justify-between items-center">
								<span>Total</span>
								<span className="font-semibold">{`$${cart.discountedTotal}`}</span>
							</div>
							<div
								onClick={() => toast.warn('Feature coming soon')}
								className="bg-black cursor-pointer text-white flex items-center justify-center rounded-full p-6 my-8"
							>
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
