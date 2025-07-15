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
		bankBrand: 'CN Hai Ba Trung',
		bankImage: 'https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-MB-Bank-MBB.png',
	};

	const hiddenAccountNumber = (accountNumber: string) => {
		return `* ${accountNumber.slice(accountNumber.length - 4)}`;
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
						<div className="flex  items-center">
							<div className="h-16">
								<img
									alt="bank"
									className="h-full aspect-square"
									src={bankDetails.bankImage}
								/>
							</div>

							<div className="flex flex-col  justify-between mr-28 ml-6">
								<span className=" mb-4">{bankDetails.bankName}</span>
								<div>
									<div>
										<span className="mr-2">Name:</span>
										<span className="">{bankDetails.accountHolderName}</span>
									</div>
									<div>
										<span className="mr-2">Brand:</span>
										<span className="">{bankDetails.bankBrand}</span>
									</div>
								</div>
							</div>

							<div className="flex items-center">
								{hiddenAccountNumber(bankDetails.accountNumber)}
							</div>
						</div>
						<div className="flex">
							<div className="underline cursor-pointer">Update</div>
							<div className="underline cursor-pointer ml-8">Delete</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Bank;
