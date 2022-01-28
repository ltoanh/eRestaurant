import pizzdeeApi from 'api/pizzdeeApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './categories.module.css';

function CategoriesList() {
	// categories
	const [categories, setCategories] = useState([]);

	// get categories list sort by slug
	const getCategoriesList = async () => {
    const params = {
      '_sort': 'slug',
    }
		let response = await pizzdeeApi.getCategories({ params });
		setCategories(response);
	};
	useEffect(() => {
		getCategoriesList();
	}, []);

	return (
		<div className={styles.container}>
			{categories.map((category) => (
				<Category key={category.id} className={styles.category} category={category} />
			))}
		</div>
	);
}

export default CategoriesList;

const Category = (props) => {
	const { category } = props;
	return (
		<Link className={props.className} to={`/products?id=${category.id}`}>
			<img src={category.thumbnail_src} alt={category.name} height={40} />
			<span className={styles.category__title}>{category.name}</span>
		</Link>
	);
};
