import { addToCart } from 'features/cart/cartSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import avgTotalRating from 'utils/avgTotalRating';
import formatCurrency from 'utils/format/formatCurrency';
import formatProductAddToCart from 'utils/format/formatProductAddToCart';
import styles from './product-card.module.css';

function ProductCard(props) {
	const { item } = props;

	const dispatch = useDispatch();

	//rating
	const [rating, setRating] = useState([]);

	useEffect(() => {
		setRating(avgTotalRating(item?.ratings));
	}, [item]);

	// add to cart
	const handleAddToCart = () => {
		dispatch(addToCart(formatProductAddToCart(item, 1)));
	}

	return (
		<div className={styles.container}>
			<div className={styles.img_cover}>
				<Link to={`/product/${item.id}`}>
					<img src={item.thumbnail_src} alt={item.name} />
				</Link>
			</div>
			<div className={styles.content}>
				<div className={styles.row}>
					<h4>
						<Link className={styles.name} to={`/product/${item.id}`}>
							{item.name}
						</Link>
					</h4>
					{!isNaN(rating) && (
						<span className={styles.rating}>
							{rating} <i className={`ri-star-fill ${styles.rating_icon}`}></i>
						</span>
					)}
				</div>
				<div className={styles.row}>
					<span>{formatCurrency(item.price)}</span>
					<button onClick={handleAddToCart} className={styles.btn__add_to_cart}>
						<i
							className={`ri-add-circle-fill ${styles.btn__add_to_cart__icon}`}
						></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
