import { User } from 'firebase/auth';

export interface AuthContextValue {
	user: User | null | undefined;
	loading: boolean;
	logInWithGoogle: () => void;
	logOut: () => void;
}
