import { createContext, useState } from 'react';

export const AuthContext = createContext<any>(null);
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<{ username: string } | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const data = {
		user,
		setUser,
		isAuthenticated,
		setIsAuthenticated,
	};
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
