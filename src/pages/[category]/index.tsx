import { useCallback, useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/utilities/firebase';
import { useCart } from '@/Contexts/CartProvider';
import { useRouter } from 'next/router';
import ProductCard from '@/components/UI/ProductCard';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import type { Product } from './types';
import { NextPageContext } from 'next';

const CategoryDetail: React.FC<{ products: Product[] }> = ({ products }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { addToCart } = useCart();
	const router = useRouter();

	useEffect(() => {
		setIsLoading(!products)
	}, [products])

	const showDetailsHandler = (url: string) => {
		router.push('/product/' + url);
	};

	return (
		<Grid
			container
			justifyContent={'center'}
			spacing={4}
			sx={{ marginY: 7 }}
		>
			{isLoading &&
				Array.from(Array(9).keys()).map((item) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={item}
						justifyContent='center'
					>
						<Skeleton
							variant='rectangular'
							height={480}
						/>
						<Skeleton
							variant='text'
							height={30}
							width='80%'
						/>
						<Skeleton
							variant='text'
							height={20}
							width='60%'
						/>
					</Grid>
				))}

			{products.map((product) => (
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					key={product.id}
				>
					<ProductCard
						photo={product.photo}
						title={product.title}
						author={product.author}
						year={product.year}
						price={product.price}
						onShowDetail={showDetailsHandler.bind(null, product.id)}
						onAddCart={() => {
							addToCart(product);
						}}
					></ProductCard>
				</Grid>
			))}
		</Grid>
	);
};

export const getServerSideProps = async (context: NextPageContext) => {
	const productsCategory = context.query.category
	const q = query(
		collection(db, 'books'),
		where('category', '==', productsCategory)
	);

	const productsSnapshot = await getDocs(q);

	const newProducts = productsSnapshot.docs.map(
		(doc) => doc.data() as Product
	);

	return {
		props: {
			products: newProducts
		}
	}
}

export default CategoryDetail;
