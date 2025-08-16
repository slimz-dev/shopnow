import { AuthContext } from '@com/contexts/AuthContext';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, useContext, useState } from 'react';
import Modal from './components/updateModal';

const Address = (): JSX.Element => {
	const { user } = useContext(AuthContext);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [newAddress, setNewAddress] = useState<string>('');
	return (
		<div>
			<div className="flex items-center justify-between border-b mb-6">
				<div>
					<h2 className="text-xl font-semibold">Address Details</h2>
					<h3 className=" pb-2  italic">
						Manage your address details to ensure accurate delivery and billing
						information
					</h3>
				</div>
			</div>
			<div className="flex flex-wrap items-center justify-between">
				<div>
					<div className="flex  items-center mb-4">
						<div className="border-r border-blue-200 pr-3 mr-3">{user.firstName}</div>
						<div className="text-[#8b8b8b] text-sm">{user.phone}</div>
					</div>
					<div className="text-[#8b8b8b] text-sm">
						<div>{newAddress ? newAddress.split(',')[0] : user.address.address}</div>
						<div>
							{newAddress
								? `
										${newAddress.split(',')[1]}, 
										${newAddress.split(',')[2]},
										${newAddress.split(',')[3]}
								  `
								: `${user.address.city}, ${user.address.state}, ${user.address.country}`}
						</div>
					</div>
				</div>
				<div onClick={() => setIsOpen(true)} className="text-blue-500 cursor-pointer">
					Update
				</div>
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					onChangeAddress={(address) => setNewAddress(address)}
				/>
			</div>
		</div>
	);
};

export default Address;
