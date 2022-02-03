import pizzdeeApi from 'api/pizzdeeApi';
import ArrowButton from 'components/button/ArrowButton';
import Button from 'components/button/Button';
import { addToCart } from 'features/cart/cartSlice';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import avgTotalRating from 'utils/avgTotalRating';
import formatCurrency from 'utils/formatCurrency';
import './product.css';
import ProductRating from './rating/ProductRating';

function Product() {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	const dispatch = useDispatch();

	// quality select
	const [qualitySelected, setQualitySelected] = useState(1);
	const handleSubstractQualitySelected = () => {
		if (qualitySelected <= 1) {
			return;
		}
		setQualitySelected(qualitySelected - 1);
	};

	// fetch product detail
	const fetchProductByID = async (pID) => {
		let response = await pizzdeeApi.getProductByID(pID);
		setProduct(response);
	};
	useEffect(() => {
		fetchProductByID(id);
	}, [id]);

	// add to cart
	const handleAddToCart = () => {
		dispatch(addToCart(product));
		console.log('add to cart');
	}

	return (
		<div className="container product">
			<section className="product_information ">
				<div className="left">
					<img
						className="product_thumbnail"
						src={product.thumbnail_src}
						alt={product.name}
					/>
				</div>
				<div className="right">
					<div className="product_features">
						<span className="product_features__item">
							<i className="ri-heart-line"></i>Save
						</span>
						<span className="product_features__item">
							<i className="ri-share-line"></i>Share
						</span>
					</div>
					<div className="short_divide"></div>
					<h3 className="product_name">{product.name}</h3>
					<p className="product_total-rating">
						<span className="rating-text">
							<i className="ri-star-fill"></i>
							{product.ratings && avgTotalRating(product.ratings)}
						</span>
						<span>({product?.ratings?.length})</span>
					</p>
					<p className="product_price">{formatCurrency(product?.price)}</p>
					{/* add to cart */}
					<div className="product_price__add_to_cart">
						<div className="product_price__add_to_cart__quality">
							<label htmlFor="input_quality__add_to_cart">Nhập số lượng:</label>
							<ArrowButton
								onClick={handleSubstractQualitySelected}
								className="arrow-primary"
							>
								<i className="ri-subtract-line"></i>
							</ArrowButton>
							<input
								value={qualitySelected}
								onChange={(e) => setQualitySelected(e.target.value)}
								type="number"
								min={1}
								name="product_quality"
								id="input_quality__add_to_cart"
								className="input_quality__add_to_cart"
							/>
							<ArrowButton
								onClick={() => setQualitySelected(qualitySelected + 1)}
								className="arrow-primary"
							>
								<i className="ri-add-fill"></i>
							</ArrowButton>
						</div>
						<Button onClick={handleAddToCart} className="btn__add_to_cart btn-small">Thêm vào giỏ</Button>
					</div>
					<div className="product_description__wrapper">
						<h4 className="product_description__title">Mô tả</h4>
						{product.description ? (
							<ReactMarkdown>{product.description}</ReactMarkdown>
						) : (
							<span>Hiện chưa có mô tả</span>
						)}
					</div>
				</div>
			</section>
			<section className="product__rating">
				<h3 className="product__rating__title">
					Khách hàng của chúng tôi nói gì?
				</h3>
				<div className="product__user_rating__wrapper">
					{product.ratings?.length > 0 ? (
						product.ratings.map((item) => (
							<ProductRating item={item} key={item.id} />
						))
					) : (
						<span>Hiện chưa có đánh giá</span>
					)}
				</div>
			</section>
		</div>
	);
}

export default Product;
