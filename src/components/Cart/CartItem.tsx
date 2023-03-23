import { useCart } from '@/store/CartProvider';
import Image from 'next/image';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Counter from '../UI/Counter';
import Box from '@mui/material/Box';

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
	return (
		<ListItem sx={{ boxShadow: 5, mb: 2 }}>
			<Image
				src={photo}
				alt='Book Image'
				width={70}
				height={100}
				style={{ marginRight: 10 }}
			/>
			<ListItemText
				sx={{ overflow: 'hidden' }}
				primary={title}
				secondary={
					<>
						<Typography
							component='span'
							variant='body2'
						>
							{author}
						</Typography>
						<Typography
							sx={{ display: 'block' }}
							component='span'
							variant='caption'
						>
							{price}
						</Typography>
						<Typography
							sx={{
								display: 'block',
								':hover': { cursor: 'pointer', textDecoration: 'underline' },
							}}
							color='error'
							component='span'
							variant='caption'
							onClick={() => removeFromCart(id)}
						>
							Remove
						</Typography>
					</>
				}
			/>
			<Box sx={{ position: 'absolute', bottom: 10, right: 10 }}>
				<Counter
					itemId={id}
					cartItemQuantity={cartItemQuantity}
				/>
			</Box>
		</ListItem>
	);
};

export default CartItem;
