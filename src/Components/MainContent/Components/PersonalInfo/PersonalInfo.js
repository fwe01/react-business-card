import React from 'react';
import './PersonalInfo.css'
import {MdEmail} from "react-icons/md";
import {Button} from "react-bootstrap";
import {FaLinkedin} from "react-icons/fa";

const PersonalInfo = () => {
	return (
		<div className="personal-info">
			<hr/>
			<h2>Frederick William E.</h2>
			<h3>Backend Developer</h3>
			<h5><a href="http://frederickwilliame.com">frederickwilliame.com</a></h5>
			<hr/>
			<div className="links">
				<Button href="mailto:frederickwilliamedlim@gmail.com" variant={"light"}>
					<MdEmail size={25}/>
					Email
				</Button>
				<Button href="https://www.linkedin.com/in/frederick-william-edlim-463814208/" variant={"primary"}>
					<FaLinkedin size={25}/>
					Linkedin
				</Button>
			</div>
			<hr/>
		</div>
	);
};

export default PersonalInfo;
