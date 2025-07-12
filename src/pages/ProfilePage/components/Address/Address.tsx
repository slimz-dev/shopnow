import { AuthContext } from '@com/contexts/AuthContext';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, useContext } from 'react';

const Address = (): JSX.Element => {
	const { user } = useContext(AuthContext);
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
				<div className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center cursor-pointer hover:bg-blue-600">
					<FontAwesomeIcon icon={faPlus} />
					<span className="ml-3">Add new address</span>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<div>
					<div className="flex justify-between items-center mb-4">
						<div>{user.firstName}</div>
						<div>{user.phone}</div>
					</div>
					<div>
						<div>{user.address.address}</div>
						<div>{`${user.address.city}, ${user.address.state}, ${user.address.country}`}</div>
					</div>
				</div>
				<div>Update</div>
			</div>
		</div>
	);
};

export default Address;
