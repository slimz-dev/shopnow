import routeName from '@com/config';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';
import { Link } from 'react-router-dom';

const AuthBox = ({ user }: any): JSX.Element => {
	return (
		<>
			{Object.keys(user).length !== 0 ? (
				<div className="flex flex-col  mb-2 border-b pb-4 p-4">
					<img
						src={user.image}
						alt="avatar"
						className="w-16 aspect-square rounded-full mb-2"
					/>
					<div className="font-semibold">{`${user.firstName} ${user.lastName}`}</div>
					<div className="text-[#706d6d]">{`${user.username}`}</div>
				</div>
			) : (
				<Link
					to={routeName.loginPage()}
					className="flex flex-col  mb-2 border-b pb-4 p-4 hover:bg-[#e5e5e5] cursor-pointer"
				>
					<div className="flex items-center ">
						<FontAwesomeIcon className="w-6" icon={faUser} size="xl" />
						<div className="text-xl font-semibold pl-3">Log in</div>
					</div>
				</Link>
			)}
		</>
	);
};

export default AuthBox;
