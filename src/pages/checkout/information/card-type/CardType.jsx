import React from 'react';
import styles from './card-type.module.css';

function CardType(props) {
	const { item, selectedCard, setSelectedCard } = props;

	return (
		<div
			className={`${styles.card} ${
				selectedCard === item.name && styles.active
			}`}
			onClick={() => setSelectedCard(item.name)}
		>
			<i className={item.remixiconClass}></i>
			<p className={styles.card__name}>{item.name}</p>
		</div>
	);
}

export default CardType;
