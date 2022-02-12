import Cookies from 'js-cookie';

const USER_AUTHENTICATED_SESSION = 'USER_AUTHENTICATED_SESSION';

// export const authenticatedSession = sessionStorage.getItem(
// 	USER_AUTHENTICATED_SESSION
// );

// export const setAuthenticatedSession = (value) =>
// 	sessionStorage.setItem(USER_AUTHENTICATED_SESSION, value);

export const authenticatedSession = Cookies.get(USER_AUTHENTICATED_SESSION);

export const setAuthenticatedSession = (value) =>
	Cookies.set(USER_AUTHENTICATED_SESSION, value, { expires: 7 });
