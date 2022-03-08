import erestaurantApi from 'api/erestaurantApi';
import { selectorShoppingCart } from 'features/cart/cartSlice';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './bill-product-list.module.css';

function BillProductList({ products }) {
	const cart = useSelector(selectorShoppingCart);
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		if(products){
			products.forEach(async (item) => {
				const response = await erestaurantApi.getProductByID(item.product);
				setProductList(prev => [...prev, {
					...item,
					product: response 
				}]);
			});
		} else {
			setProductList(cart);
		}
	}, [products, cart]);

	return (
		<div>
			<table className={styles.table}>
				<tbody>
					<tr className={styles.flex}>
						<th className={styles.td}>Tên</th>
						<th className={styles.td}>Số lượng</th>
					</tr>
					{productList.map((item) => (
						<tr className={styles.flex} key={item?.product?.id}>
							<td className={styles.td}>{item?.product?.name}</td>
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
