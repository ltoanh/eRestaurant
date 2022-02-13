import logo from 'assets/images/logo.svg';
import Dropdown from 'components/dropdown/Dropdown';
import DropdownItem from 'components/dropdown/DropdownItem';
import { selectorShoppingCart } from 'features/cart/cartSlice';
import { removeUser, selectorUser } from 'features/user/userSlice';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PATHS from 'routes/path';
import { removeAuthenticatedCookie } from 'utils/handleAuthenticatedCookie';
import './navbar.css';

function Navbar() {
	const user = useSelector(selectorUser);
	const cart = useSelector(selectorShoppingCart);

	const dispatch = useDispatch();

	// modal
	const refDropdown = useRef();
	const [isOpenedDropdown, setIsOpenedDropdown] = useState(false);

	// click outside modal
	useEffect(() => {
		function handleClickOutside(e) {
			if (refDropdown.current && !refDropdown.current.contains(e.target)) {
				setIsOpenedDropdown(false);
			}
		}

		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [refDropdown]);

	// logout
	const handleLogout = () => {
		// remove cookie
		removeAuthenticatedCookie();
		// remove user redux
		dispatch(removeUser());
	};

	return (
		<nav id="navbar" className="container">
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
				<NavLink
					className={`navbar__link ${cart.length > 0 && 'had-notification'}`}
					to={PATHS.CART}
				>
					<i className="ri-shopping-cart-2-line" />
				</NavLink>
				{user.isAuthenticated ? (
					<div
						className={`navbar__link dropdown__wrapper ${
							isOpenedDropdown ? 'active_modal' : ''
						}`}
					>
						<i
							onClick={() => setIsOpenedDropdown(!isOpenedDropdown)}
							className="ri-user-3-line"
						/>
						{isOpenedDropdown && (
							<Dropdown ref={refDropdown}>
								<DropdownItem>
									<NavLink to="/user/123">{user.user.name}</NavLink>
								</DropdownItem>
								<DropdownItem onClick={handleLogout}>Đăng xuất</DropdownItem>
							</Dropdown>
						)}
					</div>
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
