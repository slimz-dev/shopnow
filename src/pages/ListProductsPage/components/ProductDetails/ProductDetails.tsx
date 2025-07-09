import { JSX } from 'react';

const ProductDetails = (): JSX.Element => {
	return (
		<div className="">
			<div className="pt-8 space-y-6">
				<p className="text-lg text-gray-700 leading-relaxed">
					This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
					breathable fabric, it offers superior comfort and style
				</p>
				<div className="grid grid-cols-2 gap-4 text-lg text-gray-600 pt-4">
					<div>
						<span className="font-medium text-gray-800">Brand:</span> Sony
					</div>
					<div>
						<span className="font-medium text-gray-800">Model:</span> WF-C700N
					</div>
					<div>
						<span className="font-medium text-gray-800">Color:</span> Black
					</div>
					<div>
						<span className="font-medium text-gray-800">Category:</span> Audio
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
