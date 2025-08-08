import routeName from '@com/config';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';
import { Link } from 'react-router-dom';

const AuthBox = ({ user }: any): JSX.Element => {
	return (
		<>
			{user ? (
				<div className="flex flex-col  mb-2 border-b pb-4 p-4">
					<img
						// src={user.image}
						src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/491920409_3976609982613727_1089570338156956631_n.jpg?stp=dst-jpg_p160x160_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHVXJr9lr_nrJF7nbYxDA2ikIEMj38hkyKQgQyPfyGTIsFFwKYjyAFbRfgKpE43_WjFCaVyVLDfF_a8-hNsxqaN&_nc_ohc=xz3gAm3igTsQ7kNvwF03_nf&_nc_oc=AdnjYLK2fKPaM0XDbkRW9yDyw6eROM1GhYdhcZ9AyU8tk1UeDQTAS5Zm5yUcPgXOR-tKmrnK7AG-5X6VnkmHFam9&_nc_zt=24&_nc_ht=scontent-hkg1-1.xx&_nc_gid=g9PcTYFiYc52cSCymm3NAA&oh=00_AfVRTwD37yJY5MLNV5VmVnpKIX6zZA9j02ufQGrIc0CHLg&oe=689B89E2"
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
