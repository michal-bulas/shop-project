import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {initializeApp} from 'firebase/app';
import {GoogleAuthProvider, getAuth, signInWithPopup} from '@firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAH_OKfAypB7sTMxWx1-8ksJqkrXru1Cyo',
	authDomain: 'shop-project-51550.firebaseapp.com',
	projectId: 'shop-project-51550',
	storageBucket: 'shop-project-51550.appspot.com',
	messagingSenderId: '286876882535',
	appId: '1:286876882535:web:77c59db750922307c626c2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore(app);

console.log(app);

export default function App({Component, pageProps}: AppProps) {
	return <Component {...pageProps} />;
}
