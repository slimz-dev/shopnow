import { useEffect, useState } from 'react';

interface UseIncreaseProps {
	from: number;
	to: number;
	time: number; // total time in milliseconds
}

const useIncrease = ({ from, to, time }: UseIncreaseProps) => {
	const [value, setValue] = useState(from);

	useEffect(() => {
		const steps = 100;
		const stepTime = time / steps;
		const stepAmount = (to - from) / steps;
		let count = 0;
		const interval = setInterval(() => {
			count++;
			if (count >= steps) {
				setValue(to);
				clearInterval(interval);
			} else {
				setValue((prev) => {
					return prev + stepAmount;
				});
			}
		}, stepTime);

		return () => clearInterval(interval);
	}, [from, to, time]);

	return value;
};

export default useIncrease;
