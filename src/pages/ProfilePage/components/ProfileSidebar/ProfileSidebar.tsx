import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';

const ProfileSidebar = (): JSX.Element => {
	return (
		<div className="p-6">
			<div className="flex items-center border-b pb-7 mb-6">
				<img
					className="w-8 h-8 rounded-full mr-2"
					alt="user"
					src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/491920409_3976609982613727_1089570338156956631_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHVXJr9lr_nrJF7nbYxDA2ikIEMj38hkyKQgQyPfyGTIsFFwKYjyAFbRfgKpE43_WjFCaVyVLDfF_a8-hNsxqaN&_nc_ohc=IFRsGKyRQIYQ7kNvwGr0SZ5&_nc_oc=AdnhnpEsd5tKIhHXRI2dNUFhKQsfvjo2v4IqHdvfENgzB_yNAZmGI1aUL2dvB7DQcKwMDxJsyWkCSFJAQ2uJr-6B&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_gid=TKhCc-ssY2VlfGOu5ppBaA&oh=00_AfQ04C-nBClrmkm9eTkaTnEaGySjkQN8Q2by6RzZckbpPg&oe=68755CA4"
				/>
				<div>hungpj11o2</div>
			</div>
			<div className="flex flex-col justify-center">
				<div>
					<FontAwesomeIcon icon={faUser} />
					<a className="ml-2" href="/user/profile">
						Profile
					</a>
					<div className="flex pl-6 flex-col">
						<div className="text-sm text-gray-500">Your profile</div>
						<div className="text-sm text-gray-500">Bank</div>
						<div className="text-sm text-gray-500">Address</div>
						<div className="text-sm text-gray-500">Change Password</div>
					</div>
				</div>
				<div>
					<a href="/user/orders">Orders</a>
				</div>
				<div>
					<a href="/user/wishlist">Wishlist</a>
				</div>
				<div>
					<a href="/user/settings">Settings</a>
				</div>
				<div>
					<a href="/user/logout">Logout</a>
				</div>
			</div>
		</div>
	);
};

export default ProfileSidebar;
