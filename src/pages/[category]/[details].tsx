import React from 'react';
import { Product } from '@/types/ProductTypes';
import { useCart } from '@/contexts/CartProvider';
import { db } from '@/utilities/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { NextPageContext } from 'next';
import Image from 'next/image';
import Carousel from '@/components/UI/Carousel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import { CircularProgress } from '@mui/material';

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
	const { addToCart } = useCart();

	if (!product) {
		return (
			<CircularProgress
				color='secondary'
				sx={{
					position: 'absolute',
					m: 'auto',
					left: 0,
					right: 0,
					top: -50,
					bottom: 50,
					textAlign: 'center',
				}}
			/>
		);
	}

	return (
		<Grid
			container
			spacing={0}
			sx={{ marginY: 10 }}
		>
			<Grid
				item
				xs={12}
				smd={6}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					mb: 5,
				}}
			>
				<Box
					sx={{
						boxShadow: 10,
						borderRadius: '16px',
					}}
				>
					<Image
						src={product.photo}
						alt='Product Image'
						width={400}
						height={400}
						style={{
							display: 'inline-block',
							verticalAlign: 'bottom',
							borderRadius: '16px',
							width: '100%',
							height: '100%',
						}}
					/>
				</Box>
			</Grid>

			<Grid
				item
				xs={12}
				smd={6}
				sx={{
					p: 2,
					mb: 5,

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
					{product.title}
				</Typography>
				<Typography
					variant='body1'
					sx={{ textAlign: 'justify', textJustify: 'inter-word', p: 3 }}
				>
					{product.description}
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
						<b>In Stock:</b> <br /> {product.quantity}
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
						<b>Price:</b> <br />${product.price}
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
						onClick={() => addToCart(product)}
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
					mb: 5,
					boxShadow: 5,
					borderRadius: '16px',
					color: 'white',
					bgcolor: 'primary.main',
				}}
			>
				<Typography variant='body1'>
					<b>Author: </b>
					{product.author}
				</Typography>
				<Typography
					variant='body1'
					sx={{ mr: 0.5 }}
				>
					<b>Year of publication: </b>
					{product.year}
				</Typography>
				<Typography
					variant='body1'
					sx={{ textTransform: 'capitalize' }}
				>
					<b>Category: </b>
					{product.category}
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

export const getServerSideProps = async (context: NextPageContext) => {
	const productId = context.query.details as string;
	const productDoc = doc(db, 'books', productId);
	const productSnapshot = await getDoc(productDoc);
	const productData = productSnapshot.data() as Product;

	return {
		props: {
			product: productData,
		},
	};
};

export default ProductDetails;
