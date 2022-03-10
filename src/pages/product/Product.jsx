import erestaurantApi from 'api/erestaurantApi';
import ArrowButton from 'components/button/ArrowButton';
import Button from 'components/button/Button';
import { addToCart } from 'features/cart/cartSlice';
import { selectorUser } from 'features/user/userSlice';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import avgTotalRating from 'utils/avgTotalRating';
import formatCurrency from 'utils/format/formatCurrency';
import formatInputNumeric from 'utils/format/formatInputNumeric';
import formatProductAddToCart from 'utils/format/formatProductAddToCart';
import './product.css';
import ProductRating from './rating/ProductRating';
import UserRating from './rating/UserRating';

function Product() {
	const { id } = useParams();
	const user = useSelector(selectorUser);

	const [product, setProduct] = useState({});

	const dispatch = useDispatch();

	// quality select
	const [qualitySelected, setQualitySelected] = useState(1);
	const handleSubtractQualitySelected = () => {
		if (qualitySelected <= 1) {
			return;
		}
		setQualitySelected(qualitySelected - 1);
	};

	// fetch product detail
	const fetchProductByID = async (pID) => {
		let response = await erestaurantApi.getProductByID(pID);
		setProduct(response);
	};
	useEffect(() => {
		fetchProductByID(id);
	}, [id]);

	// type product quality
	const handleChangeProductQuality = (e) => {
		let tempValue = parseInt(formatInputNumeric(e.target.value));
		if (!isNaN(tempValue)) {
			if (tempValue !== 0) {
				setQualitySelected(tempValue);
			}
		}
	};

	// add to cart
	const handleAddToCart = () => {
		toast.success("Thêm vào giỏ hàng thành công!");
		dispatch(addToCart(formatProductAddToCart(product, qualitySelected)));
	};

	return (
		<div className="container product">
			<ProductWrapper>
				{/* left */}
				<ProductImageWrapper>
					<ProductImage src={product.thumbnail_src} alt={product.name} />
				</ProductImageWrapper>
				{/* right */}
				<ProductInfoWrapper>
					<ProductFeatures>
						<ProductFeatureItem>
							<i className="ri-heart-line"></i>Save
						</ProductFeatureItem>
						<ProductFeatureItem>
							<i className="ri-share-line"></i>Share
						</ProductFeatureItem>
					</ProductFeatures>
					<div className="short_divide"></div>
					<ProductName>{product.name}</ProductName>
					<ProductTotalRating>
						<span className="rating-text">
							<i className="ri-star-fill"></i>
							{product.ratings && avgTotalRating(product.ratings)}
						</span>
						<span>({product?.ratings?.length})</span>
					</ProductTotalRating>
					<ProductPrice>{formatCurrency(product?.price)}</ProductPrice>
					{/* add to cart */}
					<ProductQualityWrapper>
						<ProductQuality>
							<label htmlFor="input_quality__add_to_cart">Nhập số lượng:</label>
							<ArrowButton
								onClick={handleSubtractQualitySelected}
								className="arrow-primary"
							>
								<i className="ri-subtract-line"></i>
							</ArrowButton>
							<ProductQualityInput
								value={qualitySelected}
								onChange={handleChangeProductQuality}
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
						</ProductQuality>
						<Button
							onClick={handleAddToCart}
							className="btn__add_to_cart btn-small"
						>
							Thêm vào giỏ
						</Button>
					</ProductQualityWrapper>
					{/* description */}
					<ProductDescriptionWrapper>
						<ProductDescriptionTitle>Mô tả</ProductDescriptionTitle>
						{product.description ? (
							<ReactMarkdown>{product.description}</ReactMarkdown>
						) : (
							<span>Hiện chưa có mô tả</span>
						)}
					</ProductDescriptionWrapper>
				</ProductInfoWrapper>
			</ProductWrapper>
			{/* rating */}
			<ProductRatingWrapper>
				<ProductRatingTitle>
					Khách hàng của chúng tôi nói gì?
				</ProductRatingTitle>
				{/* user rating */}
				{
					user.user && <UserRating user={user.user}/>
				}
				{/* rating list */}
				<ProductRatingList>
					{product.ratings?.length > 0 ? (
						product.ratings.map((item) => (
							<ProductRating item={item} status="rating" key={item.id} />
						))
					) : (
						<span>Hiện chưa có đánh giá</span>
					)}
				</ProductRatingList>
			</ProductRatingWrapper>
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
			/>
		</div>
	);
}

export default Product;

// --------------product----------------
const ProductWrapper = styled.section`
	display: flex;

	gap: 2rem;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
// left
const ProductImageWrapper = styled.div`
	flex: 1;
`;
const ProductImage = styled.img`
	border-radius: var(--border);
	object-fit: cover;
	object-position: center;
`;
// right
const ProductInfoWrapper = styled.div`
	flex: 1;
`;
const ProductFeatures = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 0.5rem;
`;
const ProductFeatureItem = styled.span`
	display: flex;
	align-items: center;
	gap: 3px;

	font-size: 0.85rem;

	cursor: pointer;

	transition: all 0.2s ease-in;

	& > i {
		font-size: 1.25rem;
	}

	&:hover {
		color: var(--primary);
	}
	&:active {
		transform: scale(0.95);
	}
`;

const ProductName = styled.h3`
	font-size: 1.75rem;
	margin: 0.75rem 0 0.3rem;
`;

const ProductTotalRating = styled.p`
	display: flex;
	align-items: center;

	margin-bottom: 1rem;

	& > :first-child {
		padding-right: 5px;
	}

	& > * ~ * {
		padding: 0 5px;

		border-left: 1px solid var(--gray);

		color: var(--gray);
	}
`;

const ProductPrice = styled.p`
	font-size: 2rem;
	font-weight: 700;

	margin-bottom: 0.5rem;
`;

//cart
const ProductQualityWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 480px) {
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
`;

const ProductQuality = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;
`;

const ProductQualityInput = styled.input`
	border: 1px solid var(--primary);
	width: 2.8rem;
	padding: 5px 7px;

	background-color: transparent;

	border-radius: 5px;
`;

// description
const ProductDescriptionWrapper = styled.div`
	margin-top: 2rem;
`;

const ProductDescriptionTitle = styled.h4`
	font-size: 1.25rem;
`;

// ----------------rating-----------------
const ProductRatingWrapper = styled.section``;
const ProductRatingTitle = styled.h3`
	font-size: 1.25rem;
	border-left: 5px solid var(--primary);
	text-indent: 1rem;
	padding: 3px 0;

	margin: 1.5rem 0;
`;
const ProductRatingList = styled.div`
	& > * ~ * {
		margin-top: 2rem;
	}
`;
