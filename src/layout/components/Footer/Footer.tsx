import {
	faCcApplePay,
	faCcMastercard,
	faCcPaypal,
	faCcVisa,
	faFacebookF,
	faGithub,
	faGooglePay,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const footerList = [
	{
		topic: 'company',
		options: [
			{ name: 'About', ref: 'https://www.notion.so/about' },
			{ name: 'Features', ref: 'https://www.dropbox.com/features' },
			{ name: 'Works', ref: 'https://www.behance.net/galleries' },
			{ name: 'Career', ref: 'https://careers.airbnb.com/' },
		],
	},
	{
		topic: 'help',
		options: [
			{ name: 'Customer Support', ref: 'https://support.spotify.com/' },
			{ name: 'Delivery Details', ref: 'https://www.zara.com/us/en/help/shipping' },
			{
				name: 'Terms & Conditions',
				ref: 'https://www.apple.com/legal/internet-services/terms/site.html',
			},
			{ name: 'Privacy Policy', ref: 'https://policies.google.com/privacy' },
		],
	},
	{
		topic: 'faq',
		options: [
			{ name: 'Account', ref: 'https://help.netflix.com/en/node/10421' },
			{ name: 'Manage Deliveries', ref: 'https://www.amazon.com/hz/mycd/delivery' },
			{ name: 'Orders', ref: 'https://www.shein.com/user/orders' },
			{ name: 'Payments', ref: 'https://www.paypal.com/us/webapps/mpp/pay-online' },
		],
	},
	{
		topic: 'resources',
		options: [
			{ name: 'Free eBooks', ref: 'https://www.packtpub.com/free-learning' },
			{ name: 'Development Tutorial', ref: 'https://developer.mozilla.org/en-US/docs/Web' },
			{ name: 'How to - Blog', ref: 'https://www.wix.com/blog' },
			{
				name: 'Youtube Playlist',
				ref: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ',
			},
		],
	},
];

const iconList = [
	{
		icon: faTwitter,
		link: 'https://twitter.com/',
		color: 'black',
		background: 'white',
	},
	{
		icon: faFacebookF,
		link: 'https://www.facebook.com/',
		color: 'white',
		background: 'black',
	},
	{
		icon: faInstagram,
		link: 'https://www.instagram.com/',
		color: 'black',
		background: 'white',
	},
	{
		icon: faGithub,
		link: 'https://github.com/',
		color: 'black',
		background: 'white',
	},
];

const paymentList = [
	{
		icon: faCcVisa,
		color: 'black',
		background: 'white',
		link: 'https://www.visa.com/',
	},
	{
		icon: faCcMastercard,
		color: 'black',
		background: 'white',
		link: 'https://www.mastercard.com/',
	},
	{
		icon: faCcPaypal,
		color: 'black',
		background: 'white',
		link: 'https://www.paypal.com/us/webapps/mpp/pay-online',
	},
	{
		icon: faCcApplePay,
		color: 'black',
		background: 'white',
		link: 'https://www.apple.com/apple-pay/',
	},
	{
		icon: faGooglePay,
		color: 'black',
		background: 'white',
		link: 'https://pay.google.com/intl/en_us/apps/billing',
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
						{iconList.map((icon, index) => {
							return (
								<Link
									to={icon.link}
									key={index}
									className={`rounded-full w-8 h-8 flex items-center justify-center  bg-[${icon.background}] mr-4`}
								>
									<FontAwesomeIcon icon={icon.icon} color={icon.color} />
								</Link>
							);
						})}
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
									<div
										className="text-[gray] cursor-pointer hover:underline mb-4 text-lg"
										key={optionIndex}
									>
										<Link to={element.ref}>{element.name}</Link>
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
					{paymentList.map((icon, index) => {
						return (
							<Link to={icon.link} key={index} className="mr-4">
								<FontAwesomeIcon size="2x" color="black" icon={icon.icon} />
							</Link>
						);
					})}
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
					<div
						onClick={() => toast.warn('Feature coming soon')}
						className="hover:bg-[#353131] hover:text-white cursor-pointer bg-white py-4 font-semibold text-center px-16 rounded-full text-black"
					>
						Subscribe to Newsletter
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
