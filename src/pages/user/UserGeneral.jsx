import swal from '@sweetalert/with-react';
import erestaurantApi from 'api/erestaurantApi';
import Button from 'components/button/Button';
import { selectorUser, setUser } from 'features/user/userSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';

function UserGeneral() {
	const { id } = useParams();
	const user = useSelector(selectorUser);
	const dispatch = useDispatch();

	const [userDetail, setUserDetail] = useState();

	useEffect(() => {
		setUserDetail(user.user);
	}, [user]);

	const handleOnChange = (e) => {
		setUserDetail({
			...userDetail,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmitUpdateInfo = () => {
		swal({
			text: 'Bạn có chắc muốn cập nhật thông tin?',
			buttons: true,
		})
			.then(async (will) => {
				if (will) {
					const response = await erestaurantApi.updateInfo(id, userDetail);
					dispatch(setUser(response));

					await toast.success('Cập nhật thành công!');
					window.location.reload();
				}
			})
			.catch((err) => {
				console.log(err);
				swal({
					icon: 'error',
					text: 'Lỗi cập nhật',
				});
			});
	};

	return (
		<Wrapper>
			<ImageWrapper>
				<Image src={userDetail?.avatar_src} alt={userDetail?.name} />
			</ImageWrapper>
			<DetailWrapper>
				<Item>
					<Title htmlFor="name">Tên:</Title>
					<Input
						type="text"
						name="name"
						id="name"
						value={userDetail?.name}
						onChange={handleOnChange}
					/>
				</Item>
				<Item>
					<Title htmlFor="email">Email:</Title>
					<Input
						type="email"
						name="email"
						id="email"
						value={userDetail?.email}
						onChange={handleOnChange}
					/>
				</Item>
				<Item>
					<Title htmlFor="address">Địa chỉ:</Title>
					<Input
						type="text"
						name="address"
						id="address"
						value={userDetail?.address}
						onChange={handleOnChange}
					/>
				</Item>
				<Item>
					<Title htmlFor="phone_number">Số điện thoại:</Title>
					<Input
						type="text"
						name="phone_number"
						id="phone_number"
						value={userDetail?.phone_number}
						onChange={handleOnChange}
					/>
				</Item>
				<Item>
					<Title htmlFor="phone_number">Avatar link:</Title>
					<Input
						type="text"
						name="avatar_src"
						id="avatar_src"
						value={userDetail?.avatar_src}
						onChange={handleOnChange}
					/>
				</Item>
				<Center>
					<Button
						onClick={handleSubmitUpdateInfo}
						className="btn btn_primary btn-small"
					>
						Cập nhật
					</Button>
				</Center>
			</DetailWrapper>
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
			/>
		</Wrapper>
	);
}

export default UserGeneral;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	gap: 3rem;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const ImageWrapper = styled.div``;
const Image = styled.img`
	display: block;
	max-width: 100%;
	width: 200px;
	height: 200px;
	object-fit: cover;

	border-radius: 999px;
`;

const DetailWrapper = styled.div`
	flex-shrink: 1;
	flex-grow: 1;
`;
const Item = styled.div`
	&:not(:first-of-type) {
		margin-top: 1rem;
	}
`;
const Title = styled.label`
	display: block;
	margin-bottom: 0.5rem;
`;
const Input = styled.input`
	width: 100%;
	padding: 0.5rem 1rem;

	border: 1px solid var(--border-color);
	border-radius: var(--border);
`;

const Center = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 0;
`;
