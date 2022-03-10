import React, { useEffect, useRef, useState } from 'react';
import StoreContent from './content/StoreContent';
import StoreHeader from './header/StoreHeader';
import styled from 'styled-components';
import Filter from 'components/filter/Filter';

function Store() {
	const [width, setWindowWidth] = useState(0);
	const filterRef = useRef();
	const iconMobileRef = useRef();

	const updateDimensions = () => {
		const width = window.innerWidth;
		setWindowWidth(width);
	};

	useEffect(() => {
		updateDimensions();

		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	// check mobile menu
	useEffect(() => {
		if (width <= 480) {
			filterRef.current.classList.add("hidden");
			console.log(width);
		} else {
			filterRef.current.classList.remove("hidden");
		}
	}, [width]);

	// click icon
	const handleClickIcon = () => {
		filterRef.current.classList.toggle("hidden");
		if(filterRef.current.classList.contains("hidden")){
			iconMobileRef.current.className = "ri-menu-line";
		} else {
			iconMobileRef.current.className = "ri-close-line";
		}
	}

	return (
		<StoreWrapper className="container">
			{width <= 480 && (
				<IconWrapper>
					<MobileFilterIcon ref={iconMobileRef} onClick={handleClickIcon} className="ri-menu-line"></MobileFilterIcon>
					<strong>Bộ lọc</strong>
				</IconWrapper>
			)}
			<Filter ref={filterRef} />
			<ProductListWrapper>
				<StoreHeader />
				<StoreContent />
			</ProductListWrapper>
		</StoreWrapper>
	);
}

export default Store;

const StoreWrapper = styled.div`
	margin-bottom: 3rem;
	display: flex;

	@media screen and (max-width: 480px) {
		flex-direction: column;
	}
`;

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	margin-bottom: 1rem;
`;
const MobileFilterIcon = styled.i`
	display: none;
	@media screen and (max-width: 480px) {
		display: block;
		margin: 1rem 0;

		cursor: pointer;
	}
	&:active {
		transform: scale(0.9);
	}
`;
const ProductListWrapper = styled.div`
	& > * ~ * {
		margin-top: 2rem;
		flex: 3;
	}
`;
