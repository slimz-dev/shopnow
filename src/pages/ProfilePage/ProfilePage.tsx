import React, { JSX } from 'react';
import ProfileSidebar from './components/ProfileSidebar/ProfileSidebar';

const ProfilePage = (): JSX.Element => {
	return (
		<div className="flex mx-auto max-w-4xl mt-6">
			<ProfileSidebar />
			<div className="  p-6 bg-slate-100 shadow rounded-md ">
				<h2 className="text-xl font-semibold ">My Profile</h2>
				<h3 className="  border-b pb-2 mb-6 italic">
					Manage your profile to enhance account security and personalize your experience
				</h3>
				<form className="flex ">
					<div className="grid flex-[2]  grid-cols-1 mr-8 gap-6">
						<div className="flex items-center space-x-4">
							<label className="block text-sm font-medium text-gray-700">
								Username
							</label>
							<input
								type="text"
								className="mt-1 block w-full border border-gray-300 rounded-md p-2"
								value="john_doe"
								readOnly
							/>
						</div>

						<div className="flex items-center space-x-4">
							<label className="block text-sm font-medium text-gray-700">
								Full Name
							</label>
							<input
								type="text"
								className="mt-1 block w-full border border-gray-300 rounded-md p-2"
								placeholder="Enter full name"
							/>
						</div>

						<div className="flex items-center space-x-4">
							<label className="block text-sm font-medium text-gray-700">Email</label>
							<input
								type="email"
								className="mt-1 block w-full border border-gray-300 rounded-md p-2"
								placeholder="you@example.com"
							/>
						</div>

						<div className="flex items-center space-x-4">
							<label className="block text-sm font-medium text-gray-700">
								Phone Number
							</label>
							<input
								type="tel"
								className="mt-1 block w-full border border-gray-300 rounded-md p-2"
								placeholder="+1234567890"
							/>
						</div>

						<div className="flex items-center space-x-4">
							<label className="block text-sm font-medium text-gray-700">
								Gender
							</label>
							<select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
								<option value="">Select gender</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
							</select>
						</div>

						<div className="flex items-center space-x-4">
							<label className="block text-sm font-medium text-gray-700">
								Date of Birth
							</label>
							<input
								type="date"
								className="mt-1 block w-full border border-gray-300 rounded-md p-2"
							/>
						</div>
						<div className="pt-4">
							<button
								type="submit"
								className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
							>
								Save Changes
							</button>
						</div>
					</div>
					<div className="flex flex-1 justify-center   ">
						<div className="border-l px-16 h-fit">
							<div className="w-full mb-4 mt-8 flex items-center justify-center  rounded-full bg-gray-200 overflow-hidden">
								<img
									src="https://via.placeholder.com/100"
									alt="Avatar"
									className="w-full aspect-square object-cover"
								/>
							</div>
							<button
								type="button"
								className="mt-2 text-sm text-blue-600 hover:underline"
							>
								Change Profile Picture
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProfilePage;
