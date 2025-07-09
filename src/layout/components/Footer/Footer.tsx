import {
	faCcApplePay,
	faCcMastercard,
	faCcPaypal,
	faCcVisa,
	faFacebook,
	faFacebookF,
	faGithub,
	faGooglePay,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMailForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';

const footerList = [
	{
		topic: 'company',
		options: [
			{
				name: 'About',
			},
			{
				name: 'Features',
			},
			{
				name: 'Works',
			},
			{
				name: 'Career',
			},
		],
	},
	{
		topic: 'help',
		options: [
			{
				name: 'Customer Support',
			},
			{
				name: 'Delivery Details',
			},
			{
				name: 'Terms & Conditions',
			},
			{
				name: 'Privacy Policy',
			},
		],
	},
	{
		topic: 'faq',
		options: [
			{
				name: 'Account',
			},
			{
				name: 'Manage Deliveries',
			},
			{
				name: 'Orders',
			},
			{
				name: 'Payments',
			},
		],
	},
	{
		topic: 'resources',
		options: [
			{
				name: 'Free eBooks',
			},
			{
				name: 'Development Tutorial',
			},
			{
				name: 'How to - Blog',
			},
			{
				name: 'Youtube Playlist',
			},
		],
	},
];

const Footer = (): JSX.Element => {
	return (
		<div className="px-20 bg-[#f0f0f0] relative pt-32 pb-10">
			<div className="flex gap-12 pb-10 border-b border-[#c5c5c5]">
				<div className="flex-[1.5] flex flex-col ">
					<div style={{ lineHeight: '80px' }} className=" font-[integral-cf] text-3xl">
						shopnow
					</div>
					<div className="text-[gray] flex-1 w-2/3">
						We have clothes that suits your style and which you're proud to wear. From
						women to men.
					</div>
					<div className="flex  mb-5">
						<div className="rounded-full w-8 h-8 flex items-center justify-center  bg-[white] mr-4">
							<FontAwesomeIcon icon={faTwitter} />
						</div>

						<div className="rounded-full w-8 h-8  flex items-center justify-center  bg-[black] mr-4">
							<FontAwesomeIcon icon={faFacebookF} color="white" />
						</div>
						<div className="rounded-full w-8 h-8 flex items-center justify-center  bg-[white] mr-4">
							<FontAwesomeIcon icon={faInstagram} />
						</div>
						<div className="rounded-full w-8 h-8 flex items-center justify-center  bg-[white] mr-4">
							<FontAwesomeIcon icon={faGithub} />
						</div>
					</div>
				</div>
				{footerList.map((list, index) => {
					return (
						<div key={index} className="flex-1">
							<div
								style={{ lineHeight: '80px' }}
								className="text-lg font-semibold uppercase"
							>
								{list.topic}
							</div>
							{list.options.map((element, optionIndex) => {
								return (
									<div className="text-[gray] mb-4 text-lg" key={optionIndex}>
										{element.name}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
			<div className="flex justify-between mt-6 text-[gray]">
				<div>ShopNow © 2000-2021, All rights reserved</div>
				<div className="flex">
					<div className="mr-4">
						<FontAwesomeIcon size="2x" color="black" icon={faCcVisa} />
					</div>
					<div className="mr-4">
						<FontAwesomeIcon size="2x" color="black" icon={faCcMastercard} />
					</div>
					<div className="mr-4">
						<FontAwesomeIcon size="2x" color="black" icon={faCcPaypal} />
					</div>
					<div className="mr-4">
						<FontAwesomeIcon size="2x" color="black" icon={faCcApplePay} />
					</div>
					<div className="mr-4">
						<FontAwesomeIcon size="2x" color="black" icon={faGooglePay} />
					</div>
				</div>
			</div>
			<div
				style={{ transform: 'translateY(-50%)' }}
				className="absolute   left-20 top-0 right-20 flex justify-between bg-black text-white p-10 px-20 rounded-xl"
			>
				<div className="font-[integral-cf] text-5xl w-[44%]">
					Stay upto date about our latest offers
				</div>
				<div className="w-[30%]">
					<div className="bg-white flex py-4 mb-4 px-8 pr-16 rounded-full">
						<FontAwesomeIcon color="gray" icon={faEnvelope} size="xl" />
						<input
							className=" flex-1 ml-3 outline-none text-black"
							placeholder="Enter your email address"
						/>
					</div>
					<div className="hover:bg-[#353131] hover:text-white cursor-pointer bg-white py-4 font-semibold text-center px-16 rounded-full text-black">
						Subscribe to Newsletter
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
