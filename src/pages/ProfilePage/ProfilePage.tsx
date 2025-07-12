import { JSX, useState } from 'react';
import ProfileSidebar from './components/ProfileSidebar/ProfileSidebar';
import BasicProfile from './components/BasicProfile/BasicProfile';
import Bank from './components/Bank/Bank';
import Address from './components/Address/Address';
import ChangePassword from './components/ChangePassword/ChangePassword';

const ProfilePage = (): JSX.Element => {
	const [activeTab, setActiveTab] = useState<number>(0);

	return (
		<div className="flex mx-auto w-[70%] mt-6">
			<ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
			<div className="p-6 bg-slate-100 flex-1 shadow rounded-md ">
				{activeTab === 0 && <BasicProfile />}
				{activeTab === 1 && <Bank />}
				{activeTab === 2 && <Address />}
				{activeTab === 3 && <ChangePassword />}
			</div>
		</div>
	);
};

export default ProfilePage;
