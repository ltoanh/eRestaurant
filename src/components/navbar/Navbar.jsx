import logo from 'assets/images/logo.svg';
import { selectorShoppingCart } from 'features/cart/cartSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PATHS from 'routes/path';
import './navbar.css';

function Navbar() {
	const user = null;
	const cart = useSelector(selectorShoppingCart);

	return (
		<nav id="navbar" className='container'>
			<div className="navbar__left">
				<div className="navbar__logo">
					<NavLink to={PATHS.HOME_PAGE}>
						<img src={logo} alt="Pizzdee logo" height="40px" />
					</NavLink>
				</div>
			</div>
			<div className="navbar__middle">
				<ul className="navbar__list">
					<li className="navbar__list__item">
						<NavLink className="navbar__link" to={PATHS.MENU}>
							Thực đơn
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<NavLink className="navbar__link" to={PATHS.SHOP}>
							Cửa hàng
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<NavLink className="navbar__link" to={PATHS.ABOUT_US}>
							Về chúng tôi
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="navbar__right">
				<NavLink className={`navbar__link ${cart.length > 0 && "had-notification"}`} to={PATHS.CART}>
					<i className="ri-shopping-cart-2-line" />
				</NavLink>
				{user ? (
					<NavLink className="navbar__link" to="/user/12334">
						<i className="ri-user-3-line" />
					</NavLink>
				) : (
					<NavLink className="navbar__link" to={PATHS.LOGIN}>
						Đăng nhập
					</NavLink>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
