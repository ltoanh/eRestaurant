import React from 'react';
import StoreContent from './content/StoreContent';
import StoreHeader from './header/StoreHeader';
import styled from 'styled-components';

function Store() {
	return <StoreWrapper className="container">
		<StoreHeader />
		<StoreContent />
	</StoreWrapper>;
}

export default Store;

const StoreWrapper = styled.div`
	& > * ~ * {
		margin-top: 2rem;
	}
	margin-bottom: 3rem;
`;