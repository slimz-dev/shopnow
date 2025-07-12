import { AuthContext } from '@com/contexts/AuthContext';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, useContext } from 'react';

const Bank = (): JSX.Element => {
	const { user } = useContext(AuthContext);
	const bankDetails = {
		cardExpired: user.bank.cardExpire,
		accountNumber: user.bank.cardNumber,
		accountHolderName: user.firstName,
		bankName: 'MB - NHTMCP QUAN DOI',
		bankImage: 'https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-MB-Bank-MBB.png',
	};
	return (
		<>
			<div className="flex items-center justify-between border-b mb-6">
				<div>
					<h2 className="text-xl font-semibold">Bank Details</h2>
					<h3 className="border-b pb-2  italic">
						Manage your bank details to facilitate transactions and payments
					</h3>
				</div>
				<div className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center cursor-pointer hover:bg-blue-600">
					<FontAwesomeIcon icon={faPlus} />
					<span className="ml-3">Add new card</span>
				</div>
			</div>
			<div>
				{Object.keys(user.bank).length === 0 ? (
					<div className="flex justify-center items-center flex-col">
						<p className="text-gray-500">No bank details added yet.</p>
						<p className="text-gray-500">
							Please add your bank details to proceed with transactions.
						</p>
					</div>
				) : (
					<div className="flex items-center justify-between ">
						<div className="flex items-center">
							<div>
								<img alt="bank" className="w-16 h-16" src={bankDetails.bankImage} />
							</div>
							<div>
								<div className="flex flex-col ">
									<span className="font-semibold">{bankDetails.bankName}</span>
									<div>
										<span>Name:</span>
										<span className="font-semibold">
											{bankDetails.accountHolderName}
										</span>
									</div>
								</div>
							</div>
							<div>{bankDetails.accountNumber}</div>
						</div>
						<div>Delete</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Bank;
