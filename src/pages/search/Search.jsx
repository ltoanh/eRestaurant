import erestaurantApi from 'api/erestaurantApi';
import Filter from 'components/filter/Filter';
import ProductList from 'components/product/list/ProductList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function Search() {
	const [searchParams] = useSearchParams();

	const [productList, setProductList] = useState([]);

	useEffect(() => {
		(async () => {
			const params = Object.fromEntries([...searchParams]);
			const response = await erestaurantApi.getProducts({ params });
			setProductList(response);
		})();
	}, [searchParams]);

	return (
		<SearchWrapper className="container">
			<Filter />
			<ContentWrapper>
        <ProductList list={productList} />
      </ContentWrapper>
		</SearchWrapper>
	);
}

export default Search;

const SearchWrapper = styled.div`
	display: flex;
`;
const ContentWrapper = styled.div`
	flex: 4;
`;