import { getMe } from '@com/services/users/getMe';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext<any>(null);
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<{ username: string } | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	console.log(user);
	useEffect(() => {
		const getUser = async () => {
			const result = await getMe();
			if (result && result.status === 200) {
				setUser(result.data);
				setIsAuthenticated(true);
			}
		};
		getUser();
	}, []);
	const data = {
		user,
		setUser,
		isAuthenticated,
		setIsAuthenticated,
	};
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
