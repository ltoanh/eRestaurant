import imgLogin from 'assets/images/login.png';
import Button from 'components/button/Button';
import InputRow, { Input, InputIcon } from 'components/input/InputRow';
import useAuthenticate from 'hooks/useAuthenticate';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PATHS from 'routes/path';
import './login.css';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// button content loading
	const btnContentValue = {
		login: 'Đăng nhập',
		loading: 'Đang đăng nhập...',
	};

	// login
	const { isLoading, errorMessage, setParams } = useAuthenticate('login');
	const handleLogin = async () => {
		const loginData = {
			identifier: email,
			password,
		};

		setParams(loginData);
	};

	return (
		<div className="container page__flex">
			<div className="page__left">
				<img className="page__half_img" src={imgLogin} alt="erestaurant" />
			</div>
			<div className="page__right">
				<div className="form__center">
					<h3 className="page__title">Chào mừng trở lại</h3>
					<InputRow>
						<InputIcon className="ri-mail-line" />
						<Input
							name="email"
							type="email"
							value={email}
							setValue={setEmail}
							placeholder="Nhập email"
						/>
					</InputRow>
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
					<div className="form__row_between">
						<p>
							Bạn chưa có tài khoản?{' '}
							<Link to={PATHS.SIGNUP}>
								<span className="red_text font_medium">Đăng ký</span>
							</Link>
						</p>
						<Button
							onClick={handleLogin}
							className="btn-small btn-primary-outline"
						>
							{!isLoading ? btnContentValue.login : btnContentValue.loading}
						</Button>
					</div>
					{errorMessage && <p className="red_text">{errorMessage}</p>}
				</div>
			</div>
		</div>
	);
}

export default Login;
