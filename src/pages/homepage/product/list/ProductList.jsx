import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../card/ProductCard';
import './product-list.css';

function ProductList() {
	const settings = {
		dots: true,
    arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
	};

	return (
		<div className="product-list">
			<Slider {...settings}>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</Slider>
		</div>
	);
}

export default ProductList;
