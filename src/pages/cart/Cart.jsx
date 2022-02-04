import Button from 'components/button/Button';
import React from 'react';
import formatCurrency from 'utils/formatCurrency';
import './cart.css';
import ShoppingProductList from './product-list/ShoppingProductList';

function Cart() {
	return (
		<div className="container cart">
			<section className="cart__left cart__section">
				<ShoppingProductList />
			</section>
			{/* voucher */}
			<section className="cart__right">
				<div className="cart__section">
					<p>Bạn có voucher?</p>
					<div className="cart__inp_voucher">
						<input type="text" placeholder="voucher" />
						<Button className="btn_primary btn-small">Áp dụng</Button>
					</div>
				</div>
				{/* total price */}
				<div className="cart__section">
					<table style={{ width: '100%', borderSpacing: '.5rem 1rem' }}>
						<tbody>
							<tr>
								<td>Tổng tiền:</td>
								<td className="text_right">{formatCurrency(45000)}</td>
							</tr>
							<tr>
								<td>Giảm giá:</td>
								<td className="text_right">{formatCurrency(0)}</td>
							</tr>
							<tr>
								<td>Tổng thanh toán:</td>
								<td className="text_right" style={{ fontWeight: '700' }}>
									{formatCurrency(45000)}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
        <div className="cart__section_center">
          <Button className="btn-primary-outline">Thanh toán</Button>
        </div>
			</section>
		</div>
	);
}

export default Cart;
