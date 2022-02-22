import React, { useEffect, useRef, useState } from 'react';
import erestaurantApi from 'api/erestaurantApi';
import Slider from 'react-slick';
import './rating.css';
import ArrowButton from 'components/button/ArrowButton';

const LIMIT_SHOW_RATING = 10;

function Ratings() {
	const [ratingsList, setRatingsList] = useState([]);

	// slider
	const refSlider = useRef();
	const settingsSlider = {
		arrows: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		// custom arrow
	};

	const getRatingsList = async () => {
		const params = {
			_sort: 'created_at:desc',
			_limit: LIMIT_SHOW_RATING,
		};
		let response = await erestaurantApi.getRatings({ params });
		setRatingsList(response);
	};
	// fetch ratings data
	useEffect(() => {
		getRatingsList();
	}, []);
	return (
		<div className="ratings_container">
			<div className="ratings_btns">
				<ArrowButton className="arrow-primary" onClick={() => refSlider.current?.slickPrev()}>
					<i className="ri-arrow-left-line"></i>
				</ArrowButton>
				<ArrowButton className="arrow-primary" onClick={() => refSlider.current?.slickNext()}>
					<i className="ri-arrow-right-line"></i>
				</ArrowButton>
			</div>
			<Slider ref={refSlider} {...settingsSlider}>
				{ratingsList.map(item => (
          <Rating item={item} key={item.id} />
        ))}
			</Slider>
		</div>
	);
}

export default Ratings;

const Rating = ({item}) => {
  return(
    <div className="rating_item">
      <p className="rating_pre">{item.title}</p>
      <div className="rating_item__user">
        <img className='rating_item__user_img' src={item.user.avatar_src} alt={item.user.name} />
        <strong className='rating_item__user_name'>{item.user.name}</strong>
      </div>
    </div>
  )
}