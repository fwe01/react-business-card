import React from 'react';
import './MainContent.css'
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import About from "./Components/About/About";
import Interests from "./Components/Interests/Interests";

const MainContent = () => {
	return (
		<div className='wrapper'>
			<PersonalInfo/>
			<About/>
			<Interests/>
		</div>
	);
};

export default MainContent;
