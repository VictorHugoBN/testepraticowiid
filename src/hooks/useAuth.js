import { useHistory } from 'react-router';

const useAuth = () => {
	const history = useHistory();
	const auth = () => {
		const auth = JSON.parse(localStorage.getItem('@auth'));

		if (auth) {
			const timeDiference = false;

			if (timeDiference) {
				localStorage.removeItem('@auth');
				history.push('/login');
			}
			return auth;
		} else {
			return { access_token: null };
		}
	};
	return auth().access_token;
};

export default useAuth;
