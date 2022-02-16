import swal from '@sweetalert/with-react';
import Button from 'components/button/Button';
import { clearCart, selectorShoppingCart } from 'features/cart/cartSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import formatCurrency from 'utils/format/formatCurrency';
import isValidBill from 'utils/validate/isValidBill';
import styles from './bill.module.css';
import BillProductList from './product-list/BillProductList';

function Bill(props) {
	// redux
	const cart = useSelector(selectorShoppingCart);
	const dispatch = useDispatch();
	// router
	let navigate = useNavigate();

	const { information, selectedCard } = props;

	// check all key had value
	const checkHadValues = Object.values(information).every((key) => key !== '');

	// confirm bill
	const handleConfirmBill = () => {
		swal({
			text: 'Bạn xác nhận thanh toán hóa đơn?',
			buttons: true,
		}).then((willConfirm) => {
			if (willConfirm) {
				swal({
					icon: 'success',
				}).then(() => {
					// clear when confirm cast the bill
					dispatch(clearCart());

					navigate("/order/123");
				});
			}
		});
	};

	return (
		<div>
			{/* address */}
			<div className={styles.shipping_information}>
				<h3 className={styles.title}>Địa chỉ</h3>
				{checkHadValues ? (
					<>
						<h4 className={styles.name}>{information.name}</h4>
						<p className={styles.small_text}>
							Địa chỉ:{' '}
							<span className={styles.text_black}>{information.address}</span>
						</p>
						<p className={styles.small_text}>
							Số điện thoại:{' '}
							<span className={styles.text_black}>
								{information.phone_number}
							</span>
						</p>
					</>
				) : (
					<p className="red_text">Chưa có đủ thông tin người nhận</p>
				)}
			</div>
			<div className="full_divide " />
			{/* list product */}
			<BillProductList />
			<div className="full_divide" />
			{/* card type */}
			<div className={styles.shipping_information}>
				<h3 className={styles.title}>Phương thức thanh toán</h3>
				{selectedCard !== '' ? (
					<p>{selectedCard}</p>
				) : (
					<p className="red_text">Chưa chọn phương thức thanh toán</p>
				)}
			</div>
			<div className="full_divide" />
			{/* total price */}
			<div className={styles.shipping_information}>
				<h3 className={styles.title}>Thanh toán</h3>
				<TotalPrice />
			</div>
			{/* btn */}
			{isValidBill({
				cart: cart,
				selectedCard: selectedCard,
			}) &&
				checkHadValues && (
					<div className="cart__section_center">
						<Button onClick={handleConfirmBill} className="btn-primary-outline">
							Thanh toán
						</Button>
					</div>
				)}
		</div>
	);
}

export default Bill;

const TotalPrice = () => {
	const cart = useSelector(selectorShoppingCart);
	const [totalPrice, setTotalPrice] = useState(0);
	const [discount, setDiscount] = useState(0);

	const handleTotalPrice = () => {
		return cart.reduce(
			(total, item) => (total += item.quality * item.product.price),
			0
		);
	};

	useEffect(() => {
		setTotalPrice(handleTotalPrice());
	}, [cart]);

	return (
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
	);
};
