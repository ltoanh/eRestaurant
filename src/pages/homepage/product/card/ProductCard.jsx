import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import avgTotalRating from 'utils/avgTotalRating';
import formatCurrency from 'utils/formatCurrency';
import styles from './product-card.module.css';

function ProductCard(props) {
	const { item } = props;

	//rating
	const [rating, setRating] = useState([]);

	useEffect(() => {
		setRating(avgTotalRating(item?.ratings));
	}, [item]);

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
					<button className={styles.btn__add_to_cart}>
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
