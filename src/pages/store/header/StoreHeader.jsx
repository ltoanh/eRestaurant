import pizzdeeApi from 'api/pizzdeeApi';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PATHS from 'routes/path';
import styled from 'styled-components';

function StoreHeader() {
	const [categoryList, setCategoryList] = useState([]);

	// get categories list
	const getDataList = async (params) => {
		const response = await pizzdeeApi.getCategories({ params });
		setCategoryList(response);
	};
	useEffect(() => {
		const params = {
			_sort: 'slug',
		};
		getDataList(params);
	}, []);

	return (
		<Header className="flex">
			<Item>
				<NavLink to="./">Tất cả</NavLink>
			</Item>
			{categoryList.map((category) => (
				<Item key={category.id}>
					<NavLink to={`${PATHS.STORE}/${category.id}`}>
						{category.name}
					</NavLink>
				</Item>
			))}
		</Header>
	);
}

export default StoreHeader;

const Header = styled.ul`
	justify-content: space-evenly;
	flex-wrap: wrap;
  padding: 0 0 .5rem;

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
		transform: translate(-50%, .25rem);
		width: 5px;
		height: 5px;
		border-radius: 999px;

		background-color: var(--primary);
	}
`;
