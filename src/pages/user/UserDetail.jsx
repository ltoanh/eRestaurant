import withAuth from 'hooks/withAuth';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import UserGeneral from './UserGeneral';
import UserOrders from './UserOrders';

function UserDetail() {
	return (
		<div className="container">
			<Header className="flex">
				<Item>
					<NavLink to="general">Chung</NavLink>
				</Item>
				<Item>
					<NavLink to="orders">Lịch sử đặt hàng</NavLink>
				</Item>
			</Header>
			<Routes>
				<Route path="general" element={<UserGeneral />}/>
				<Route path="orders" element={<UserOrders />} />
			</Routes>
		</div>
	);
}

export default withAuth(UserDetail);

const Header = styled.ul`
	justify-content: space-evenly;
	flex-wrap: wrap;
	padding: 0 0 0.5rem;
	margin: 1rem 0 2rem;

	font-weight: 600;

	border-bottom: 1px solid var(--border-color);
`;
const Item = styled.li`
	& .active {
		position: relative;
		color: var(--primary);
	}
	& .active::after {
		content: '';
		position: absolute;
		bottom: -0.5rem;
		left: 50%;
		transform: translate(-50%, 0.25rem);
		width: 5px;
		height: 5px;
		border-radius: 999px;

		background-color: var(--primary);
	}
`;
