import React from 'react';

const AuthContext = React.createContext({
	user: null,
	loading: false,
	logInWithGoogle: () => {},
	logOut: () => {},
});

export default AuthContext;
