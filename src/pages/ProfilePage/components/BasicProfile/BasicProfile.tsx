import { AuthContext } from '@com/contexts/AuthContext';
import { JSX, useContext } from 'react';

const BasicProfile = (): JSX.Element => {
	const { user } = useContext(AuthContext);
	const getDate = (date: string): string => {
		const d = new Date(date);
		const year = d.getFullYear();
		const month = String(d.getMonth() + 1).padStart(2, '0');
		const day = String(d.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	};
	return (
		<>
			<h2 className="text-xl font-semibold ">My Profile</h2>
			<h3 className="  border-b pb-2 mb-6 italic">
				Manage your profile to enhance account security and personalize your experience
			</h3>
			<form className="flex ">
				<div className="grid flex-[2]  grid-cols-1 mr-8 gap-6">
					<div className="flex items-center justify-end">
						<label className="block text-sm font-medium text-gray-700">Username</label>
						<input
							type="text"
							className=" block w-[70%] ml-3 bg-slate-100 outline-none  p-2"
							value={user.username}
							readOnly
						/>
					</div>

					<div className="flex items-center justify-end ">
						<label className="block text-sm font-medium text-gray-700">
							First Name
						</label>
						<input
							type="text"
							className=" block w-[70%] ml-3  border border-gray-300 rounded-md p-2"
							placeholder="Enter full name"
							value={user.firstName}
						/>
					</div>
					<div className="flex items-center justify-end ">
						<label className="block text-sm font-medium text-gray-700">
							Maiden Name
						</label>
						<input
							type="text"
							className=" block w-[70%] ml-3  border border-gray-300 rounded-md p-2"
							placeholder="Enter full name"
							value={user.maidenName}
						/>
					</div>
					<div className="flex items-center justify-end ">
						<label className="block text-sm font-medium text-gray-700">Last Name</label>
						<input
							type="text"
							className=" block w-[70%] ml-3  border border-gray-300 rounded-md p-2"
							placeholder="Enter full name"
							value={user.lastName}
						/>
					</div>

					<div className="flex items-center justify-end">
						<label className="block text-sm font-medium text-gray-700">Email</label>
						<div className="w-[70%] ml-3 flex items-center ">
							<input
								type="email"
								className=" block bg-slate-100 w-full outline-none rounded-md p-2"
								placeholder="you@example.com"
								value={user.email}
								readOnly
							/>
							<div className="text-blue-700 cursor-pointer underline ml-2">
								Change
							</div>
						</div>
					</div>

					<div className="flex items-center justify-end">
						<label className="block text-sm font-medium text-gray-700">Tel</label>
						<div className="w-[70%] ml-3 flex items-center ">
							<input
								type="tel"
								className=" w-full bg-slate-100  outline-none rounded-md p-2"
								placeholder="you@example.com"
								value={user.phone}
								readOnly
							/>
							<div className="text-blue-700 cursor-pointer underline ml-2">
								Change
							</div>
						</div>
					</div>

					<div className="flex items-center justify-end">
						<label className="block text-sm font-medium text-gray-700">Gender</label>
						<div className="w-[70%] ml-3 flex items-center">
							<div className="flex mr-3">
								<input
									type="radio"
									name="gender"
									className="mr-2  block w-[70%]  border border-gray-300 rounded-md p-2"
									value="Male"
									checked={user.gender === 'male'}
								/>
								<label>Male</label>
							</div>
							<div className="flex mr-3">
								<input
									type="radio"
									name="gender"
									className="mr-2  block w-[70%]  border border-gray-300 rounded-md p-2"
									value="Female"
									checked={user.gender === 'female'}
								/>
								<label>Female</label>
							</div>
							<div className="flex mr-3">
								<input
									type="radio"
									name="gender"
									className="mr-2  block w-[70%]  border border-gray-300 rounded-md p-2"
									value="Other"
									checked={user.gender === 'other'}
								/>
								<label>Other</label>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-end ">
						<label className="block text-sm font-medium text-gray-700">
							Date of Birth
						</label>
						<input
							type="date"
							className=" block w-[70%] ml-3 border border-gray-300 rounded-md p-2"
							value={getDate(user.birthDate)}
						/>
					</div>
					<div className="pt-4 w-[70%]  flex flex-row-reverse">
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
								src={user.image}
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
		</>
	);
};

export default BasicProfile;
