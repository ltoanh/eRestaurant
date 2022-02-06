import { selectorShoppingCart } from 'features/cart/cartSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './bill-product-list.module.css';

function BillProductList() {
	const cart = useSelector(selectorShoppingCart);

	return (
		<div>
			<table className={styles.table}>
				<tbody>
					<tr className={styles.flex}>
						<th className={styles.td}>Tên</th>
						<th className={styles.td}>Số lượng</th>
					</tr>
					{cart.map((item) => (
						<tr className={styles.flex} key={item.product.id}>
							<td className={styles.td}>{item.product.name}</td>
							<td className={`${styles.td} ${styles.text_center}`}>
								{item.quality}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default BillProductList;
