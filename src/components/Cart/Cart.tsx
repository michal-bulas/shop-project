import { useCart } from '@/Contexts/CartProvider';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import CartItem from './CartItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CartProps {
	open: boolean;
	toggleCart: () => void;
}

const cartStyle = {
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: { xs: '95%', sm: '85%', md: '70%', lg: '60%' },
	minHeight: '50%',
	maxHeight: '85%',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	overflow: 'auto',
	boxShadow: 24,
	px: 4,
	pt: 2,
};

const Cart: React.FC<CartProps> = ({ open, toggleCart }) => {
	const { cartItems } = useCart();
	return (
		<Modal
			open={open}
			onClose={toggleCart}
		>
			<Box sx={cartStyle}>
				{cartItems[0] ? (
					<List>
						{cartItems.map((item) => (
							<CartItem
								key={item.id}
								{...item}
							/>
						))}
					</List>
				) : (
					<Typography
						variant='h6'
						sx={{ textAlign: 'center', mt: '15%' }}
					>
						Cart Empty <br /> Add some books
					</Typography>
				)}
				<Box
					sx={{
						position: 'sticky',
						bottom: 0,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						mt: 'auto',
					}}
				>
					<Button
						size='small'
						color='secondary'
						variant='contained'
						onClick={toggleCart}
					>
						Close
					</Button>
					<Box
						sx={{
							width: '30%',
							height: 50,
							bgcolor: 'black',
							color: 'white',
							borderRadius: '16px 16px 0 0',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							mx: 1,
						}}
					>
						<Typography
							variant='body2'
							sx={{ mx: 1 }}
						>
							Total: $
							{cartItems
								.reduce(
									(sum, item) => sum + item.price * item.cartItemQuantity,
									0
								)
								.toFixed(2)}
						</Typography>
					</Box>
					<Button
						size='small'
						variant='contained'
						color='success'
					>
						Order
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

export default Cart;
