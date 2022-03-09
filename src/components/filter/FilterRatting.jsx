import React from 'react';
import styled from 'styled-components';

function FilterRatting({ handleOnChange, searchParams }) {
	return (
		<RatingWrapper>
			{/* 5 */}
			<RatingInput
				type="radio"
				name="total_ratings_gte"
				id="rating-5"
				onChange={handleOnChange}
				defaultChecked={searchParams?.get('total_ratings_gte') === '5'}
				value="5"
			/>
			<RatingStar htmlFor="rating-5" className="ri-star-fill" />
			{/* 4 */}
			<RatingInput
				type="radio"
				name="total_ratings_gte"
				id="rating-4"
				onChange={handleOnChange}
				defaultChecked={searchParams?.get('total_ratings_gte') === '4'}
				value="4"
			/>
			<RatingStar htmlFor="rating-4" className="ri-star-fill" />
			{/* 3 */}
			<RatingInput
				type="radio"
				name="total_ratings_gte"
				id="rating-3"
				onChange={handleOnChange}
				defaultChecked={searchParams?.get('total_ratings_gte') === '3'}
				value="3"
			/>
			<RatingStar htmlFor="rating-3" className="ri-star-fill" />
			{/* 2 */}
			<RatingInput
				type="radio"
				name="total_ratings_gte"
				id="rating-2"
				onChange={handleOnChange}
				defaultChecked={searchParams?.get('total_ratings_gte') === '2'}
				value="2"
			/>
			<RatingStar htmlFor="rating-2" className="ri-star-fill" />
			{/* 1 */}
			<RatingInput
				type="radio"
				name="total_ratings_gte"
				id="rating-1"
				onChange={handleOnChange}
				defaultChecked={searchParams?.get('total_ratings_gte') === '1'}
				value="1"
			/>
			<RatingStar htmlFor="rating-1" className="ri-star-fill" />
		</RatingWrapper>
	);
}

export default FilterRatting;

// rating
const RatingWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row-reverse;
	justify-content: flex-end;

	& > * ~ * {
		margin-left: 0.25rem;
	}
`;
const RatingStar = styled.label`
	color: var(--gray);
	font-size: 1.125rem;

	cursor: pointer;

	transition: color 0.3s ease-out;
`;
const RatingInput = styled.input`
	display: none;

	&:not(:checked) ~ label:hover,
	&:not(:checked) ~ label:hover ~ label {
		color: var(--star);
	}

	&:checked ~ label {
		color: var(--star);
	}
`;
