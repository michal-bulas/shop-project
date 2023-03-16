import React, { useCallback, useState, useEffect } from 'react';
import { db } from '@/utilities/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Counter from '@/components/UI/Counter';
import Carousel from '@/components/UI/Carousel';

interface ProductTypes {
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
const ProductDetails: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [product, setProduct] = useState<ProductTypes>();

	const router = useRouter();
	const productId = router.query.details as string;

	const getProduct = useCallback(async () => {
		setIsLoading(true);
		if (productId) {
			const productDoc = doc(db, 'books', productId);
			const productSnapshot = await getDoc(productDoc);
			const productData = productSnapshot.data() as ProductTypes;
			setProduct(productData);
			setIsLoading(false);
		}
	}, [productId]);

	useEffect(() => {
		getProduct();
	}, [getProduct, productId]);

	return (
		<>
			<Grid
				container
				spacing={0}
				sx={{ marginY: 15 }}
			>
				<Grid
					item
					xs={12}
					sm={6}
					md={6}
					sx={{
						p: 2,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box sx={{ boxShadow: 10, borderRadius: '16px' }}>
						<Image
							src={product?.photo ?? ''}
							alt='Product Image'
							width={267}
							height={400}
							style={{ display: 'block', borderRadius: '16px' }}
						/>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={6}
					sx={{
						p: 2,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						boxShadow: 5,
						borderRadius: '16px',
					}}
				>
					<Typography
						variant='h4'
						sx={{ textAlign: 'center', textJustify: 'inter-word' }}
					>
						{product?.title}
					</Typography>
					<Typography
						variant='body1'
						sx={{ textAlign: 'justify', textJustify: 'inter-word', p: 3 }}
					>
						{product?.description}
					</Typography>

					<Box
						sx={{
							width: '100%',
							marginY: 4,
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-evenly',
						}}
					>
						<Typography variant='body1'>
							Quantity: {product?.quantity}
						</Typography>
						<Counter quantity={product?.quantity ?? 0} />
						<Typography variant='body1'>${product?.price}</Typography>
					</Box>
					<Box
						sx={{
							width: '100%',
							marginY: 3,
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-evenly',
						}}
					>
						<Button variant='outlined'>
							ADD TO CART
							<AddShoppingCartIcon sx={{ marginLeft: 1 }} />
						</Button>
						<Button variant='contained'>CHECK OUT</Button>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-evenly',
						flexWrap: 'wrap',
						p: 2,
						mt: 3,
						boxShadow: 5,
						borderRadius: '16px',
					}}
				>
					<Typography variant='body1'>
						<Box
							component='span'
							fontWeight='fontWeightMedium'
						>
							Author:{' '}
						</Box>
						{product?.author}
					</Typography>
					<Typography variant='body1'>
						<Box
							component='span'
							fontWeight='fontWeightMedium'
						>
							Year of publication:{' '}
						</Box>
						{product?.year}
					</Typography>
					<Typography variant='body1'>
						<Box
							component='span'
							fontWeight='fontWeightMedium'
						>
							Category:{' '}
						</Box>
						{product?.category}
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{ p: 3 }}
				>
					<Divider />
					<Carousel />
				</Grid>
			</Grid>
		</>
	);
};

export default ProductDetails;
