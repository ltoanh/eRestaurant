import React from 'react';
// import imageChef from 'assets/images/header/Chef_Flatline.svg';
// import heroImage from 'assets/images/header/family-210.png'
import heroImage from 'assets/images/humans/contactless-shopping-delivery.png'
import styles from './hero.module.css';

function Hero() {
	return (
		<div id={styles.bg}>
			<img id={styles.bg__image} src={heroImage} alt="chef" />
			<div id={styles.wrapper}>
				<h1 id={styles.title}>Những món ăn hấp dẫn<br/> trong tầm tay bạn</h1>
        <p id={styles.desc}>
          Chọn món bạn thích, còn lại để chúng tôi lo!
        </p>
			</div>
		</div>
	);
}

export default Hero;
