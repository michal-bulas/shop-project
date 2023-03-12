import { useCallback, useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ProductCard from '@/components/UI/ProductCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { db } from '@/utilities/firebase';
import { useRouter } from 'next/router';
import Skeleton from '@mui/material/Skeleton';

interface ProductsTypes {
	author: string;
	category: string;
	defaultCurrency: string;
	description: string;
	price: number;
	quantity: number;
	title: string;
	year: string;
	id: string;
	photo: string;
}

const CategoryDetail: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [products, setProducts] = useState<ProductsTypes[]>([]);
	const router = useRouter();
	const productsCategory = router.query.category;

	const getProducts = useCallback(async () => {
		setIsLoading(true);
		if (productsCategory) {
			const q = query(
				collection(db, 'books'),
				where('category', '==', productsCategory)
			);

			const productsSnapshot = await getDocs(q);

			const newProducts = productsSnapshot.docs.map(
				(doc) => doc.data() as ProductsTypes
			);

			setProducts(newProducts);
		}
		setIsLoading(false);
	}, [productsCategory]);

	useEffect(() => {
		getProducts();
	}, [getProducts]);

	return (
		<>
			<Container>
				{isLoading ? (
					<Grid
						container
						spacing={8}
					>
						{Array.from(Array(8).keys()).map((item) => (
							<Grid
								item
								xs={12}
								sm={6}
								md={4}
								key={item}
							>
								<Skeleton
									variant='rectangular'
									height={300}
								/>
								<Skeleton
									variant='text'
									height={20}
									width='80%'
								/>
								<Skeleton
									variant='text'
									height={20}
									width='60%'
								/>
								<Skeleton
									variant='text'
									height={20}
									width='40%'
								/>
							</Grid>
						))}
					</Grid>
				) : (
					<Grid
						container
						spacing={8}
					>
						{products.map((product) => (
							<ProductCard key={product.id}>
								{product.title}
								<img src={product.photo} />
							</ProductCard>
						))}
					</Grid>
				)}
			</Container>
			<button onClick={getProducts}>refresh</button>
		</>
	);
};

export default CategoryDetail;
