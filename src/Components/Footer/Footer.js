import React from 'react';
import './Footer.css'
import {Button} from "react-bootstrap";
import {FaGithub, FaGitlab, FaInstagram, FaLine, FaWhatsapp} from "react-icons/fa";

const Footer = () => {
	return (
		<footer>
			<Button href="line.me/ti/p/~frederickwilliam" variant={"dark"}>
				<FaLine size={40}/>
			</Button>
			<Button href="https://wa.me/6281803226838" variant={"dark"}>
				<FaWhatsapp size={40}/>
			</Button>
			<Button href="https://www.instagram.com/fwe01/" variant={"dark"}>
				<FaInstagram size={40}/>
			</Button>
			<Button href="https://github.com/fwe01" variant={"dark"}>
				<FaGithub size={40}/>
			</Button>
			<Button href="https://gitlab.com/fwe01" variant={"dark"}>
				<FaGitlab size={40}/>
			</Button>
		</footer>
	);
};

export default Footer;
