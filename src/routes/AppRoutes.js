import AboutUs from 'pages/about-us/AboutUs';
import Homepage from 'pages/homepage/Homepage';
import Product from 'pages/product/Product';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/about-us" element={<AboutUs />} />

			<Route path="/product/:id" element={<Product />} />
		</Routes>
	);
}

export default AppRoutes;
