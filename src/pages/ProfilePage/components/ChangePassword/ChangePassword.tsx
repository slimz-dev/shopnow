import { SetBooleanType } from '@com/types';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { JSX, useState } from 'react';

const ChangePassword = (): JSX.Element => {
	const cl = classNames;
	const [isHiddenCurrentPassword, setisHiddenCurrentPassword] = useState<boolean>(true);
	const [isHiddenNewPassword, setIsHiddenNewPassword] = useState<boolean>(true);
	const [isHiddenConfirmPassword, setIsHiddenConfirmPassword] = useState<boolean>(true);
	const [currentPassword, setCurrentPassword] = useState<string>('');
	const [newPassword, setNewPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const handleChangeHiddenState = (setState: SetBooleanType) => setState((prev) => !prev);
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		switch (e.target.name) {
			case 'currentPassword':
				setCurrentPassword(e.target.value);
				break;
			case 'newPassword':
				setNewPassword(e.target.value);
				break;
			case 'confirmPassword':
				setConfirmPassword(e.target.value);
				break;
			default:
				break;
		}
	};
	return (
		<div>
			<div className="border-b mb-6">
				<h2 className="text-xl font-semibold">Change Password</h2>
				<p className="pb-2 italic">Update your password to keep your account secure.</p>
			</div>
			<div className="w-[500px] mx-auto">
				<div className="flex items-center mb-4 justify-end">
					<label className="block text-sm mr-6 font-medium text-gray-700">
						Current Password
					</label>
					<div className="relative w-[70%]">
						<input
							type={isHiddenCurrentPassword ? 'password' : 'text'}
							className="block w-full border bg-slate-100 outline-none p-2"
							placeholder="Enter current password"
							value={currentPassword}
							name="currentPassword"
							onChange={(e) => handleChangePassword(e)}
						/>
						<div
							onClick={() => handleChangeHiddenState(setisHiddenCurrentPassword)}
							className="absolute right-4 top-1/4"
						>
							{isHiddenCurrentPassword ? (
								<FontAwesomeIcon icon={faEyeSlash} />
							) : (
								<FontAwesomeIcon icon={faEye} />
							)}
						</div>
					</div>
				</div>
				<div className="flex items-center mb-4 justify-end">
					<label className="block text-sm mr-6 font-medium text-gray-700">
						New Password
					</label>
					<div className="w-[70%] relative">
						<input
							type={isHiddenNewPassword ? 'password' : 'text'}
							className="block w-full border bg-slate-100 outline-none p-2"
							placeholder="Enter current password"
							value={newPassword}
							name="newPassword"
							onChange={(e) => handleChangePassword(e)}
						/>
						<div
							onClick={() => handleChangeHiddenState(setIsHiddenNewPassword)}
							className="absolute right-4 top-1/4"
						>
							{isHiddenNewPassword ? (
								<FontAwesomeIcon icon={faEyeSlash} />
							) : (
								<FontAwesomeIcon icon={faEye} />
							)}
						</div>
					</div>
				</div>
				<div className="flex items-center mb-4 justify-end">
					<label className="block text-sm mr-6 font-medium text-gray-700">
						Confirm Password
					</label>
					<div className="w-[70%] relative">
						<input
							type={isHiddenConfirmPassword ? 'password' : 'text'}
							className="block w-full border bg-slate-100 outline-none p-2"
							placeholder="Enter current password"
							value={confirmPassword}
							name="confirmPassword"
							onChange={(e) => handleChangePassword(e)}
						/>
						<div
							onClick={() => handleChangeHiddenState(setIsHiddenConfirmPassword)}
							className="absolute right-4 top-1/4"
						>
							{isHiddenConfirmPassword ? (
								<FontAwesomeIcon icon={faEyeSlash} />
							) : (
								<FontAwesomeIcon icon={faEye} />
							)}
						</div>
					</div>
				</div>
				<div className="flex  flex-row-reverse flex-1">
					<div className="w-[70%] ">
						<div
							className={cl('w-fit bg-orange-500  p-2 px-6 text-white rounded-sm', {
								'opacity-55': true,
							})}
						>
							Confirm
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ChangePassword;
