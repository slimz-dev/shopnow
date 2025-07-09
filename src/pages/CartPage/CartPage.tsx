import PageIndex from '@com/components/PageIndex/PageIndex';
import ProductCount from '@com/components/ProductCount/ProductCount';
import { faArrowRight, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';
const fakeData = [
	{
		id: 82,
		title: 'New DELL XPS 13 9300 Laptop',
		description:
			'The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.',
		category: 'laptops',
		price: 1499.99,
		discountPercentage: 11.89,
		rating: 2.67,
		stock: 74,
		tags: ['laptops'],
		brand: 'Dell',
		sku: 'LAP-DEL-DEL-082',
		weight: 2,
		dimensions: {
			width: 13.76,
			height: 29,
			depth: 21.42,
		},
		warrantyInformation: '2 year warranty',
		shippingInformation: 'Ships in 2 weeks',
		availabilityStatus: 'In Stock',
		reviews: [
			{
				rating: 3,
				comment: 'Poor quality!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Charlotte Lopez',
				reviewerEmail: 'charlotte.lopez@x.dummyjson.com',
			},
			{
				rating: 4,
				comment: 'Very satisfied!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Alice Smith',
				reviewerEmail: 'alice.smith@x.dummyjson.com',
			},
			{
				rating: 2,
				comment: 'Disappointing product!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Ava Taylor',
				reviewerEmail: 'ava.taylor@x.dummyjson.com',
			},
		],
		returnPolicy: '60 days return policy',
		minimumOrderQuantity: 1,
		meta: {
			createdAt: '2025-04-30T09:41:02.053Z',
			updatedAt: '2025-04-30T09:41:02.053Z',
			barcode: '5963805976904',
			qrCode: 'https://cdn.dummyjson.com/public/qr-code.png',
		},
		images: [
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/1.webp',
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/2.webp',
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/3.webp',
		],
		thumbnail:
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp',
	},
	{
		id: 82,
		title: 'New DELL XPS 13 9300 Laptop',
		description:
			'The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.',
		category: 'laptops',
		price: 1499.99,
		discountPercentage: 11.89,
		rating: 2.67,
		stock: 74,
		tags: ['laptops'],
		brand: 'Dell',
		sku: 'LAP-DEL-DEL-082',
		weight: 2,
		dimensions: {
			width: 13.76,
			height: 29,
			depth: 21.42,
		},
		warrantyInformation: '2 year warranty',
		shippingInformation: 'Ships in 2 weeks',
		availabilityStatus: 'In Stock',
		reviews: [
			{
				rating: 3,
				comment: 'Poor quality!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Charlotte Lopez',
				reviewerEmail: 'charlotte.lopez@x.dummyjson.com',
			},
			{
				rating: 4,
				comment: 'Very satisfied!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Alice Smith',
				reviewerEmail: 'alice.smith@x.dummyjson.com',
			},
			{
				rating: 2,
				comment: 'Disappointing product!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Ava Taylor',
				reviewerEmail: 'ava.taylor@x.dummyjson.com',
			},
		],
		returnPolicy: '60 days return policy',
		minimumOrderQuantity: 1,
		meta: {
			createdAt: '2025-04-30T09:41:02.053Z',
			updatedAt: '2025-04-30T09:41:02.053Z',
			barcode: '5963805976904',
			qrCode: 'https://cdn.dummyjson.com/public/qr-code.png',
		},
		images: [
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/1.webp',
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/2.webp',
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/3.webp',
		],
		thumbnail:
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp',
	},
	{
		id: 82,
		title: 'New DELL XPS 13 9300 Laptop',
		description:
			'The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.',
		category: 'laptops',
		price: 1499.99,
		discountPercentage: 11.89,
		rating: 2.67,
		stock: 74,
		tags: ['laptops'],
		brand: 'Dell',
		sku: 'LAP-DEL-DEL-082',
		weight: 2,
		dimensions: {
			width: 13.76,
			height: 29,
			depth: 21.42,
		},
		warrantyInformation: '2 year warranty',
		shippingInformation: 'Ships in 2 weeks',
		availabilityStatus: 'In Stock',
		reviews: [
			{
				rating: 3,
				comment: 'Poor quality!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Charlotte Lopez',
				reviewerEmail: 'charlotte.lopez@x.dummyjson.com',
			},
			{
				rating: 4,
				comment: 'Very satisfied!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Alice Smith',
				reviewerEmail: 'alice.smith@x.dummyjson.com',
			},
			{
				rating: 2,
				comment: 'Disappointing product!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Ava Taylor',
				reviewerEmail: 'ava.taylor@x.dummyjson.com',
			},
		],
		returnPolicy: '60 days return policy',
		minimumOrderQuantity: 1,
		meta: {
			createdAt: '2025-04-30T09:41:02.053Z',
			updatedAt: '2025-04-30T09:41:02.053Z',
			barcode: '5963805976904',
			qrCode: 'https://cdn.dummyjson.com/public/qr-code.png',
		},
		images: [
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/1.webp',
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/2.webp',
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/3.webp',
		],
		thumbnail:
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp',
	},
	{
		id: 82,
		title: 'New DELL XPS 13 9300 Laptop',
		description:
			'The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.',
		category: 'laptops',
		price: 1499.99,
		discountPercentage: 11.89,
		rating: 2.67,
		stock: 74,
		tags: ['laptops'],
		brand: 'Dell',
		sku: 'LAP-DEL-DEL-082',
		weight: 2,
		dimensions: {
			width: 13.76,
			height: 29,
			depth: 21.42,
		},
		warrantyInformation: '2 year warranty',
		shippingInformation: 'Ships in 2 weeks',
		availabilityStatus: 'In Stock',
		reviews: [
			{
				rating: 3,
				comment: 'Poor quality!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Charlotte Lopez',
				reviewerEmail: 'charlotte.lopez@x.dummyjson.com',
			},
			{
				rating: 4,
				comment: 'Very satisfied!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Alice Smith',
				reviewerEmail: 'alice.smith@x.dummyjson.com',
			},
			{
				rating: 2,
				comment: 'Disappointing product!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Ava Taylor',
				reviewerEmail: 'ava.taylor@x.dummyjson.com',
			},
		],
		returnPolicy: '60 days return policy',
		minimumOrderQuantity: 1,
		meta: {
			createdAt: '2025-04-30T09:41:02.053Z',
			updatedAt: '2025-04-30T09:41:02.053Z',
			barcode: '5963805976904',
			qrCode: 'https://cdn.dummyjson.com/public/qr-code.png',
		},
		images: [
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/1.webp',
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/2.webp',
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/3.webp',
		],
		thumbnail:
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp',
	},
	{
		id: 82,
		title: 'New DELL XPS 13 9300 Laptop',
		description:
			'The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.',
		category: 'laptops',
		price: 1499.99,
		discountPercentage: 11.89,
		rating: 2.67,
		stock: 74,
		tags: ['laptops'],
		brand: 'Dell',
		sku: 'LAP-DEL-DEL-082',
		weight: 2,
		dimensions: {
			width: 13.76,
			height: 29,
			depth: 21.42,
		},
		warrantyInformation: '2 year warranty',
		shippingInformation: 'Ships in 2 weeks',
		availabilityStatus: 'In Stock',
		reviews: [
			{
				rating: 3,
				comment: 'Poor quality!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Charlotte Lopez',
				reviewerEmail: 'charlotte.lopez@x.dummyjson.com',
			},
			{
				rating: 4,
				comment: 'Very satisfied!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Alice Smith',
				reviewerEmail: 'alice.smith@x.dummyjson.com',
			},
			{
				rating: 2,
				comment: 'Disappointing product!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Ava Taylor',
				reviewerEmail: 'ava.taylor@x.dummyjson.com',
			},
		],
		returnPolicy: '60 days return policy',
		minimumOrderQuantity: 1,
		meta: {
			createdAt: '2025-04-30T09:41:02.053Z',
			updatedAt: '2025-04-30T09:41:02.053Z',
			barcode: '5963805976904',
			qrCode: 'https://cdn.dummyjson.com/public/qr-code.png',
		},
		images: [
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/1.webp',
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/2.webp',
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/3.webp',
		],
		thumbnail:
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp',
	},
	{
		id: 82,
		title: 'New DELL XPS 13 9300 Laptop',
		description:
			'The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.',
		category: 'laptops',
		price: 1499.99,
		discountPercentage: 11.89,
		rating: 2.67,
		stock: 74,
		tags: ['laptops'],
		brand: 'Dell',
		sku: 'LAP-DEL-DEL-082',
		weight: 2,
		dimensions: {
			width: 13.76,
			height: 29,
			depth: 21.42,
		},
		warrantyInformation: '2 year warranty',
		shippingInformation: 'Ships in 2 weeks',
		availabilityStatus: 'In Stock',
		reviews: [
			{
				rating: 3,
				comment: 'Poor quality!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Charlotte Lopez',
				reviewerEmail: 'charlotte.lopez@x.dummyjson.com',
			},
			{
				rating: 4,
				comment: 'Very satisfied!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Alice Smith',
				reviewerEmail: 'alice.smith@x.dummyjson.com',
			},
			{
				rating: 2,
				comment: 'Disappointing product!',
				date: '2025-04-30T09:41:02.053Z',
				reviewerName: 'Ava Taylor',
				reviewerEmail: 'ava.taylor@x.dummyjson.com',
			},
		],
		returnPolicy: '60 days return policy',
		minimumOrderQuantity: 1,
		meta: {
			createdAt: '2025-04-30T09:41:02.053Z',
			updatedAt: '2025-04-30T09:41:02.053Z',
			barcode: '5963805976904',
			qrCode: 'https://cdn.dummyjson.com/public/qr-code.png',
		},
		images: [
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/1.webp',
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/2.webp',
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/3.webp',
		],
		thumbnail:
			'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp',
	},
];
const CartPage = (): JSX.Element => {
	return (
		<div className="border-t border-[gray]">
			<PageIndex category="Cart" />
			<div className="font-[integral-cf] text-5xl mb-6">Your cart</div>
			<div className="flex gap-8">
				<div className="rounded-xl overflow-hidden flex-[2]">
					<div className=" h-[500px] rounded-xl overflow-y-scroll  border   px-8  ">
						{fakeData.map((item) => {
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
												<div>
													<span>Brand:</span>
													<span className="ml-2 text-[gray]">
														{item.brand}
													</span>
												</div>
												<div>
													<span>Stock:</span>
													<span className="ml-2 text-[gray]">
														{item.stock}
													</span>
												</div>
											</div>
											<div className="flex">
												<div className="text-2xl font-semibold">{`$${item.price}`}</div>
												<div className="relative mx-3 text-2xl">
													<span className="text-[#c4c5c7]">
														{item.price}
													</span>
													<div className="w-[110%] h-[2px] -left-[5%]  absolute top-[54%] bg-[#c4c5c7]"></div>
												</div>
												<div className="text-[red] font-semibold bg-red-100 h-full p-1 px-3 rounded-3xl">
													{`-${item.discountPercentage}%`}
												</div>
											</div>
										</div>
										<div className="flex flex-col justify-between items-end">
											<FontAwesomeIcon size="xl" icon={faTrash} color="red" />
											<ProductCount />
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
							<span className="font-semibold">$545</span>
						</div>
						<div className="my-4 text-xl flex justify-between items-center">
							<span>Discount (-20%)</span>
							<span className="text-red-600 font-semibold">-$545</span>
						</div>
					</div>
					<div className="my-4 text-xl flex justify-between items-center">
						<span>Total</span>
						<span className="font-semibold">$467</span>
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
	);
};

export default CartPage;
