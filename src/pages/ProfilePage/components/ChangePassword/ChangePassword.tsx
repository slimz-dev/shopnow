import { JSX } from 'react';

const ChangePassword = (): JSX.Element => {
	return (
		<div>
			<div className="border-b mb-6">
				<h2 className="text-xl font-semibold">Change Password</h2>
				<p className="pb-2 italic">Update your password to keep your account secure.</p>
			</div>
			<div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Current Password
					</label>
					<input
						type="password"
						className="block w-full bg-slate-100 outline-none p-2"
						placeholder="Enter current password"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">New Password</label>
					<input
						type="password"
						className="block w-full bg-slate-100 outline-none p-2"
						placeholder="Enter current password"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">New Password</label>
					<input
						type="password"
						className="block w-full bg-slate-100 outline-none p-2"
						placeholder="Enter current password"
					/>
				</div>
				<div>Confirm</div>
			</div>
		</div>
	);
};
export default ChangePassword;
