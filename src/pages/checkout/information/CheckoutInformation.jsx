import React from 'react';
import CardType from './card-type/CardType';
import styles from './checkout-information.module.css';

function CheckoutInformation(props) {
	const {information, setInformation, selectedCard, setSelectedCard, cardList} = props;
	
	return (
		<div className={styles.form}>
			<div className={styles.form__item}>
				<label className={styles.item__label} htmlFor="checkout__name">
					Họ tên
				</label>
				<input
					className={styles.item__input}
					value={information.name}
					onChange={(e) =>
						setInformation({ ...information, name: e.target.value })
					}
					type="text"
					name="name"
					id="checkout__name"
				/>
			</div>
			<div className={styles.form__item}>
				<label className={styles.item__label} htmlFor="checkout__address">
					Địa chỉ
				</label>
				<input
					className={styles.item__input}
					value={information.address}
					onChange={(e) =>
						setInformation({ ...information, address: e.target.value })
					}
					type="text"
					name="address"
					id="checkout__address"
				/>
			</div>
			<div className={styles.form__item}>
				<label className={styles.item__label} htmlFor="checkout__phone_number">
					Số điện thoại
				</label>
				<input
					value={information.phoneNumber}
					onChange={(e) =>
						setInformation({ ...information, phone_number: e.target.value })
					}
					className={styles.item__input}
					type="text"
					name="phone_number"
					id="checkout__phone_number"
				/>
			</div>
			<div className={styles.form__item}>
				<p className={styles.item__label}>Phương thức thanh toán</p>
				<div className={styles.checkout__card}>
					{cardList.map((card) => (
						<CardType
							key={card.value}
							item={card}
							selectedCard={selectedCard}
							setSelectedCard={setSelectedCard}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default CheckoutInformation;
