import pizzdeeApi from 'api/pizzdeeApi';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import formatDateRelative from 'utils/formatDate';
import './product-rating.css';

function ProductRating({ item }) {
	const [ratingUser, setRatingUser] = useState({});

	// get user rating by id
	const getRatingUser = async (uid) => {
		let response = await pizzdeeApi.getUserByID(uid);
		setRatingUser(response);
	};
	useEffect(() => {
		getRatingUser(item.user);
	}, [item]);

	return (
		<div className="product_rating__item">
			<div className="product_rating__item__header">
				<img
					className="product_rating__item__header__user_image"
					src={ratingUser.avatar_src}
					alt={ratingUser.name}
				/>
				<div>
					<div className="product_rating__item__header__user_detail">
						<h5 className="product_rating__item__user__name">
							{ratingUser.name}
						</h5>
						<span className="rating-text user__product_rating">
							<i className="ri-star-fill"></i>
							{item.rating_star}
						</span>
					</div>
					<p className="user__product_rating__time">
						{formatDateRelative(item.created_at)}
					</p>
				</div>
			</div>
			<h6 className="product_rating__item__title">{item.title}</h6>
			<div className='product_rating__item__content'>
				<ReactMarkdown>{item.content}</ReactMarkdown>
			</div>
		</div>
	);
}

export default ProductRating;
