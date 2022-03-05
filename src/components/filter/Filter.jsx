import Button from 'components/button/Button';
import useCategories from 'hooks/useCategories';
import React, { useState } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import PATHS from 'routes/path';
import styled from 'styled-components';

function Filter() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	//get categories list
	const { categoryList } = useCategories({
		_sort: 'slug',
	});

	const [queryParams, setQueryParams] = useState(Object.fromEntries([...searchParams]) || {});

	const handleOnChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		setQueryParams({ ...queryParams, [name]: value });
	};

	const filterParams = (params) => Object.fromEntries(
		Object.entries(params).filter(([key, value]) => value !== "")
	)
	const handleSubmitSearch = (e) => {
		e.preventDefault();

		navigate({
			pathname: PATHS.SEARCH,
			search: `?${createSearchParams(filterParams(queryParams))}`,
		});
	};

	return (
		<Wrapper>
			{/* category */}
			<FilterChoice>
				<ChoiceTitle>Danh mục:</ChoiceTitle>
				<CategoryListWrapper>
					{categoryList.map((category) => (
						<CategoryItemWrapper key={category.id}>
							<Checkbox
								type="radio"
								name="categories.name_in"
								id={`category-${category.id}`}
								value={category.name}
								onChange={handleOnChange}
								defaultChecked={searchParams.get('categories.name_in') === category.name}
							/>
							<CategoryItemName htmlFor={`category-${category.id}`}>
								{category.name}
							</CategoryItemName>
							<CategoryItemTotal>{category.products.length}</CategoryItemTotal>
						</CategoryItemWrapper>
					))}
				</CategoryListWrapper>
			</FilterChoice>
			{/* price */}
			<FilterChoice>
				<ChoiceTitle>Khoảng tiền:</ChoiceTitle>
				<PriceRangeWrapper>
					<PriceInput
						onChange={handleOnChange}
						type="number"
						name="price_gte"
						placeholder="10.000"
						defaultValue={searchParams.get('price_gte')}
					/>
					<ShortLine />
					<PriceInput
						onChange={handleOnChange}
						type="number"
						name="price_lte"
						placeholder="200.000"
						defaultValue={searchParams.get('price_lte')}
					/>
				</PriceRangeWrapper>
			</FilterChoice>
			{/* rating */}
			<FilterChoice>
				<ChoiceTitle>Đánh giá:</ChoiceTitle>
				<RatingWrapper>
					{/* 5 */}
					<RatingInput
						type="radio"
						name="total_ratings_eq"
						id="rating-5"
						onChange={handleOnChange}
						defaultChecked={searchParams.get('total_ratings_eq') === "5"}
						value="5"
					/>
					<RatingStar htmlFor="rating-5" className="ri-star-fill" />
					{/* 4 */}
					<RatingInput
						type="radio"
						name="total_ratings_eq"
						id="rating-4"
						onChange={handleOnChange}
						defaultChecked={searchParams.get('total_ratings_eq') === "4"}
						value="4"
					/>
					<RatingStar htmlFor="rating-4" className="ri-star-fill" />
					{/* 3 */}
					<RatingInput
						type="radio"
						name="total_ratings_eq"
						id="rating-3"
						onChange={handleOnChange}
						defaultChecked={searchParams.get('total_ratings_eq') === "3"}
						value="3"
					/>
					<RatingStar htmlFor="rating-3" className="ri-star-fill" />
					{/* 2 */}
					<RatingInput
						type="radio"
						name="total_ratings_eq"
						id="rating-2"
						onChange={handleOnChange}
						defaultChecked={searchParams.get('total_ratings_eq') === "2"}
						value="2"
					/>
					<RatingStar htmlFor="rating-2" className="ri-star-fill" />
					{/* 1 */}
					<RatingInput
						type="radio"
						name="total_ratings_eq"
						id="rating-1"
						onChange={handleOnChange}
						defaultChecked={searchParams.get('total_ratings_eq') === "1"}
						value="1"
					/>
					<RatingStar htmlFor="rating-1" className="ri-star-fill" />
				</RatingWrapper>
			</FilterChoice>
			<Button onClick={handleSubmitSearch} className="btn-primary-outline">
				Tìm kiếm
			</Button>
		</Wrapper>
	);
}

export default Filter;

const Wrapper = styled.form`
	flex: 1;
	width: 25%;
	height: 100%;
	min-width: 200px;
	padding: 0 0.5rem;

	border-right: 1px solid var(--border-color);

	& > * ~ * {
		margin-top: 2rem;
	}
`;

const FilterChoice = styled.div``;

const ChoiceTitle = styled.h3`
	margin-bottom: 0.75rem;
`;
// category list
const CategoryListWrapper = styled.ul`
	& > * ~ * {
		margin-top: 0.35rem;
	}
`;
const CategoryItemWrapper = styled.li`
	display: flex;
	align-items: center;

	& > * ~ * {
		margin-left: 0.5rem;
	}
`;
const Checkbox = styled.input`
	cursor: pointer;
`;
const CategoryItemName = styled.label`
	cursor: pointer;
	transition: color 0.2s ease-out;

	&:hover {
		color: var(--primary);
	}
`;
const CategoryItemTotal = styled.span`
	padding: 2px 7px;

	font-size: 0.75rem;

	background-color: var(--secondary);

	border-radius: 999px;
`;

// price
const PriceRangeWrapper = styled.div`
	display: flex;
	align-items: center;

	& > * ~ * {
		margin-left: 0.5rem;
	}
`;
const ShortLine = styled.span`
	display: block;
	border-bottom: 1px solid var(--black);
	width: 10px;
	height: 1px;
`;
const PriceInput = styled.input`
	flex: 1;
	max-width: calc((100% - 10px - 0.5rem * 2) / 2);
	padding: 3px 7px;

	font-size: 0.9rem;

	border: 1px solid var(--border-color);
`;

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
