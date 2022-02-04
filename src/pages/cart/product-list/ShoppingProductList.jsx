import swal from '@sweetalert/with-react';
import ArrowButton from 'components/button/ArrowButton';
import {
	removeProductFromCartByID,
	selectorShoppingCart,
	updateQualityProduct
} from 'features/cart/cartSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatCurrency from 'utils/formatCurrency';
import formatInputNumeric from 'utils/formatInputNumeric';
import styles from './shopping-product-list.module.css';

function ShoppingProductList() {
	const dispatch = useDispatch();
	// selector shopping cart
	const shoppingProducts = useSelector(selectorShoppingCart);

	// quality select
	const handleSubtractQualitySelected = (item) => {
		// remove from list
		if (item.quality <= 1) {
			dispatch(removeProductFromCartByID(item.product.id));
		} else {
			let updateValue = {
				id: item.product.id,
				quality: item.quality - 1,
			};
			dispatch(updateQualityProduct(updateValue));
		}
	};

	// on change
	const handleChangeSelectedValue = (e, pID) => {
		if (formatInputNumeric(e.target.value) !== '') {
			let updateValue = {
				id: pID,
				quality: parseInt(formatInputNumeric(e.target.value)),
			};

			// type 0
			if (updateValue.quality === 0) {
				swal({
					text: "Bạn có chắc muốn bỏ sản phẩm khỏi giỏ?",
					icon: 'warning',
					buttons: true,
					dangerMode: true,
				}).then((willDelete) => {
					if(willDelete){
						dispatch(removeProductFromCartByID(pID));
					}
				});
			} else {
				dispatch(updateQualityProduct(updateValue));
			}
		}
	};

	// add
	const handleAddQualitySelected = (item) => {
		let updateValue = {
			id: item.product.id,
			quality: item.quality + 1,
		};
		dispatch(updateQualityProduct(updateValue));
	};

	return (
		<table className={styles.table}>
			<tbody>
				<tr>
					<th className={styles.th}>Sản phẩm</th>
					<th className={styles.th}>Số lượng</th>
					<th className={`text_right ${styles.th}`}>Giá</th>
				</tr>
				{shoppingProducts.map((item) => (
					<tr key={item.product.id}>
						{/* name */}
						<td className={styles.table__product_name}>
							<div className={styles.table__row}>
								<img
									className={styles.product_image}
									src={item.product.thumbnail_src}
									alt={item.product.name}
								/>
								<p className={styles.center}>{item.product.name}</p>
							</div>
						</td>
						{/* quality */}
						<td>
							<div className={styles.table__row}>
								<ArrowButton
									onClick={() => handleSubtractQualitySelected(item)}
									className="arrow-primary"
								>
									<i className="ri-subtract-line"></i>
								</ArrowButton>
								<input
									value={item.quality}
									onChange={(e) =>
										handleChangeSelectedValue(e, item.product.id)
									}
									type="number"
									min={1}
									name="product_quality"
									id="input_quality__add_to_cart"
									className="input_quality__add_to_cart"
								/>
								<ArrowButton
									onClick={() => handleAddQualitySelected(item)}
									className="arrow-primary"
								>
									<i className="ri-add-fill"></i>
								</ArrowButton>
							</div>
						</td>
						{/* total price */}
						<td className={`${styles.table__product_price} text_right`}>
							<strong>
								{formatCurrency(item.product.price * item.quality)}
							</strong>
						</td>
						{/* features */}
						<td>
							<div className={styles.center}>
								<span className="product_features__item">
									<i className="ri-delete-bin-6-line"></i>Xóa
								</span>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default ShoppingProductList;
