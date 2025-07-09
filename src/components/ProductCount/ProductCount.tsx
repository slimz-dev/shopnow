import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, useState } from 'react';

const ProductCount = (): JSX.Element => {
	const [count, setCount] = useState<number>(1);
	const handleCount = (countType: number) => {
		if (countType) {
			console.log(countType);
			setCount((prev) => prev + 1);
		} else {
			setCount((prev) => prev - 1);
		}
	};
	return (
		<div className="p-2 px-4 rounded-full bg-[#eeeeee] flex items-center justify-between">
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
