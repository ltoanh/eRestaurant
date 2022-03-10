import Button from 'components/button/Button';
import useCategories from 'hooks/useCategories';
import React, { forwardRef, useState } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import PATHS from 'routes/path';
import styled from 'styled-components';
import FilterRatting from './FilterRatting';

function Filter(props, ref) {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	//get categories list
	const { categoryList } = useCategories({
		_sort: 'slug',
	});

	const [queryParams, setQueryParams] = useState(Object.fromEntries([...searchParams]) || {});

	const handleOnChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = name === "total_ratings_gte" ? parseInt(target.value) : target.value;
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
		<Wrapper ref={ref}>
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
				<FilterRatting searchParams={searchParams} handleOnChange={handleOnChange} />
			</FilterChoice>
			<Button onClick={handleSubmitSearch} className="btn-primary-outline">
				Tìm kiếm
			</Button>
		</Wrapper>
	);
}

export default forwardRef(Filter);

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

	@media screen and (max-width: 480px) {
		margin: 0 0 2rem;
		border-right: 0;
		border-bottom: 1px solid var(--border-color);
		padding: 1rem 0;
		width: 100%;
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