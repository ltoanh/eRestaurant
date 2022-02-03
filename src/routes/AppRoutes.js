import AboutUs from 'pages/about-us/AboutUs';
import Cart from 'pages/cart/Cart';
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

			<Route path="/cart" element={<Cart />} />
		</Routes>
	);
}

export default AppRoutes;
