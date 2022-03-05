import React from 'react';
import StoreContent from './content/StoreContent';
import StoreHeader from './header/StoreHeader';
import styled from 'styled-components';
import Filter from 'components/filter/Filter';

function Store() {
	return (
		<StoreWrapper className="container">
			<Filter />
			<ProductListWrapper>
				<StoreHeader />
				<StoreContent />
			</ProductListWrapper>
		</StoreWrapper>
	);
}

export default Store;

const StoreWrapper = styled.div`
	margin-bottom: 3rem;
	display: flex;
`;
const ProductListWrapper = styled.div`
	& > * ~ * {
		margin-top: 2rem;
		flex: 3;
	}
`;