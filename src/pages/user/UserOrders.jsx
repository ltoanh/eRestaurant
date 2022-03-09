import erestaurantApi from 'api/erestaurantApi';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import formatDateRelative from 'utils/format/formatDate';

const orderStatus = [
	{
		name: 'payment',
		title: 'Thanh toán thành công',
	},
	{
		name: 'preparing',
		title: 'Đang chuẩn bị hàng',
	},
	{
		name: 'shipping',
		title: 'Đang giao hàng',
	},
	{
		name: 'success',
		title: 'Hoàn thành',
	},
];
function UserOrders() {
	const { id } = useParams();
	const [billList, setBillList] = useState();

	useEffect(() => {
		if(id){
      (async () => {
        const params = {
          'user.id_eq': id,
        };
        const response = await erestaurantApi.getBill({params});
        setBillList(response);
      })();
    };
	}, [id]);

	return (
		<div>
			<TableWrapper>
				<thead>
					<th>Mã</th>
					<th>Tên khách hàng</th>
					<th>Địa chỉ</th>
					<th>Ngày đặt</th>
					<th>Cập nhật</th>
					<th>Trạng thái</th>
				</thead>
				<BodyWrapper>
					{billList &&
						billList.map((bill) => (
							<Row key={bill.id}>
								<th style={{textDecoration: "underline"}}>
                  <NavLink to={`/order/${bill.id}`}>{bill.id}</NavLink>
                </th>
								<td>{bill.user.name}</td>
								<td>{bill.user.address}</td>
								<td>{formatDateRelative(bill.created_at)}</td>
								<td>{formatDateRelative(bill.updated_at)}</td>
								<td>
									{orderStatus.find((item) => item.name === bill.status).title}
								</td>
							</Row>
						))}
				</BodyWrapper>
			</TableWrapper>
		</div>
	);
}

export default UserOrders;

const TableWrapper = styled.table`
	width: 100%;
	border-spacing: 0.5rem 1rem;
	border-collapse: collapse;

	&,
  thead th,
	tr,
	td {
		border: 1.5px solid var(--border-color);
		padding: 0.5rem;
	}
`;
const BodyWrapper = styled.tbody`
	width: 100%;
	text-align: center;
`;

const Row = styled.tr``;
