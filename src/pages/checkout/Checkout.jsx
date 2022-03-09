import React, { useEffect, useState } from 'react';
import Bill from './bill/Bill';
import CheckoutInformation from './information/CheckoutInformation';
import './checkout.css';
import { useSelector } from 'react-redux';
import { selectorUser } from 'features/user/userSlice';
import withAuth from 'hooks/withAuth';

const cardList = [
	{
		remixiconClass: 'ri-mastercard-line',
		value: 'mastercard',
		name: 'Thẻ master card',
	},
	{
		remixiconClass: 'ri-bank-card-line',
		value: 'bankcard',
		name: 'Thẻ ngân hàng nội địa',
	},
	{
		remixiconClass: 'ri-wallet-3-line',
		value: 'cod',
		name: 'Thanh toán khi nhận hàng',
	},
];

function Checkout() {
	const user = useSelector(selectorUser);
	const [information, setInformation] = useState({
		name: '',
		address: '',
		phone_number: '',
	});
	// selected card
	const [selectedCard, setSelectedCard] = useState('');

	useEffect(() => {
		if (user !== null) {
			setInformation({
				id: user?.user?.id,
				name: user?.user?.name,
				address: user?.user?.address,
				phone_number: user?.user?.phone_number,
			});
		}
	}, [user]);

	return (
		<div className="container">
			<h2 className="page__title">Thanh toán</h2>
			<div className="short_divide"></div>
			<section className="flex checkout__wrapper">
				<div className="page__left">
					<CheckoutInformation
						information={information}
						setInformation={setInformation}
						selectedCard={selectedCard}
						setSelectedCard={setSelectedCard}
						cardList={cardList}
					/>
				</div>
				<div className="page__right">
					<Bill information={information} selectedCard={selectedCard}/>
				</div>
			</section>
		</div>
	);
}

export default withAuth(Checkout);
