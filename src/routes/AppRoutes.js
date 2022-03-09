import AboutUs from 'pages/about-us/AboutUs';
import Login from 'pages/authentication/login/Login';
import SignUp from 'pages/authentication/signup/SignUp';
import Cart from 'pages/cart/Cart';
import Checkout from 'pages/checkout/Checkout';
import Homepage from 'pages/homepage/Homepage';
import OrderDetail from 'pages/order/OrderDetail';
import Product from 'pages/product/Product';
import Search from 'pages/search/Search';
import StoreContent from 'pages/store/content/StoreContent';
import Store from 'pages/store/Store';
import UserDetail from 'pages/user/UserDetail';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PATHS from './path';

function AppRoutes() {
	return (
		<Routes>
			<Route path={PATHS.HOME_PAGE} element={<Homepage />} />
			<Route path={PATHS.ABOUT_US} element={<AboutUs />} />
			<Route path={PATHS.STORE} element={<Store />}>
				<Route path={`${PATHS.STORE}/:id`} element={<StoreContent />} />
			</Route>

			<Route path={PATHS.PRODUCT_DETAIL} element={<Product />} />
			<Route path={PATHS.SEARCH} element={<Search />} />

			<Route path={PATHS.CART} element={<Cart />} />
			<Route path={PATHS.CHECKOUT} element={<Checkout />} />

			<Route path={PATHS.ORDER_DETAIL} element={<OrderDetail />} />

			<Route path={PATHS.LOGIN} element={<Login />} />
			<Route path={PATHS.SIGNUP} element={<SignUp />} />

			<Route path={PATHS.USER} element={<UserDetail />} />
		</Routes>
	);
}

export default AppRoutes;
