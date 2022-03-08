import React from 'react';
import styled from 'styled-components';

function StatusBar() {
	return (
		<StatusBarWrapper>
			<Timeline>
				<ProgressBar />
				<TimelineItemsWrapper>
					<TimelineItem className='active-progress'>
						<ItemIcon className="ri-bill-line" />
						<ItemContent>Thanh toán thành công</ItemContent>
					</TimelineItem>
					<TimelineItem>
            <ItemIcon className="ri-inbox-unarchive-line" />
						<ItemContent>Đang chuẩn bị hàng</ItemContent>
          </TimelineItem>
					<TimelineItem>
            <ItemIcon className="ri-e-bike-2-line" />
						<ItemContent>Đang giao hàng</ItemContent>
          </TimelineItem>
					<TimelineItem>
            <ItemIcon className="ri-check-double-line" />
						<ItemContent>Hoàn thành</ItemContent>
          </TimelineItem>
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
