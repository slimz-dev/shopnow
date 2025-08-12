import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, useEffect, useState } from 'react';

type productCountProps = {
	value: number;
	handlerFunc?: (productQuantity: number, productID: number) => void;
	productID?: number;
};

const ProductCount = ({ value, handlerFunc, productID }: productCountProps): JSX.Element => {
	const [count, setCount] = useState<number>(value);
	useEffect(() => {
		setCount(value);
	}, [value]);
	const handleCount = (countType: number) => {
		if (countType) {
			setCount((prev) => {
				if (handlerFunc && productID) {
					handlerFunc(prev + 1, productID);
				}
				return prev + 1;
			});
		} else {
			setCount((prev) => {
				if (handlerFunc && productID) {
					handlerFunc(prev === 1 ? 1 : prev - 1, productID);
				}
				return prev === 1 ? 1 : prev - 1;
			});
		}
	};

	return (
		<div className="p-2 px-4 rounded-full max-xl:px-2 bg-[#eeeeee] flex items-center justify-between">
			<FontAwesomeIcon
				onClick={() => handleCount(0)}
				className="cursor-pointer"
				size="lg"
				icon={faMinus}
			/>
			<span className="mx-8 select-none text-lg">{count}</span>
			<FontAwesomeIcon
				onClick={() => handleCount(1)}
				className="cursor-pointer"
				size="lg"
				icon={faPlus}
			/>
		</div>
	);
};

export default ProductCount;
