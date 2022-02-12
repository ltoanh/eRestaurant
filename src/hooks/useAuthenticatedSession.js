const USER_AUTHENTICATED_SESSION = 'USER_AUTHENTICATED_SESSION';

function useAuthenticatedSession() {
	const authenticatedSession = () =>
		`Bearer ${sessionStorage.getItem(USER_AUTHENTICATED_SESSION)}`;

	const setAuthenticatedSession = (value) =>
		sessionStorage.setItem(USER_AUTHENTICATED_SESSION, value);
    
	return { authenticatedSession, setAuthenticatedSession };
}

export default useAuthenticatedSession;
