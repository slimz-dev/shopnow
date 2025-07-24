import { AuthContext } from '@com/contexts/AuthContext';
import updateProfile from '@com/services/users/updateProfile';
import { SetStringType } from '@com/types';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	onChangeAddress: (address: string) => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onChangeAddress }) => {
	const { user } = useContext(AuthContext);
	const [address, setAddress] = useState<string>('');
	const formData = new FormData();
	const handleSubmit = () => {
		const saveProfile = async () => {
			const newAddress: any = {
				address: rawAddress,
				city: rawCity,
				state: rawState,
				country: rawCountry,
			};
			formData.append('id', user.id);
			formData.append('address', JSON.stringify(newAddress));
			const res = await updateProfile(formData);
			if (res) {
				toast.success('Address updated successfully');
				onChangeAddress(address);
			} else {
				toast.error('Error updating profile');
			}
		};
		const [rawAddress = '', rawCity = '', rawState = '', rawCountry = ''] = address
			.split(',')
			.map((part) => part.trim());
		if (!(rawAddress && rawCity && rawState && rawCountry)) {
			toast.error('Please fill with address - city - state - country');
		} else {
			saveProfile();
		}
	};
	useEffect(() => {
		if (user.address) {
			setAddress(
				`${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.country}`
			);
		}
	}, [user]);
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
			<div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-lg">
				{/* Close button */}
				<button
					onClick={onClose}
					className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
				>
					×
				</button>

				<h2 className="text-xl font-semibold mb-4">Update Information</h2>

				<div className="space-y-4">
					<input
						type="text"
						placeholder="Address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
				</div>

				<button
					onClick={handleSubmit}
					className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
				>
					Update
				</button>
			</div>
		</div>
	);
};

export default Modal;
