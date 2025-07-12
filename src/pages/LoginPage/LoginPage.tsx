import routeName from '@com/config';
import { AuthContext } from '@com/contexts/AuthContext';
import { getMe } from '@com/services/users/getMe';
import { login } from '@com/services/users/loginService';
import React, { useState, ChangeEvent, FormEvent, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
	username: string;
	password: string;
}

function Login() {
	const { setIsAuthenticated, user } = useContext(AuthContext);
	const [form, setForm] = useState<LoginForm>({ username: '', password: '' });
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const navigate = useNavigate();
	useEffect(() => {
		if (isLoggedIn) {
			const loginUser = async () => {
				const result = await login(form.username, form.password);
				if (result) {
					localStorage.setItem('isLoggedIn', JSON.stringify(true));
					setIsAuthenticated(() => {
						return true;
					});
				}
			};
			loginUser();
		}
		if (user) {
			navigate(routeName.homePage());
		}
	}, [isLoggedIn, user]);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (form.username && form.password) {
			setIsLoggedIn(true);
		} else {
			alert('Please enter both username and password.');
		}
	};

	return (
		<div
			className="min-h-screen flex items-center justify-center  bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://png.pngtree.com/background/20211215/original/pngtree-childrens-clothing-store-shopping-mall-photography-map-with-map-picture-image_1485289.jpg')",
			}}
		>
			<div className="w-full max-w-md bg-black bg-opacity-80 backdrop-blur-md p-10 rounded-2xl shadow-xl text-white">
				<h2 className="text-4xl font-bold mb-8 text-center tracking-wide">Login</h2>

				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="username"
						placeholder="Username"
						onChange={handleChange}
						required
						className="w-full mb-6 px-5 py-3 bg-white text-black rounded-lg border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700"
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						onChange={handleChange}
						required
						className="w-full mb-8 px-5 py-3 bg-white text-black rounded-lg border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700"
					/>

					<button
						type="submit"
						className="w-full py-3 mb-6 bg-black text-white font-semibold rounded-lg border border-white hover:bg-white hover:text-black transition"
					>
						Login
					</button>
				</form>

				<p
					className="text-center text-gray-300 cursor-pointer hover:text-white tracking-wide"
					onClick={() => navigate('/register')}
				>
					Don't have an account? <span className="underline">Register</span>
				</p>
			</div>
			<div onClick={() => getMe()}>Get me</div>
		</div>
	);
}

export default Login;
