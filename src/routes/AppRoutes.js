import AboutUs from 'pages/about-us/AboutUs';
import Homepage from 'pages/homepage/Homepage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/about-us" element={<AboutUs />} />
		</Routes>
	);
}

export default AppRoutes;
