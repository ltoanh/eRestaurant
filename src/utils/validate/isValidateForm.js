const isValidateForm = (data) => {
  // username
  if(!data.username){
    return "Phải nhập username";
  }
	// confirm password
	if (data?.password !== data?.passwordConfirmation) {
		return 'Mật khẩu xác nhận phải giống nhau';
	}
	return null;
};

export default isValidateForm;

/**
 * data: object
 * @return string
 */
