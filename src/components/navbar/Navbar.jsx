import logo from 'assets/images/logo.svg';
import Dropdown from 'components/dropdown/Dropdown';
import DropdownItem from 'components/dropdown/DropdownItem';
import InputRow from 'components/input/InputRow';
import { Input } from 'components/input/InputRow';
import { InputIcon } from 'components/input/InputRow';
import { selectorShoppingCart } from 'features/cart/cartSlice';
import { removeUser, selectorUser } from 'features/user/userSlice';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createSearchParams, NavLink, useNavigate } from 'react-router-dom';
import PATHS from 'routes/path';
import { removeAuthenticatedCookie } from 'utils/handleAuthenticatedCookie';
import './navbar.css';

function Navbar() {
	const user = useSelector(selectorUser);
	const cart = useSelector(selectorShoppingCart);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [searchName, setSearchName] = useState();

	// modal
	const refDropdown = useRef();
	const [isOpenedDropdown, setIsOpenedDropdown] = useState(false);

	// search
	const [isOpenSearch, setIsOpenSearch] = useState(false);

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

	// search
	const handleClickSearch = () => {
		setIsOpenSearch(!isOpenSearch);
		setSearchName("");
		
		navigate({
			pathname: PATHS.SEARCH,
			search: `?${createSearchParams({'name_contains': searchName})}`,
		});
	} 
	const handleKeyDownEnterSearch = (event) => {
    if (event.key === 'Enter') {
      handleClickSearch();
    }
  }

	return (
		<nav id="navbar" className="container">
			<div className="navbar__left">
				<div className="navbar__logo">
					<NavLink to={PATHS.HOME_PAGE}>
						<img src={logo} alt="E Restaurant logo" height="40px" />
					</NavLink>
				</div>
			</div>
			<div className="navbar__middle">
				<ul className="navbar__list">
					<li className="navbar__list__item">
						<NavLink className="navbar__link" to={PATHS.STORE}>
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
				<InputRow className="navbar__link navbar__search">
					<InputIcon
						className="ri-search-line"
						onClick={() => setIsOpenSearch(!isOpenSearch)}
					/>
					<Input
						placeholder="Nhập tên sản phẩm"
						className={isOpenSearch ? 'search__active' : 'search__disable'}
						value={searchName}
						setValue={setSearchName}
						onKeyDown={handleKeyDownEnterSearch}
					/>
				</InputRow>
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
									<NavLink to={`/user/${user.user.id}/general`}>
										{user.user.name || user.user.email}
									</NavLink>
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
