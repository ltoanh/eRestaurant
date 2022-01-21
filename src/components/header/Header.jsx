import React from 'react';
import './header.css';
import Hero from './hero/Hero';
import Navbar from './navbar/Navbar';

function Header() {
	return (
		<header id="header" className="container">
			<Navbar />
			<Hero />
		</header>
	);
}

export default Header;
