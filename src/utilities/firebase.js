import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from '@firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAH_OKfAypB7sTMxWx1-8ksJqkrXru1Cyo',
	authDomain: 'shop-project-51550.firebaseapp.com',
	projectId: 'shop-project-51550',
	storageBucket: 'shop-project-51550.appspot.com',
	messagingSenderId: '286876882535',
	appId: '1:286876882535:web:77c59db750922307c626c2',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
