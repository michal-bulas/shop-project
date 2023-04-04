import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Divider from '@mui/material/Divider';

interface ProductCardProps {
	author: string;
	price: number;
	title: string;
	year: string;
	photo: string;
	onShowDetail: () => void;
	onAddCart: () => void;
}
const ProductCard: React.FC<ProductCardProps> = (props) => {
	return (
		<>
			<Card
				raised={true}
				sx={{
					height: '540px',
					border: '1px solid #CCC',
					borderRadius: '16px',
					':hover': {
						boxShadow: 20, // theme.shadows[20]
					},
				}}
			>
				<CardActionArea
					onClick={props.onShowDetail}
					sx={{
						height: '90%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
					}}
				>
					<CardMedia
						component='img'
						image={props.photo}
						alt='Book Image'
						height='75%'
						sx={{
							objectFit: 'contain',
							boxShadow: 3,
							backgroundColor: 'white',
						}}
					/>

					<CardContent
						sx={{
							textAlign: 'left',
							width: '100%',
						}}
					>
						<Typography variant={'h6'}>{props.title}</Typography>

						<Typography variant={'subtitle2'}>
							{`${props.author}, ${props.year}`}
						</Typography>
					</CardContent>
				</CardActionArea>
				<Divider />
				<CardActionArea
					onClick={props.onAddCart}
					sx={{
						width: '100%',
						height: '10%',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
					}}
				>
					<Typography variant={'subtitle2'}>${props.price}</Typography>
					<AddShoppingCartIcon sx={{ margin: '4px' }} />
				</CardActionArea>
			</Card>
		</>
	);
};

export default ProductCard;
