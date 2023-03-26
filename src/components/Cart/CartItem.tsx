import { useCart } from '@/Contexts/CartProvider';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Counter from './Counter';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

interface CartItemTypes {
	id: string;
	photo: string;
	title: string;
	author: string;
	price: number;
	cartItemQuantity: number;
}

const CartItem = ({
	id,
	photo,
	title,
	author,
	price,
	cartItemQuantity,
}: CartItemTypes) => {
	const { removeFromCart } = useCart();
	const router = useRouter();

	const showDetailsHandler = (url: string) => {
		router.push('/product/' + url);
	};
	return (
		<ListItem sx={{ boxShadow: 5, mb: 2 }}>
			<Grid
				container
				gap={0}
				sx={{
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis',
					overflow: 'hidden',
				}}
			>
				<Grid
					item
					xs={12}
					ssm={6}
					sx={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{
							marginRight: 1.5,

							':hover': { cursor: 'pointer' },
						}}
					>
						<Image
							src={photo}
							alt='Book Image'
							width={70}
							height={100}
							onClick={showDetailsHandler.bind(null, id)}
							style={{
								display: 'inline-block',
								verticalAlign: 'bottom',
							}}
						/>
					</Box>
					<Box sx={{}}>
						<Typography
							component='span'
							variant='body1'
							onClick={showDetailsHandler.bind(null, id)}
							sx={{
								display: 'block',
								':hover': { cursor: 'pointer', textDecoration: 'underline' },
							}}
						>
							{title}
						</Typography>
						<Typography
							component='span'
							variant='body2'
							sx={{ display: 'block' }}
						>
							{author}
						</Typography>
						<Typography
							component='span'
							variant='caption'
							sx={{ display: 'block' }}
						>
							${price}
						</Typography>
						<Typography
							color='error'
							component='span'
							variant='caption'
							onClick={() => removeFromCart(id)}
							sx={{
								display: 'block',
								':hover': { cursor: 'pointer', textDecoration: 'underline' },
							}}
						>
							Remove
						</Typography>
					</Box>
				</Grid>
				<Divider sx={{ my: 1, width: '100%', display: { ssm: 'none' } }} />
				<Grid
					item
					xs={12}
					ssm={6}
					sx={{
						my: 1,
						display: 'flex',
						alignItems: { xs: 'center', ssm: 'flex-end' },
						alignSelf: 'flex-end',
						flexDirection: 'column',
					}}
				>
					<Box>
						<Counter
							itemId={id}
							cartItemQuantity={cartItemQuantity}
						/>
					</Box>
				</Grid>
			</Grid>
		</ListItem>
	);
};

export default CartItem;
