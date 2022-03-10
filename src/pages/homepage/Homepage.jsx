import erestaurantApi from 'api/erestaurantApi';
import svgHumanPlan from 'assets/images/humans/barista-waiter-salesman.png';
import svgHumanService from 'assets/images/humans/shopping-delivery-handing-box.png';
import svgChef from 'assets/images/service/chef-svgrepo-com.svg';
import svgPlace from 'assets/images/service/coffee-table-svgrepo-com.svg';
import svgCleanKitchen from 'assets/images/service/kitchen-pack-svgrepo-com.svg';
import svgOnlineOrder from 'assets/images/service/online-order.svg';
import svg247Service from 'assets/images/service/open-svgrepo-com.svg';
import svgPreReservation from 'assets/images/service/reserved-svgrepo-com.svg';
import Button from 'components/button/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PATHS from 'routes/path';
import CategoriesList from './category/CategoriesList';
import Hero from './hero/Hero';
import './homepage.css';
import Ratings from './rating/Ratings';
import imgPhone from 'assets/images/phone.png';
import SliderProductList from 'components/product/slider-list/SliderProductList';

const LIMIT_SHOW_PRODUCT = 10;

function Homepage() {
	const [latestProductsList, setLatestProductsList] = useState([]);

	// get latest product
	const getProductsList = async () => {
		const params = {
			_sort: 'created_at:DESC',
			_limit: LIMIT_SHOW_PRODUCT,
		};
		let response = await erestaurantApi.getProducts({ params });
		setLatestProductsList(response);
	};
	useEffect(() => {
		getProductsList(10);
	}, []);

	return (
		<div className="container">
			<Hero />
			<section className="section">
				<h2 className="section__title">Thực đơn</h2>
				<CategoriesList />
			</section>
			<section className="section">
				<h2 className="section__title">Mới nhất</h2>
				<SliderProductList list={latestProductsList} />
			</section>
			<div className="section section-flex">
				<div className="section__left section__image">
					<img
						className="section__left--image"
						src={svgHumanService}
						alt="best service"
					/>
				</div>
				<div className="section__right">
					<h2 className="section__title">Chúng tôi hỗ trợ nhiều dịch vụ</h2>
					<p className="section__desc">
						Nhà hàng chúng tôi phục vụ cả đồ ăn và nước uống, ngoài ra còn có đồ
						ăn nhẹ được chế biến từ những nguyên liệu được lựa chọn kĩ càng,
						mang lại cho bạn những trải nghiệm tuyệt vời nhất.
					</p>
					<ul className="service-list">
						<li className="service-item">
							<img
								className="service-item__image"
								src={svgOnlineOrder}
								alt="online order"
							/>
							<span className="service-item__title">Đặt hàng online</span>
						</li>
						<li className="service-item">
							<img
								className="service-item__image"
								src={svgPreReservation}
								alt="pre-reservation"
							/>
							<span className="service-item__title">Đặt bàn trước</span>
						</li>
						<li className="service-item">
							<img
								className="service-item__image"
								src={svg247Service}
								alt="24/7 service"
							/>
							<span className="service-item__title">Phục vụ 24/7</span>
						</li>
						<li className="service-item">
							<img
								className="service-item__image"
								src={svgPlace}
								alt="oraganized foodie place"
							/>
							<span className="service-item__title">Không gian thoáng mát</span>
						</li>
						<li className="service-item">
							<img
								className="service-item__image"
								src={svgCleanKitchen}
								alt="clean kitchen"
							/>
							<span className="service-item__title">
								Không gian bếp sạch sẽ
							</span>
						</li>
						<li className="service-item">
							<img
								className="service-item__image"
								src={svgChef}
								alt="super chefs"
							/>
							<span className="service-item__title">Đầu bếp thâm niên</span>
						</li>
					</ul>
					<div>
						<Button className="btn-primary-outline">
							<Link to={PATHS.ABOUT_US}>Về chúng tôi</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className="section section-flex">
				<div className="section__left">
					<h2 className="section__title">
						Bạn có kế hoạch cho ngày hôm nay?<br></br>Đặt món ngay
					</h2>
					<p className="section__desc">
						Đặt món online, xem các đánh giá về bữa ăn, và kiếm vouchers.
					</p>
					<div>
						<Button className="btn-primary-outline">Đặt món ngay</Button>
					</div>
				</div>
				<div className="section__right section__image">
					<img
						className="section__left--image"
						src={svgHumanPlan}
						alt="best service"
					/>
				</div>
			</div>
			<div className="section">
				<h2 className="section__title">Đánh giá của khách hàng</h2>
				<Ratings />
			</div>
			<div className="section section-flex section__bg-secondary">
				<div className="section__left">
					<h5 className="section__title">
						Không bao giờ cảm thấy đói.
						<br />
						Tải app và tận hưởng
					</h5>
					<p className="section__desc">
						Đặt món online, đặt bàn online, đọc đánh giá nhà hàng và kiếm
						voucher cho bữa ăn.
					</p>
					<div className="section-row">
						<Button className="btn-primary-outline btn-small">
							<i className="ri-apple-line"></i>
							Download on AppStore
						</Button>
						<Button className="btn-primary-outline btn-small">
							<i className="ri-google-play-line"></i>
							Get it from CHPlay
						</Button>
					</div>
				</div>
				<div className="section__right section__image">
					<img height="400px" src={imgPhone} alt="download erestaurant" />
				</div>
			</div>
		</div>
	);
}

export default Homepage;
