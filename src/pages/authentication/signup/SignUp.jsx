import React, { useEffect, useState } from 'react';
import imgSignUp from 'assets/images/signup.png';
import { useSelector } from 'react-redux';
import { selectorUser } from 'features/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import InputRow from 'components/input/InputRow';
import { InputIcon } from 'components/input/InputRow';
import { Input } from 'components/input/InputRow';
import PATHS from 'routes/path';
import Button from 'components/button/Button';

function SignUp() {
	// redux
	const user = useSelector(selectorUser);

	// router
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [avatarSrc, setAvatarSrc] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	// button content loading
	const btnContentValue = {
		signup: 'Đăng ký',
		loading: 'Đang đăng ký...',
	};
	const [btnContent, setBtnContent] = useState(btnContentValue.signup);

	// check authenticated user
	useEffect(() => {
		if (user.isAuthenticated) {
			navigate('/');
		}
	}, [user]);

	const handleSignUp = () => {};

	return (
		<div className="container page__flex">
			<div className="page__left">
				<img src={imgSignUp} alt="pizzdee" className="page__half_img" />
			</div>
			<div className="page__right">
				<div className="form__center">
					<h3 className="page__title">Chào mừng đến với Pizzdee</h3>
          {/* username */}
          <InputRow>
						<InputIcon className="ri-user-line" />
						<Input
							name="username"
							type="text"
							value={username}
							setValue={setUsername}
							placeholder="Nhập username"
						/>
					</InputRow>
          {/* name */}
          <InputRow>
						<InputIcon className="ri-user-line" />
						<Input
							name="name"
							type="text"
							value={name}
							setValue={setName}
							placeholder="Nhập tên"
						/>
					</InputRow>
          {/* avatar_src */}
          <InputRow>
						<InputIcon className="ri-image-line" />
						<Input
							name="avatar_src"
							type="text"
							value={avatarSrc}
							setValue={setAvatarSrc}
							placeholder="Nhập địa chỉ ảnh đại diện"
						/>
					</InputRow>
          {/* email */}
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
          {/* password */}
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
          {/* password confirmation */}
					<InputRow>
						<InputIcon className="ri-key-2-line" />
						<Input
							name="passwordConfirmation"
							type="password"
							value={passwordConfirmation}
							setValue={setPasswordConfirmation}
							placeholder="Xác nhận mật khẩu"
						/>
					</InputRow>
          {/* address */}
          <InputRow>
						<InputIcon className="ri-map-pin-2-line" />
						<Input
							name="address"
							type="text"
							value={address}
							setValue={setAddress}
							placeholder="Nhập địa chỉ"
						/>
					</InputRow>
          {/* phone_number */}
          <InputRow>
						<InputIcon className="ri-phone-line" />
						<Input
							name="phone_number"
							type="text"
							value={phoneNumber}
							setValue={setPhoneNumber}
							placeholder="Nhập số điện thoại"
						/>
					</InputRow>
					<div className="form__row_between">
						<p>
							Bạn có tài khoản?{' '}
							<Link to={PATHS.LOGIN}>
								<span className="red_text font_medium">Đăng nhập</span>
							</Link>
						</p>
						<Button
							onClick={handleSignUp}
							className="btn-small btn-primary-outline"
						>
							{btnContent}
						</Button>
					</div>
					{errorMessage && <p className="red_text">{errorMessage}</p>}
				</div>
			</div>
		</div>
	);
}

export default SignUp;
