import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function StatusBar({status}) {

	const [items, setItems] = useState([
		{
			name: "payment",
			title: 'Thanh toán thành công',
			iconClass: "ri-bill-line",
			active: false,
		},
		{
			name: "preparing",
			title: 'Đang chuẩn bị hàng',
			iconClass: "ri-inbox-unarchive-line",
			active: false,
		},
		{
			name: "shipping",
			title: 'Đang giao hàng',
			iconClass: "ri-e-bike-2-line",
			active: false,
		},
		{
			name: "success",
			title: 'Hoàn thành',
			iconClass: "ri-check-double-line",
			active: false,
		},
	]);
	const [numberOfActiveItems, setNumberOfActiveItems] = useState(0);
	const [progressBarWidth, setProgressBarWidth] = useState(0);

	const updateItemAtID = (items, i) => items.map((item, id) => id <= i ? {...item, active: true} : item);

	useEffect(() => {
		if(status){
			for(let i = 0; i < 4; ++i){
				const item = items[i];
				setItems(updateItemAtID(items, i));
				if(item.name === status){
					break;
				}
			}
		}
	}, [status]);
	
	useEffect(() => {
		setNumberOfActiveItems(items.filter(item => item.active).length);
		setProgressBarWidth((numberOfActiveItems - 1) / (items.length - 1) * 100);
	}, [items, numberOfActiveItems]);
	

	return (
		<StatusBarWrapper>
			<Timeline>
				<ProgressBar style={{width: `${progressBarWidth}%`}} />
				<TimelineItemsWrapper>
					{items.map((item, idx) => (
						<TimelineItem key={idx} className={item.active && "active-progress"}>
							<ItemIcon className={item.iconClass} />
							<ItemContent>{item.title}</ItemContent>
						</TimelineItem>
					))}
				</TimelineItemsWrapper>
			</Timeline>
		</StatusBarWrapper>
	);
}

export default StatusBar;

const StatusBarWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Timeline = styled.div`
	width: 80%;
	height: 5px;
	background-color: var(--border-color);

	border-radius: 999px;

	margin: 1rem 0 7rem;

	z-index: 0;
`;

const ProgressBar = styled.div`
	height: 100%;
	width: 0;
	background-color: var(--primary);

	z-index: 1;

	border-radius: inherit;
`;

const TimelineItemsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const TimelineItem = styled.div`
	position: relative;

	&::before {
		content: '';

		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-12.5px);

		width: 20px;
		height: 20px;

		background-color: var(--primary);

		border-radius: 999px;
	}
`;

const ItemIcon = styled.i`
	position: absolute;
	top: 1.25rem;
	left: 50%;
	transform: translateX(calc(-50% + 10px));

	font-size: 1.5rem;
	color: var(--border-color);

	border: 2px solid var(--border-color);
	border-radius: 999px;

	display: inline-block;
	padding: 0.5rem;
`;
const ItemContent = styled.p`
	position: absolute;

	top: 4.5rem;
	left: 50%;
	transform: translateX(calc(-50% + 10px));
	width: 200px;
	text-align: center;

	color: var(--gray);
`;
