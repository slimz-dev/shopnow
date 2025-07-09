import getClassname from '@com/utils/getClassname';
import { faAngleRight, faAnglesRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, useState } from 'react';
import styles from './FAQ.module.scss';
const QnA = [
	{
		question: 'What is ShopNow?',
		answer: 'ShopNow is an e-commerce platform offering a wide range of products including furniture, electronics, home appliances, and daily essentials, all in one place.',
	},
	{
		question: 'How do I place an order on ShopNow?',
		answer: 'To place an order, simply browse products, add items to your cart, and proceed to checkout with your preferred payment and delivery details.',
	},
	{
		question: 'What payment methods does ShopNow accept?',
		answer: 'ShopNow accepts credit/debit cards, digital wallets, bank transfers, and cash on delivery in select locations.',
	},
	{
		question: 'Does ShopNow offer free shipping?',
		answer: 'Yes, ShopNow offers free shipping for orders above a certain amount. Shipping fees vary for smaller orders and based on delivery location.',
	},
	{
		question: 'How can I track my order?',
		answer: 'After placing an order, you can track its status from your ShopNow account under "My Orders" or via the tracking link sent to your email.',
	},
	{
		question: 'What is ShopNow’s return policy?',
		answer: 'ShopNow offers a 7–14 day return policy on most products. Items must be unused and returned in original packaging. Some items may not be eligible for return.',
	},
	{
		question: 'How do I contact ShopNow customer service?',
		answer: 'You can reach ShopNow customer service via live chat, email support, or our hotline available on the Contact Us page.',
	},
	{
		question: 'Does ShopNow have a mobile app?',
		answer: 'Yes, ShopNow is available on both iOS and Android platforms for a more convenient shopping experience.',
	},
	{
		question: 'Can I schedule delivery for large items like furniture?',
		answer: 'Yes, ShopNow allows you to choose a preferred delivery slot for large or heavy items such as furniture and appliances.',
	},
	{
		question: 'Does ShopNow offer installment payments?',
		answer: 'Yes, eligible customers can pay in installments through supported banks or third-party finance partners during checkout.',
	},
];

const FAQ = (): JSX.Element => {
	const [showAnswer, setShowAnswer] = useState<number>(0);
	const cx = getClassname(styles);
	return (
		<>
			<div className="max-lg:block flex  py-8  ">
				<div className="flex-1">
					<div className="text-3xl font-semibold mb-2 ">Frequently Asked Questions </div>
					<div className="text-[#626366] text-xl">
						Got questions? We've got answers! Check out our FAQ section to find answers
					</div>
				</div>
				<div className="flex cursor-not-allowed border-[#1a1a1a] w-fit max-lg:mt-4 bg-[black] text-white border h-fit px-6 py-4  rounded-lg">
					Ask a Question
				</div>
			</div>
			<div className={`max-lg:block grid    grid-cols-2  gap-y-8 gap-x-16  `}>
				{QnA.map((subject, index) => {
					return (
						<div className="flex flex-col">
							<div
								key={index}
								className={cx(
									'text-white bg-black max-lg:w-full  border-solid  py-5 px-3 rounded-3xl '
								)}
							>
								<div className={cx('flex items-center justify-between')}>
									<div className="flex items-center">
										<div className="bg-[white] text-black font-semibold p-3 rounded-md mr-2">{`${
											index + 1 <= 9 ? '0' : ''
										}${index + 1}`}</div>
										<div className="font-[integral-cf]">{subject.question}</div>
									</div>
									<div
										onClick={() => setShowAnswer(index + 1)}
										className="w-fit p-2 ml-2 cursor-pointer hover:text-[#3f3a3a]"
									>
										{showAnswer === index + 1 ? (
											<FontAwesomeIcon icon={faMinus} />
										) : (
											<FontAwesomeIcon icon={faPlus} />
										)}
									</div>
								</div>
							</div>
							<div
								className={cx(
									'text-[#464646] font-semibold mt-3  overflow-hidden	 h-0',
									{
										'!h-full': showAnswer === index + 1,
										'duration-[2000ms]': showAnswer === index + 1,
									}
								)}
							>
								<FontAwesomeIcon className="mr-2" icon={faAnglesRight} />
								{subject.answer}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default FAQ;
