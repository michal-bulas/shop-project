import React, { PropsWithChildren, createContext, useContext } from 'react';
import type { AuthContextValue } from '../types/AuthTypes';
import { auth, provider, db } from '../utilities/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, setDoc } from 'firebase/firestore';

const AuthContext = createContext({} as AuthContextValue);

export const useAuth = () => {
	return useContext(AuthContext);
};

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
