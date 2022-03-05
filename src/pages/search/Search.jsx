import erestaurantApi from 'api/erestaurantApi';
import Filter from 'components/filter/Filter';
import ProductList from 'components/product/list/ProductList';
import React, { useEffect, useState } from 'react';
import { Router, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import ProgressBar from '@badrap/bar-of-progress';

const progress = new ProgressBar({
  size: 4,
  color: '#F2BD57',
});
function Search() {
	// loading bar
	progress.start();

	const [searchParams] = useSearchParams();

	const [productList, setProductList] = useState([]);

	useEffect(() => {
		(async () => {
			const params = Object.fromEntries([...searchParams]);
			try{
        const response = await erestaurantApi.getProducts({ params });
        setTimeout(() => {
          progress.finish();
        }, 500);
        setProductList(response);
      } catch(err){
        console.log(err);
        setTimeout(() => {
          progress.finish();
        }, 500);
      }
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
