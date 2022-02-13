import Cookies from 'js-cookie';

const USER_AUTHENTICATED_COOKIE = 'USER_AUTHENTICATED_COOKIE';

export const authenticatedCookie = Cookies.get(USER_AUTHENTICATED_COOKIE);

export const setAuthenticatedCookie = (value) =>
	Cookies.set(USER_AUTHENTICATED_COOKIE, value, { expires: 7 });

export const removeAuthenticatedCookie = () => Cookies.remove(USER_AUTHENTICATED_COOKIE);