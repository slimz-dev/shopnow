import { JSX, ReactNode } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const DefaultLayout = ({ children }: { children: ReactNode }): JSX.Element => {
	return (
		<div className="max-[500px]:overflow-scroll">
			<Header />
			<div className="mx-20 mb-56 max-lg:mx-6 ">{children}</div>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
