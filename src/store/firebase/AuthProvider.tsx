import React, { PropsWithChildren } from 'react';
import { auth, provider, db } from '../../utilities/firebase';
import { signInWithPopup, signOut, User } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, setDoc } from 'firebase/firestore';

type AuthValueType = {
	user: User | null | undefined;
	loading: boolean;
	logInWithGoogle: () => void;
	logOut: () => void;
};

export const AuthContext = React.createContext<AuthValueType>({
	user: null,
	loading: false,
	logInWithGoogle: () => {},
	logOut: () => {},
});

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [user, loading] = useAuthState(auth);

	const logInWithGoogle = () => {
		signInWithPopup(auth, provider).then((result) => {
			const user = result.user;
			const docRef = doc(db, 'users', user.uid);

			try {
				setDoc(docRef, {
					name: user.displayName,
					email: user.email,
					photo: user.photoURL,
				});
			} catch (error: any) {
				console.log(error.message);
			}
		});
	};

	const logOut = () => {
		try {
			signOut(auth);
		} catch (error: any) {
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
