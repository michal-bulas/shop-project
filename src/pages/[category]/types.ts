import { User } from 'firebase/auth';

export interface Product {
	category: string;
	defaultCurrency: string;
	description: string;
	price: number;
	quantity: number;
	title: string;
	year: string;
	id: string;
	photo: string;
	author: string;
}

export interface AuthContextValue {
	user: User | null | undefined;
	loading: boolean;
	logInWithGoogle: () => void;
	logOut: () => void;
}