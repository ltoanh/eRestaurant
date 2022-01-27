import pizzdeeApi from 'api/pizzdeeApi';
import React, { useEffect, useState } from 'react';
import CategoriesList from './category/CategoriesList';
import Hero from './hero/Hero';
import './homepage.css';
import ProductList from './product/list/ProductList';

const LIMIT_SHOW_PRODUCT = 10;

function Homepage() {
	const [latestProductsList, setLatestProductsList] = useState([]);

	// get latest product
	const getLatestProductsList = async () => {
		const params = {
			'_sort': "created_at:DESC",
			'_limit': LIMIT_SHOW_PRODUCT
		}
		let response = await pizzdeeApi.getLatestProducts({params});
		setLatestProductsList(response);
	}
	useEffect(() => {
		getLatestProductsList(10);
	}, []);
	
	useEffect(() => {
		console.log(latestProductsList);
	}, [latestProductsList]);
	

	return (
		<div className='container'>
			<Hero />
			<section className="section">
				<h2 className="section__title">Danh mục</h2>
				<CategoriesList />
			</section>
			<section className='section'>
        <h2 className='section__title'>Mới nhất</h2>
				<ProductList />
			</section>
		</div>
	);
}

export default Homepage;
