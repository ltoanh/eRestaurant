import erestaurantApi from "api/erestaurantApi";
import { useEffect, useState } from "react";

function useCategories(params) {
  const [categoryList, setCategoryList] = useState([]);

  // get categories list
	const getDataList = async (params) => {
		const response = await erestaurantApi.getCategories({ params });
		setCategoryList(response);
	};
	useEffect(() => {
		getDataList(params ?? {});
	}, []);

  return {categoryList};
}

export default useCategories