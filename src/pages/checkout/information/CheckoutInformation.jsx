import React from 'react';
import CardType from './card-type/CardType';
import styled from 'styled-components';
function CheckoutInformation(props) {
	const {information, setInformation, selectedCard, setSelectedCard, cardList} = props;
	
	return (
		<FormWrapper>
			<FormItem>
				<FormItemTitle htmlFor="checkout__name">
					Họ tên
				</FormItemTitle>
				<FormItemInput
					value={information.name}
					onChange={(e) =>
						setInformation({ ...information, name: e.target.value })
					}
					type="text"
					name="name"
					id="checkout__name"
				/>
			</FormItem>
			<FormItem>
				<FormItemTitle htmlFor="checkout__address">
					Địa chỉ
				</FormItemTitle>
				<FormItemInput
					value={information.address}
					onChange={(e) =>
						setInformation({ ...information, address: e.target.value })
					}
					type="text"
					name="address"
					id="checkout__address"
				/>
			</FormItem>
			<FormItem>
				<FormItemTitle htmlFor="checkout__phone_number">
					Số điện thoại
				</FormItemTitle>
				<FormItemInput
					value={information.phoneNumber}
					onChange={(e) =>
						setInformation({ ...information, phone_number: e.target.value })
					}
					type="text"
					name="phone_number"
					id="checkout__phone_number"
				/>
			</FormItem>
			<FormItem>
				<FormItemTitle>Phương thức thanh toán</FormItemTitle>
				<CardWrapper>
					{cardList.map((card) => (
						<CardType
							key={card.value}
							item={card}
							selectedCard={selectedCard}
							setSelectedCard={setSelectedCard}
						/>
					))}
				</CardWrapper>
			</FormItem>
		</FormWrapper>
	);
}

export default CheckoutInformation;

const FormWrapper = styled.form`
  margin: 1.5rem 0;

	& > * ~ *{
		margin-top: 1rem;
	}
`;

const FormItem = styled.div`
	display: flex;
  flex-direction: column;
`;
const FormItemTitle = styled.label`
	font-weight: 600;
  margin-bottom: 10px;
`;
const FormItemInput = styled.input`
	padding: 7px 13px;
  
  background-color: transparent;

  border: 1px solid var(--border-color);
  border-radius: var(--border);
`;


const CardWrapper = styled.div`
	display: flex;
  flex-wrap: wrap;

  gap: .5rem;
`;