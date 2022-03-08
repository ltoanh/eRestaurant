import React from 'react';
import styled from 'styled-components';
import formatDateRelative from 'utils/format/formatDate';

function OrderInfo({ bill }) {
	return (
		<Wrapper>
			{/* header */}
			<HeaderWrapper>
				{/* left */}
				<HeaderInfo>
					<InfoName>{bill?.user.name}</InfoName>
					<InfoText>{bill?.user.address}</InfoText>
					<InfoText>{bill?.user.phone_number}</InfoText>
				</HeaderInfo>
				{/* right */}
				<HeaderStatus>
					<StatusItem>
						<StatusItemTime>
							{bill && formatDateRelative(bill?.created_at)}:
						</StatusItemTime>{' '}
						Thanh toán thành công
					</StatusItem>
				</HeaderStatus>
			</HeaderWrapper>
		</Wrapper>
	);
}

export default OrderInfo;

const Wrapper = styled.div``;

const HeaderWrapper = styled.div`
	display: flex;
`;

const HeaderInfo = styled.div`
	flex: 1;
	padding: 1rem;

	border-right: 2px solid var(--border-color);
`;
const InfoName = styled.h3`
	font-size: 1rem;
`;
const InfoText = styled.p`
	color: var(--gray);
	font-size: 0.925rem;
	margin-top: 0.25rem;
`;

const HeaderStatus = styled.div`
	flex: 1;
	padding: 1rem;
`;
const StatusItem = styled.p``;
const StatusItemTime = styled.strong`
	text-transform: uppercase;
`;
