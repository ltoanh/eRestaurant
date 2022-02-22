import erestaurantApi from 'api/erestaurantApi';
import ProductList from 'components/product/list/ProductList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function StoreContent() {
	const { id } = useParams();
	const [productList, setProductList] = useState([]);
	const [dataList, setDataList] = useState([]);

	//get productList
	const getDataList = async () => {
		const params = {
			_sort: 'created_at:desc',
		};
		const response = await erestaurantApi.getProducts({ params });
		setDataList(response);
	};
	useEffect(() => {
		getDataList();
	}, []);

	// filter product by category id
	useEffect(() => {
		if (id) {
			let response = dataList.filter((product) =>
				product.categories.some((category) => category.id === parseInt(id))
			);
			setProductList(response);
		} else {
			setProductList(dataList);
		}
	}, [id, dataList]);

	return <ProductList list={productList} />;
}

export default StoreContent;