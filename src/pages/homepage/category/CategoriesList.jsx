import useCategories from 'hooks/useCategories';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './categories.module.css';

function CategoriesList() {
	// get categories list sort by slug
	const {categoryList} = useCategories({
		'_sort': 'slug',
	});

	return (
		<div className={styles.container}>
			{categoryList.map((category) => (
				<Category key={category.id} className={styles.category} category={category} />
			))}
		</div>
	);
}

export default CategoriesList;

const Category = (props) => {
	const { category } = props;
	return (
		<Link className={props.className} to={`/menu?id=${category.id}`}>
			<img src={category.thumbnail_src} alt={category.name} height={40} />
			<span className={styles.category__title}>{category.name}</span>
		</Link>
	);
};
