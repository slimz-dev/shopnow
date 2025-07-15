import { AuthContext } from '@com/contexts/AuthContext';
import { SetNumberType } from '@com/types';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { JSX, useContext } from 'react';

type ProfileSidebarProps = {
	activeTab: number;
	setActiveTab: SetNumberType;
};

const ProfileSidebar = ({ activeTab, setActiveTab }: ProfileSidebarProps): JSX.Element => {
	const { user } = useContext(AuthContext);
	const cl = classNames;
	return (
		<div className="p-6">
			<div className="flex items-center border-b pb-7 mb-6">
				<img className="w-8 h-8 rounded-full mr-2" alt="user" src={user.image} />
				<div>{user.username}</div>
			</div>
			<div className="flex flex-col justify-center">
				<div>
					<FontAwesomeIcon icon={faUser} />
					<a className="ml-2" href="/user/profile">
						Profile
					</a>
					<div className="flex pl-6 flex-col">
						<div
							onClick={() => setActiveTab(0)}
							className={cl(
								'text-sm text-gray-500 leading-[2.5] hover:text-blue-400 cursor-pointer',
								{
									'!text-blue-400': activeTab === 0,
								}
							)}
						>
							Your profile
						</div>
						<div
							onClick={() => setActiveTab(1)}
							className={cl(
								'text-sm text-gray-500 leading-[2.5] hover:text-blue-400 cursor-pointer',
								{
									'!text-blue-400': activeTab === 1,
								}
							)}
						>
							Bank
						</div>
						<div
							onClick={() => setActiveTab(2)}
							className={cl(
								'text-sm text-gray-500 leading-[2.5] hover:text-blue-400 cursor-pointer',
								{
									'!text-blue-400': activeTab === 2,
								}
							)}
						>
							Address
						</div>
						<div
							onClick={() => setActiveTab(3)}
							className={cl(
								'text-sm text-gray-500 leading-[2.5] hover:text-blue-400 cursor-pointer',
								{
									'!text-blue-400': activeTab === 3,
								}
							)}
						>
							Change Password
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileSidebar;
