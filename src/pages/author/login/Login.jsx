import React, { useState } from 'react';
import imgLogin from 'assets/images/login.png';
import InputRow from 'components/input/InputRow';
import { InputIcon } from 'components/input/InputRow';
import { Input } from 'components/input/InputRow';
import './login.css';
import { Link } from 'react-router-dom';
import PATHS from 'routes/path';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="container page__flex">
			<div className="page__left">
				<div className="form__center">
					<h3 className="page__title">Chào mừng trở lại</h3>
					<div className="input__wrapper">
						<InputRow>
							<InputIcon className="ri-user-line" />
							<Input
								name="email"
								type="email"
								value={email}
								setValue={setEmail}
								placeholder="Nhập email"
							/>
						</InputRow>
					</div>
					<div className="input__wrapper">
						<InputRow>
							<InputIcon className="ri-key-2-line" />
							<Input
								name="password"
								type="password"
								value={password}
								setValue={setPassword}
								placeholder="Nhập mật khẩu"
							/>
						</InputRow>
					</div>
					<p>
						Bạn chưa có tài khoản?{' '}
						<Link to={PATHS.SIGNUP}>
							<span className="red_text font_medium">Đăng ký</span>
						</Link>
					</p>
				</div>
			</div>
			<div className="page__right">
				<img className="page__half_img" src={imgLogin} alt="pizzdee" />
			</div>
		</div>
	);
}

export default Login;
