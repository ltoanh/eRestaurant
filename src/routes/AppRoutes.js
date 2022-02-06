import AboutUs from 'pages/about-us/AboutUs';
import Cart from 'pages/cart/Cart';
import Checkout from 'pages/checkout/Checkout';
import Homepage from 'pages/homepage/Homepage';
import Product from 'pages/product/Product';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PATHS from './path';

function AppRoutes() {
	return (
		<Routes>
			<Route path={PATHS.HOME_PAGE} element={<Homepage />} />
			<Route path={PATHS.ABOUT_US} element={<AboutUs />} />

			<Route path={PATHS.PRODUCT_DETAIL} element={<Product />} />

			<Route path={PATHS.CART} element={<Cart />} />
			<Route path={PATHS.CHECKOUT} element={<Checkout />} />
		</Routes>
	);
}

export default AppRoutes;
