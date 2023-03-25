import { useCallback, useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/utilities/firebase';
import { useCart } from '@/Contexts/CartProvider';
import { useRouter } from 'next/router';
import ProductCard from '@/components/UI/ProductCard';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

interface ProductsTypes {
	id: string;
	title: string;
	author: string;
	price: number;
	year: string;
	photo: string;
	quantity: number;
}

const CategoryDetail: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [products, setProducts] = useState<ProductsTypes[]>([]);
	const { addToCart } = useCart();
	const router = useRouter();
	const productsCategory = router.query.category as string;

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
			setIsLoading(false);
		}
	}, [productsCategory]);

	useEffect(() => {
		getProducts();
	}, [getProducts]);

	const showDetailsHandler = (url: string) => {
		router.push('/product/' + url);
	};

	return (
		<Grid
			container
			justifyContent={'center'}
			spacing={4}
			sx={{ marginY: 10 }}
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
							addToCart(
								product.id,
								product.photo,
								product.title,
								product.author,
								product.price,
								product.quantity
							);
						}}
					></ProductCard>
				</Grid>
			))}
		</Grid>
	);
};

export default CategoryDetail;
