import erestaurantApi from 'api/erestaurantApi';
import { TotalPrice } from 'pages/checkout/bill/Bill';
import BillProductList from 'pages/checkout/bill/product-list/BillProductList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import OrderInfo from './OrderInfo';
import StatusBar from './StatusBar';

function OrderDetail() {
	const { id } = useParams();

	const [bill, setBill] = useState();

	useEffect(() => {
		(async () => {
			const response = await erestaurantApi.getBillByID(id);
			setBill(response);
		})();
	}, [id]);

	return (
		<div className="container">
			{bill ? (
				<>
					<StatusBar />
					<DivideLine />
					<OrderInfo bill={bill} />
					<DivideLine />
					<BillProductList products={bill?.products} />
					<TotalPrice
						totalPrice={bill?.total_price}
						discount={bill?.discount}
					/>
				</>
			) : (
				<p>Không tìm thấy đơn hàng</p>
			)}
		</div>
	);
}

export default OrderDetail;

const DivideLine = styled.div`
	height: 0.1875rem;
	width: 100%;
	margin: 1rem 0 2rem;

	background-position-x: -1.5rem;
	background-size: 7.25rem 0.1875rem;
	background-image: repeating-linear-gradient(
		45deg,
		var(--primary) 0,
		var(--primary) 33px,
		transparent 33px,
		transparent 41px,
		var(--red) 41px,
		var(--red) 74px,
		transparent 74px,
		transparent 82px
	);
`;
