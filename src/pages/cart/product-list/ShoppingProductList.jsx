import ArrowButton from 'components/button/ArrowButton';
import React, { useState } from 'react';
import formatCurrency from 'utils/formatCurrency';
import styles from './shopping-product-list.module.css';

function ShoppingProductList(props) {
	const { list } = props;

	// quality select
	const [qualitySelected, setQualitySelected] = useState(1);
	const handleSubstractQualitySelected = () => {
		if (qualitySelected <= 1) {
			return;
		}
		setQualitySelected(qualitySelected - 1);
	};

	return (
		<table className={styles.table}>
			<tr>
				<th className={styles.th}>Sản phẩm</th>
				<th className={styles.th}>Số lượng</th>
				<th className={`text_right ${styles.th}`}>Giá</th>
			</tr>
			{list.map((item) => (
				<tr key={item.id}>
					{/* name */}
					<td className={styles.table__product_name}>
						<div className={styles.table__row}>
							<img
								className={styles.product_image}
								src={item.thumbnail_src}
								alt={item.name}
							/>
							<p className={styles.center}>{item.name}</p>
						</div>
					</td>
					{/* quality */}
					<td>
						<div className={styles.table__row}>
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
					</td>
					{/* total price */}
					<td className={`${styles.table__product_price} text_right`}>
						<strong>{formatCurrency(item.price * qualitySelected)}</strong>
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
		</table>
	);
}

export default ShoppingProductList;
