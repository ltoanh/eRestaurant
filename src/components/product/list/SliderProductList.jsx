import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../card/ProductCard';
import './slider-product-list.css';

const settingsSlider = {
	dots: true,
	arrows: true,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	autoplay: true,
	autoplaySpeed: 5000,
};
function ProductList(props) {
	const { list } = props;

	return (
		<div className="product-list">
			<Slider {...settingsSlider}>
				{list.map((item) => (
					<ProductCard key={item.id} item={item} />
				))}
			</Slider>
		</div>
	);
}

export default ProductList;
