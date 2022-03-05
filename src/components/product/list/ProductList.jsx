import React from 'react';
import ProductCard from '../card/ProductCard';
import styled from 'styled-components';

function ProductList({ list }) {
	return (
		<ProductListWrapper>
			{list.map((item) => (
				<ProductItem key={item.id}>
					<ProductCard item={item} />
				</ProductItem>
			))}
		</ProductListWrapper>
	);
}

export default ProductList;

const ProductListWrapper = styled.div`
	display: flex;
  justify-content: center;
	flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 2rem;
`;
const ProductItem = styled.div`
  width: calc(25% - 3 * 1rem);
	min-width: 200px;
`;
