import ArrowButton from 'components/button/ArrowButton';
import SocialButton from 'components/button/SocialButton';
import React from 'react';
import { Link } from 'react-router-dom';
import PATHS from 'routes/path';
import './footer.css';

function Footer() {
	return (
		<div id="footer" className="container">
			<div className="footer_left">
				<h5 className="footer_left__title">
					Đăng ký để nhận
					<br />
					tin tức mới nhất
				</h5>
				<div className="footer__email__wrapper">
					<input
						className="footer__email"
						type="text"
						placeholder="Nhập email của bạn"
					/>
					<ArrowButton className="arrow-primary">
						<i className="ri-arrow-right-line"></i>
					</ArrowButton>
				</div>
				<ul className="footer__socials">
					<li>
						<SocialButton className="btn-social-primary">
							<Link to="#">
								<i className="ri-facebook-fill"></i>
							</Link>
						</SocialButton>
					</li>
					<li>
						<SocialButton className="btn-social-primary">
							<Link to="#">
								<i className="ri-twitter-fill"></i>
							</Link>
						</SocialButton>
					</li>
					<li>
						<SocialButton className="btn-social-primary">
							<Link to="#">
								<i className="ri-instagram-fill"></i>
							</Link>
						</SocialButton>
					</li>
					<li>
						<SocialButton className="btn-social-primary">
							<Link to="#">
								<i className="ri-youtube-fill"></i>
							</Link>
						</SocialButton>
					</li>
				</ul>
			</div>
			<div className="footer_right">
				<div className="footer_list">
					<h6 className="footer_list__title">Dịch vụ</h6>
					<ul className="footer_list__item">
						<li>Đặt hàng online</li>
						<li>Đặt bàn trước</li>
						<li>Phục vụ 24/7</li>
						<li>Không gian thoáng mát</li>
						<li>Không gian bếp sạch sẽ</li>
						<li>Đầu bếp thâm niên</li>
					</ul>
				</div>
				<div className="footer_list">
					<h6 className="footer_list__title">Liên kết</h6>
					<ul className="footer_list__item">
						<li>
							<Link to={PATHS.MENU}>Thực đơn</Link>
						</li>
						<li>
							<Link to={PATHS.STORE}>Cửa hàng</Link>
						</li>
						<li>Đánh giá</li>
						<li>Blogs</li>
						<li>Đặt bàn</li>
					</ul>
				</div>
				<div className="footer_list">
					<h6 className="footer_list__title">Về chúng tôi</h6>
					<ul className="footer_list__item">
						<li>Câu chuyện</li>
            <li>Tiện ích</li>
            <li>Nhân viên</li>
            <li>Đầu bếp</li>
					</ul>
				</div>
				<div className="footer_list">
					<h6 className="footer_list__title">Hỗ trợ</h6>
					<ul className="footer_list__item">
						<li>Liên hệ</li>
            <li>Hỗ trợ</li>
            <li>FAQ</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
