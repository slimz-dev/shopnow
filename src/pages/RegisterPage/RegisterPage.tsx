import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface RegisterForm {
	firstName: string;
	lastName: string;
	maidenName: string;
	age: string;
	gender: string;
	phone: string;
	username: string;
	email: string;
	city: string;
	address: string;
	state: string;
}

function Register() {
	const navigate = useNavigate();
	const [form, setForm] = useState<RegisterForm>({
		firstName: '',
		lastName: '',
		maidenName: '',
		age: '',
		gender: '',
		phone: '',
		username: '',
		email: '',
		city: '',
		address: '',
		state: '',
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const validateForm = (): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const phoneRegex = /^[0-9]{10,15}$/;
		const usernameRegex = /^[a-zA-Z0-9_]{4,}$/;
		const nameRegex = /^[a-zA-Z\s'-]+$/;
		const ageNum = Number(form.age);

		return (
			nameRegex.test(form.firstName) &&
			nameRegex.test(form.lastName) &&
			emailRegex.test(form.email) &&
			phoneRegex.test(form.phone) &&
			usernameRegex.test(form.username) &&
			!isNaN(ageNum) &&
			ageNum >= 1 &&
			ageNum <= 120
		);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			alert('Registered only for demo! Please use the given credentials to login.');
			navigate('/login');
		} else {
			alert('Please correct the form fields.');
		}
	};

	return (
		<div
			className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
			style={{
				backgroundImage:
					"url('https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-clothing-store-casual-fashion-mens-photography-photos-with-pictures-image_796891.jpg')",
			}}
		>
			<div className="max-w-4xl bg-white text-black rounded-xl shadow-xl p-10 grid grid-cols-1 gap-8 bg-opacity-90 backdrop-blur-sm">
				<div>
					<h2 className="text-3xl font-bold mb-4">Create an account</h2>
					<p className="mb-6 text-gray-600">It’s quick and easy.</p>

					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="flex gap-4">
							<input
								name="firstName"
								placeholder="First name"
								onChange={handleChange}
								required
								className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
							/>
							<input
								name="lastName"
								placeholder="Last name"
								onChange={handleChange}
								required
								className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
							/>
						</div>

						<input
							name="maidenName"
							placeholder="Maiden name"
							onChange={handleChange}
							required
							className="w-full p-3 border border-gray-300 rounded-md"
						/>

						<div className="flex gap-4">
							<input
								name="age"
								type="number"
								placeholder="Age"
								onChange={handleChange}
								required
								className="w-1/2 p-3 border border-gray-300 rounded-md"
							/>
							<select
								name="gender"
								onChange={handleChange}
								required
								className="w-1/2 p-3 border border-gray-300 rounded-md text-gray-700"
							>
								<option value="" disabled>
									Select gender
								</option>
								<option>Male</option>
								<option>Female</option>
								<option>Other</option>
							</select>
						</div>

						<input
							name="phone"
							placeholder="Phone number"
							onChange={handleChange}
							required
							className="w-full p-3 border border-gray-300 rounded-md"
						/>
						<div className="flex flex-col justify-between">
							<div className="space-y-4">
								<input
									name="username"
									placeholder="Username"
									onChange={handleChange}
									required
									className="w-full p-3 border border-gray-300 rounded-md"
								/>

								<input
									name="email"
									type="email"
									placeholder="Email address"
									onChange={handleChange}
									required
									className="w-full p-3 border border-gray-300 rounded-md"
								/>

								<input
									name="address"
									placeholder="Street address"
									onChange={handleChange}
									required
									className="w-full p-3 border border-gray-300 rounded-md"
								/>

								<div className="flex gap-4">
									<input
										name="city"
										placeholder="City"
										onChange={handleChange}
										required
										className="w-1/2 p-3 border border-gray-300 rounded-md"
									/>
									<input
										name="state"
										placeholder="State"
										onChange={handleChange}
										required
										className="w-1/2 p-3 border border-gray-300 rounded-md"
									/>
								</div>

								<button
									type="submit"
									className="w-full mt-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-900 transition"
								>
									Register
								</button>
							</div>

							<p
								className="mt-6 text-center text-gray-600 cursor-pointer hover:text-black text-sm"
								onClick={() => navigate('/login')}
							>
								Already have an account? <span className="underline">Login</span>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;
