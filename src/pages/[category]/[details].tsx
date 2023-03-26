import React, { useCallback, useState, useEffect } from 'react';
import { useCart } from '@/Contexts/CartProvider';
import { db } from '@/utilities/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Carousel from '@/components/UI/Carousel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';

interface ProductTypes {
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
const ProductDetails: React.FC = () => {
	const [product, setProduct] = useState<ProductTypes | null>(null);

	const { addToCart } = useCart();

	const router = useRouter();
	const productId = router.query.details as string;

	const getProduct = useCallback(async () => {
		if (productId) {
			const productDoc = doc(db, 'books', productId);
			const productSnapshot = await getDoc(productDoc);
			const productData = productSnapshot.data() as ProductTypes;
			setProduct(productData);
		}
	}, [productId]);

	useEffect(() => {
		getProduct();
	}, [getProduct, productId]);

	return (
		<Grid
			container
			spacing={0}
			sx={{ marginY: 10 }}
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
						textAlign: 'center',
					}}
				>
					<Typography variant='body1'>
						<b>In Stock:</b> <br /> {product?.quantity}
					</Typography>
					<Box>
						<Typography sx={{ fontWeight: 'bold' }}>Users Rating:</Typography>
						<Rating
							value={4.5}
							precision={0.5}
							readOnly
						/>
					</Box>

					<Typography variant='body1'>
						<b>Price:</b> <br />${product?.price}
					</Typography>
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
					<Button
						variant='contained'
						color='secondary'
						sx={{
							textTransform: 'none',
							border: '1px solid ',
							borderColor: 'secondary.main',
							':hover': {
								bgcolor: 'white',
								color: 'secondary.main',
							},
						}}
						onClick={() =>
							addToCart(
								product.id,
								product.photo,
								product.title,
								product.author,
								product.price,
								product.quantity
							)
						}
					>
						Add To Cart
						<AddShoppingCartIcon sx={{ marginLeft: 1 }} />
					</Button>
					<Button
						variant='contained'
						color='primary'
						sx={{
							textTransform: 'none',
							border: '1px solid ',
							borderColor: 'primary.main',
							bgcolor: 'white',
							color: 'primary.main',
							':hover': { bgcolor: 'primary.main', color: 'white' },
						}}
					>
						Add To Wishlist
					</Button>
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
					my: 5,
					boxShadow: 5,
					borderRadius: '16px',
					color: 'white',
					bgcolor: 'primary.main',
				}}
			>
				<Typography variant='body1'>
					<b>Author: </b>
					{product?.author}
				</Typography>
				<Typography
					variant='body1'
					sx={{ mr: 0.5 }}
				>
					<b>Year of publication: </b>
					{product?.year}
				</Typography>
				<Typography
					variant='body1'
					sx={{ textTransform: 'capitalize' }}
				>
					<b>Category: </b>
					{product?.category}
				</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				sx={{}}
			>
				<Divider />
				<Carousel />
			</Grid>
		</Grid>
	);
};

export default ProductDetails;
