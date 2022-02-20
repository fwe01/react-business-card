import React from 'react';
import ExinstinctLogo from '../../images/exinstinct.jpg'
import './ProfilePicture.css'

const ProfilePicture = () => {
	return (
		<div className="profile-picture">
			<img src={ExinstinctLogo} alt={'Picture of Myself'}/>
		</div>
	);
};

export default ProfilePicture;
