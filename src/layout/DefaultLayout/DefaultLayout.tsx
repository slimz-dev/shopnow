import { JSX, ReactNode } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const DefaultLayout = ({ children }: { children: ReactNode }): JSX.Element => {
	return (
		<div>
			<Header />
			<div className="mx-20 mb-56  ">{children}</div>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
