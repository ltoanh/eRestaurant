import React from 'react';
import Hero from './hero/Hero';
import './homepage.css';
import ProductList from './product/list/ProductList';

function Homepage() {
	return (
		<div className='container'>
			<Hero />
			<section className='section'>
        <h2 className='section__title'>Mới nhất</h2>
				<ProductList />
			</section>
		</div>
	);
}

export default Homepage;
