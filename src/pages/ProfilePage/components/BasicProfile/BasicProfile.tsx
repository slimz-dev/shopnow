import { AuthContext } from '@com/contexts/AuthContext';
import updateProfile from '@com/services/users/updateProfile';
import { ChangeEvent, JSX, useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

const BasicProfile = (): JSX.Element => {
	const { user } = useContext(AuthContext);
	const [image, setImage] = useState<string | undefined>(undefined);
	const formData = new FormData();
	const [userInfo, setUserInfo] = useState({
		id: '',
		firstName: '',
		maidenName: '',
		lastName: '',
		email: '',
		phone: '',
		gender: '',
		birthDate: '',
	});
	useEffect(() => {
		if (user) {
			setUserInfo({
				id: user.id,
				firstName: user.firstName,
				maidenName: user.maidenName,
				lastName: user.lastName,
				email: user.email,
				phone: user.phone,
				gender: user.gender,
				birthDate: user.birthDate,
			});
		}
	}, [user]);
	const fileRef = useRef<HTMLInputElement>(null);
	const getDate = (date: string): string => {
		const d = new Date(date);
		const year = d.getFullYear();
		const month = String(d.getMonth() + 1).padStart(2, '0');
		const day = String(d.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	};

	const handleChangeImage = (): void => {
		if (fileRef.current) {
			fileRef.current.click();
		}
	};

	const handleChangeUserInfo = (e: ChangeEvent<HTMLInputElement>): void => {
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.onload = () => {
				setImage(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSaveChanges = (): void => {
		if (
			userInfo.id &&
			userInfo.firstName &&
			userInfo.lastName &&
			userInfo.email &&
			userInfo.phone &&
			userInfo.birthDate
		) {
			const saveProfile = async () => {
				if (fileRef.current!.files![0]) {
					formData.append('image', fileRef.current!.files![0]);
				}
				formData.append('id', userInfo.id);
				formData.append('firstName', userInfo.firstName);
				formData.append('maidenName', userInfo.maidenName);
				formData.append('lastName', userInfo.lastName);
				formData.append('email', userInfo.email);
				formData.append('phone', userInfo.phone);
				formData.append('gender', userInfo.gender);
				formData.append('birthDate', userInfo.birthDate);
				const res = await updateProfile(formData);
				if (res) {
					toast.success('Profile updated successfully');
				} else {
					toast.error('Error updating profile');
				}
			};

			saveProfile();
		} else {
			toast.error('Missing fields');
		}
	};
	return (
		<>
			<h2 className="text-xl font-semibold ">My Profile</h2>
			<h3 className="  border-b pb-2 mb-6 italic">
				Manage your profile to enhance account security and personalize your experience
			</h3>
			<form className="flex flex-wrap">
				<div className="grid flex-[2] max-xl:flex-none  grid-cols-1 mr-8 gap-6">
					<div className="flex items-center justify-end">
						<label className="block text-sm font-medium text-gray-700">Username</label>
						<input
							type="text"
							className=" block w-[60%] ml-3 bg-slate-100 outline-none  p-2"
							value={user.username || 'username'}
							readOnly
						/>
					</div>

					<div className="flex items-center justify-end ">
						<label className="block text-sm font-medium text-gray-700">
							First Name
						</label>
						<input
							onChange={(e) => handleChangeUserInfo(e)}
							type="text"
							name="firstName"
							className=" block w-[60%] ml-3  border border-gray-300 rounded-md p-2"
							placeholder="Enter first name"
							value={userInfo.firstName}
						/>
					</div>
					<div className="flex items-center justify-end ">
						<label className="block text-sm font-medium text-gray-700">
							Maiden Name
						</label>
						<input
							onChange={(e) => handleChangeUserInfo(e)}
							type="text"
							name="maidenName"
							className=" block w-[60%] ml-3  border border-gray-300 rounded-md p-2"
							placeholder="Enter maiden name"
							value={userInfo.maidenName}
						/>
					</div>
					<div className="flex items-center justify-end ">
						<label className="block text-sm font-medium text-gray-700">Last Name</label>
						<input
							onChange={(e) => handleChangeUserInfo(e)}
							type="text"
							name="lastName"
							className=" block w-[60%] ml-3  border border-gray-300 rounded-md p-2"
							placeholder="Enter last name"
							value={userInfo.lastName}
						/>
					</div>

					<div className="flex items-center justify-end ">
						<label className="block text-sm font-medium text-gray-700">Email</label>
						<input
							onChange={(e) => handleChangeUserInfo(e)}
							type="text"
							name="email"
							className=" block w-[60%] ml-3  border border-gray-300 rounded-md p-2"
							placeholder="Enter email"
							value={userInfo.email}
						/>
					</div>

					<div className="flex items-center justify-end ">
						<label className="block text-sm font-medium text-gray-700">Tel</label>
						<input
							onChange={(e) => handleChangeUserInfo(e)}
							type="text"
							name="phone"
							className=" block w-[60%] ml-3  border border-gray-300 rounded-md p-2"
							placeholder="Enter your phone"
							value={userInfo.phone}
						/>
					</div>

					<div className="flex items-center justify-end">
						<label className="block text-sm font-medium text-gray-700">Gender</label>
						<div className="w-[60%] ml-3 flex items-center">
							<div className="flex mr-3">
								<input
									onChange={(e) => handleChangeUserInfo(e)}
									type="radio"
									name="gender"
									className="mr-2  block w-[60%]  border border-gray-300 rounded-md p-2"
									value="male"
									checked={userInfo.gender === 'male'}
								/>
								<label>Male</label>
							</div>
							<div className="flex mr-3">
								<input
									onChange={(e) => handleChangeUserInfo(e)}
									type="radio"
									name="gender"
									className="mr-2  block w-[60%]  border border-gray-300 rounded-md p-2"
									value="female"
									checked={userInfo.gender === 'female'}
								/>
								<label>Female</label>
							</div>
							<div className="flex mr-3">
								<input
									onChange={(e) => handleChangeUserInfo(e)}
									type="radio"
									name="gender"
									className="mr-2  block w-[60%]  border border-gray-300 rounded-md p-2"
									value="other"
									checked={userInfo.gender === 'other'}
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
							className=" block w-[60%] ml-3 border border-gray-300 rounded-md p-2"
							onChange={(e) => handleChangeUserInfo(e)}
							value={userInfo.birthDate && getDate(userInfo.birthDate)}
						/>
					</div>
					<div className="pt-4 w-[60%]  flex flex-row-reverse">
						<button
							onClick={handleSaveChanges}
							type="button"
							className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
						>
							Save Changes
						</button>
					</div>
				</div>
				<div className="flex flex-1 justify-center   ">
					<div className="border-l max-xl:border-none flex flex-col justify-center px-16 h-fit">
						<div className="w-48 mb-4 mt-8 flex items-center justify-center  rounded-full bg-gray-200 overflow-hidden">
							<img
								src={image || user.image}
								alt="Avatar"
								className="w-full aspect-square object-cover "
							/>
						</div>
						<button
							onClick={() => handleChangeImage()}
							type="button"
							className="mt-2 text-sm text-blue-600 hover:underline"
						>
							Change Profile Picture
						</button>
						<input
							ref={fileRef}
							onChange={handleFileChange}
							type="file"
							accept="image/*"
							className="hidden"
						/>
					</div>
				</div>
			</form>
		</>
	);
};

export default BasicProfile;
