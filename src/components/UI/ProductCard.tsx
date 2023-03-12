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
			<Paper elevation={3}>{children}</Paper>
		</Grid>
	);
};

export default ProductCard;
