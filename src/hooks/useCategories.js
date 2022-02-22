import pizzdeeApi from "api/pizzdeeApi";
import { useEffect, useState } from "react";

function useCategories(params) {
  const [categoryList, setCategoryList] = useState([]);

  // get categories list
	const getDataList = async (params) => {
		const response = await pizzdeeApi.getCategories({ params });
		setCategoryList(response);
	};
	useEffect(() => {
		getDataList(params ?? {});
	}, []);

  return {categoryList};
}

export default useCategories