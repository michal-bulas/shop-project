import { useCallback, useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/utilities/firebase';
import { useRouter } from 'next/router';
import ProductCard from '@/components/UI/ProductCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
			setIsLoading(false);
		}
	}, [productsCategory]);

	useEffect(() => {
		getProducts();
	}, [getProducts]);

	return (
		<Container>
			{isLoading ? (
				<Grid
					container
					justifyContent={'center'}
					spacing={8}
				>
					{Array.from(Array(9).keys()).map((item) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							key={item}
						>
							<Skeleton
								variant='rectangular'
								height={375}
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
					justifyContent={'center'}
					spacing={8}
					sx={{ marginY: 10 }}
				>
					{products.map((product) => (
						<ProductCard key={product.id}>
							<img
								src={product.photo}
								alt='Book Image'
								style={{ width: '100%', height: '80%' }}
							/>

							<Typography
								variant={'h6'}
								sx={{ marginLeft: 1 }}
							>
								{product.title}
							</Typography>

							<Typography
								variant={'subtitle2'}
								sx={{ marginLeft: 1 }}
							>
								{`${product.author}, ${product.year}`}
							</Typography>
							<div
								style={{
									display: 'flex',
									width: '100%',
									boxSizing: 'content-box',
									position: 'absolute',
									justifyContent: 'end',
									bottom: 3,
									right: 3,
								}}
							>
								<Typography
									variant={'subtitle2'}
									sx={{
										marginLeft: 1,
										marginTop: 1,
									}}
								>
									{` $${product.price}`}
								</Typography>

								<IconButton
									color='primary'
									aria-label='add to shopping cart'
								>
									<AddShoppingCartIcon />
								</IconButton>
							</div>
						</ProductCard>
					))}
				</Grid>
			)}
		</Container>
	);
};

export default CategoryDetail;
