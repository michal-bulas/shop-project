import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const Counter = (props: { quantity: number }) => {
	const [counter, setCounter] = useState<number>(1);

	const incrementHandler = () => {
		if (counter > 1) {
			setCounter((prev) => prev - 1);
		}
	};
	const decrementHandler = () => {
		if (counter < props.quantity) {
			setCounter((prev) => prev + 1);
		}
	};

	return (
		<ButtonGroup
			size='small'
			variant='contained'
		>
			<Button onClick={incrementHandler}>−</Button>

			<Box
				sx={{
					width: '3rem',
					bgcolor: 'white',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{counter}
			</Box>

			<Button onClick={decrementHandler}>+</Button>
		</ButtonGroup>
	);
};

export default Counter;
