import { useAppDispatch } from '@com/redux/hooks';
import { fetchCart } from '@com/redux/slices/counter/counterSlice';
import { getMe } from '@com/services/users/getMe';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext<any>(null);
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState({});
	const [isAuthenticated, setIsAuthenticated] = useState<any>(
		JSON.parse(localStorage.getItem('isLoggedIn') || 'false')
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		const getUser = async () => {
			const result = await getMe();
			if (result && result.status === 200) {
				setUser(result.data);
				setIsAuthenticated(true);
				dispatch(fetchCart(result.data.id));
			}
		};
		if (isAuthenticated) {
			getUser();
		}
	}, [isAuthenticated]);
	const data = {
		user,
		setUser,
		isAuthenticated,
		setIsAuthenticated,
	};
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
