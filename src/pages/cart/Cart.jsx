import Button from 'components/button/Button';
import { selectorShoppingCart } from 'features/cart/cartSlice';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PATHS from 'routes/path';
import formatCurrency from 'utils/format/formatCurrency';
import './cart.css';
import ShoppingProductList from './product-list/ShoppingProductList';

function Cart() {
	const cart = useSelector(selectorShoppingCart);
	// total price
	const [totalPrice, setTotalPrice] = useState(0);
	// discount
	const [discount, setDiscount] = useState(0);

	const handleTotalPrice = () => {
		let total = cart.reduce(
			(total, item) => (total += item.quality * item.product.price),
			0
		);
		setTotalPrice(total);
	};

	useEffect(() => {
		handleTotalPrice();
	}, [cart]);

	return (
		<div className="container cart">
			<section className="cart__left cart__section">
				<ShoppingProductList />
			</section>
			<section className="cart__right">
				{/* voucher */}
				<div className="cart__section">
					<p>Bạn có voucher?</p>
					<div className="cart__inp_voucher">
						<div className="cart__inp_voucher--input">
							<i style={{fontSize: '1.25rem'}} className="ri-coupon-3-line"></i>
							<input type="text" placeholder="voucher" />
						</div>
						<Button className="btn_primary btn-small">Áp dụng</Button>
					</div>
				</div>
				{/* total price */}
				<div className="cart__section">
					<table style={{ width: '100%', borderSpacing: '.5rem 1rem' }}>
						<tbody>
							<tr>
								<td>Tổng tiền:</td>
								<td className="text_right">{formatCurrency(totalPrice)}</td>
							</tr>
							<tr>
								<td>Giảm giá:</td>
								<td className="text_right">{formatCurrency(discount)}</td>
							</tr>
							<tr>
								<td>Tổng thanh toán:</td>
								<td className="text_right" style={{ fontWeight: '700' }}>
									{formatCurrency(totalPrice - discount)}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				{cart.length > 0 && (
					<div className="cart__section_center">
						<Link to={PATHS.CHECKOUT}>
							<Button className="btn-primary-outline">Thanh toán</Button>
						</Link>
					</div>
				)}
			</section>
		</div>
	);
}

export default Cart;
