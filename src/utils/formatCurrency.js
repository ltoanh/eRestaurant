const formatCurrency = (x) =>
	new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
		x
	);
export default formatCurrency;
