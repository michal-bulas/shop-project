import Carousel from '@/components/UI/Carousel';
import Head from 'next/head';
// import { AuthContext } from '../store/AuthProvider';
// import { useContext, useEffect } from 'react';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { db } from '@/utilities/firebase';
// import { doc, getDoc, getDocs, collection } from 'firebase/firestore';

export default function Home() {
	// const authCtx = useContext(AuthContext);

	// useEffect(() => {
	// 	console.log(authCtx.user);
	// }, [authCtx.user]);

	// const getProducts = async () => {
	// 	const q = query(collection(db, 'books'));
	// 	const querySnapshot = await getDocs(q);
	// 	querySnapshot.forEach((doc) => {
	// 		// doc.data() is never undefined for query doc snapshots
	// 		console.log(doc.data().title);
	// 	});
	// };
	// const getProducts = async () => {
	// 	const productsSnap = await getDocs(collection(db, 'products'));
	// 	productsSnap.forEach((product) => {
	// 		console.log(product.data());
	// 	});
	// };

	// const getProductById = async (id: string) => {
	// 	const productsDoc = doc(db, 'books', id);
	// 	const productsSnap = await getDoc(productsDoc);
	// 	console.log(productsSnap.data());
	// };

	// useEffect(() => {
	// 	getProductById('SbO69CbJ6q9QOhAIJw66');

	// 	getProducts();
	// }, []);

	return (
		<>
			<Head>
				<title>Shop App Project</title>
				<meta
					name='description'
					content='Shop App Project'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/shopping-cart.ico'
				/>
			</Head>
		</>
	);
}
