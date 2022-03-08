import swal from '@sweetalert/with-react';
import erestaurantApi from 'api/erestaurantApi';
import Button from 'components/button/Button';
import FilterRatting from 'components/filter/FilterRatting';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function UserRating({user}) {
  const {id} = useParams();

	const [rating, setRating] = useState();
	const [title, setTitle] = useState('');
	const [ratingContent, setRatingContent] = useState('');

	const handleChangeRatingContent = (value) => {
		setRatingContent(value);
	};

	const handleOnChange = (e) => {
		setRating(parseInt(e.target.value));
	};

  const handleSubmitRating = () => {
    if(rating){
      swal({
        text: "Bạn có chắc muốn đánh giá sản phẩm?",
        buttons: true,
      }).then(async will => {
        if(will){
          const params = {
            'user': user.id,
            'product': id,
            title,
            'content': ratingContent,
            'rating_star': rating
          }
          await erestaurantApi.createRatingProduct(params);

          await swal({
            icon: "success",
            text: "Đánh giá thành công",
          });

          window.location.reload();
        }
      }).catch(err => {
        console.log(err);
        swal({
          icon: "error",
          text: "Lỗi đánh giá",
        })
      })
    } else {
      swal({
        icon: "error",
        text: "Bạn cần đánh giá sao cho sản phẩm"
      })
    }
  }

	return (
		<>
			<Wrapper>
				<img
					className="product_rating__item__header__user_image"
					src={user.avatar_src}
					alt={user.name}
				/>
				<WrapperRating>
					<>
						<Title>Đánh giá</Title>
						<FilterRatting handleOnChange={handleOnChange} />
					</>
					<>
						<Title>Tiêu đề</Title>
						<InputTitle
							type="text"
							name="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</>
					<>
						<Title>Nội dung</Title>
						<ReactQuill
							value={ratingContent}
							onChange={handleChangeRatingContent}
						/>
					</>
				</WrapperRating>
			</Wrapper>
			<Row>
				<Button className="btn btn_primary btn-small" onClick={handleSubmitRating}>Đánh giá</Button>
			</Row>
		</>
	);
}

export default UserRating;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	gap: 1rem;

	min-height: calc(13rem + var(--quill-height));
`;

const WrapperRating = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

const Title = styled.h4``;

const InputTitle = styled.input`
	width: 100%;
	border: 1px solid var(--border-color);

	padding: 0.5rem 1rem;

	background-color: transparent;
`;

const Row = styled.div`
	display: flex;
	justify-content: flex-end;

	margin: 1rem 0;
`;
