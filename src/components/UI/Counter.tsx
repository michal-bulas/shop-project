import { useCart } from '@/Contexts/CartProvider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

interface CounterTypes {
	cartItemQuantity: number;
	itemId: string;
}

const Counter = ({ cartItemQuantity, itemId }: CounterTypes) => {
	const { increaseCartQuantity, decreaseCartQuantity } = useCart();

	return (
		<ButtonGroup
			size='small'
			variant='contained'
		>
			<Button
				onClick={() => {
					decreaseCartQuantity(itemId);
				}}
			>
				−
			</Button>

			<Typography
				sx={{
					width: '3rem',
					bgcolor: 'white',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{cartItemQuantity ? cartItemQuantity : 0}
			</Typography>

			<Button
				onClick={() => {
					increaseCartQuantity(itemId);
				}}
			>
				+
			</Button>
		</ButtonGroup>
	);
};

export default Counter;
