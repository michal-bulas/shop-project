import React, { PropsWithChildren } from 'react';
import { auth, provider, db } from '../utilities/firebase';
import { signInWithPopup, signOut, User } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, setDoc } from 'firebase/firestore';

type AuthContextValue = {
	user: User | null | undefined;
	loading: boolean;
	logInWithGoogle: () => void;
	logOut: () => void;
};

export const AuthContext = React.createContext<AuthContextValue>({
	user: null,
	loading: false,
	logInWithGoogle: () => {},
	logOut: () => {},
});

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [user, loading] = useAuthState(auth);

	const logInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, provider);
			const user = result?.user;
			const docRef = doc(db, 'users', user?.uid);

			try {
				await setDoc(docRef, {
					name: user?.displayName,
					email: user?.email,
					photo: user?.photoURL,
				});
			} catch (error: any) {
				console.log(error.message);
			}
		} catch (error: any) {
			console.log(error.message);
		}
	};

	const logOut = () => {
		try {
			signOut(auth);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	const authContextValue: AuthContextValue = {
		user,
		loading,
		logInWithGoogle,
		logOut,
	};

	return (
		<AuthContext.Provider value={authContextValue}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
