import { React } from 'react';
import AuthContext from './auth-context';
import { auth, provider, db } from '../../utilities/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthProvider = ({ children }) => {
	const [user, loading] = useAuthState(auth);

	const logInWithGoogle = () => {
		signInWithPopup(auth, provider).then((result) => {
			const user = result.user;
			setCurrentUser(user);
			const docRef = doc(db, 'users', user.uid);

			try {
				setDoc(docRef, {
					name: user.displayName,
					email: user.email,
					photo: user.photoURL,
				});
			} catch (error) {
				console.log(error.message);
			}
		});
	};

	const logOut = () => {
		try {
			signOut(auth);
		} catch (error) {
			console.error(error.message);
		}
	};

	const value = {
		user,
		loading,
		logInWithGoogle,
		logOut,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
