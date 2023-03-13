import React, { PropsWithChildren } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const ProductCard: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Grid
			item
			xs={12}
			sm={6}
			md={4}
		>
			<Paper
				elevation={3}
				sx={{
					height: '100%',
					padding: 2,
					position: 'relative',
					':hover': {
						boxShadow: 20, // theme.shadows[20]
					},
				}}
			>
				{children}
			</Paper>
		</Grid>
	);
};

export default ProductCard;
