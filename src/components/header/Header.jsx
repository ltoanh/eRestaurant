import React from 'react';
import { NavLink } from 'react-router-dom';
import PATHS from 'routes/path';
import './header.css';
import logo from 'assets/images/logo.svg';

function Header() {
	const user = null;

	return (
		<header id="header" className="container">
			<div className="header__left">
				<div className="header__logo">
					<img src={logo} alt="Pizzdee logo" height="40px" />
				</div>
			</div>
			<div className="header__middle">
				<ul className="header__list">
					<li className="header__list__item">
						<NavLink className="header__link" to={PATHS.MENU}>Thực đơn</NavLink>
					</li>
					<li className="header__list__item">
						<NavLink className="header__link" to={PATHS.SHOP}>Cửa hàng</NavLink>
					</li>
					<li className="header__list__item">
						<NavLink className="header__link" to={PATHS.ABOUT_US}>Về chúng tôi</NavLink>
					</li>
				</ul>
			</div>
			<div className="header__right">
				<NavLink className="header__link had-notification" to={PATHS.CART}>
					<i className="ri-shopping-cart-2-line" />
				</NavLink>
				{user ? (
					<NavLink className="header__link" to="/user/12334">
						<i className="ri-user-3-line" />
					</NavLink>
				) : (
					<NavLink className="header__link" to="/login">Đăng nhập</NavLink>
				)}
			</div>
		</header>
	);
}

export default Header;
