import Head from 'next/head';
// import { db } from '../utilities/firebase';
import AuthProvider, { AuthContext } from '../store/firebase/AuthProvider';
// import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { useContext, useEffect } from 'react';

export default function Home() {
	const authCtx = useContext(AuthContext);
	const logInHandler = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		authCtx.logInWithGoogle();
	};

	const logOutHandler = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		authCtx.logOut();
	};

	useEffect(() => {
		console.log(authCtx.user);
	}, [authCtx.user, authCtx.loading]);

	// const getProducts = async () => {
	// 	const productsSnap = await getDocs(collection(db, 'products'));
	// 	productsSnap.forEach((product) => {
	// 		console.log(product.data());
	// 	});
	// };

	// const getProductById = async (id: string) => {
	// 	const productsDoc = doc(db, 'products', id);
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
			<AuthProvider>
				<main>
					{authCtx.user ? (
						<button onClick={logOutHandler}>logout</button>
					) : (
						<button onClick={logInHandler}>login</button>
					)}
				</main>
			</AuthProvider>
		</>
	);
}
