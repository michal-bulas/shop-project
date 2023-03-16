import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowButton from '@/components/UI/ArrowButton';

const itemData = [
	{
		img: "https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Ffantasy%2FHarry%20Potter%20and%20the%20Philosopher's%20Stone.jpg?alt=media&token=3fe08a73-7f1d-4c11-abef-8262c4d72eb6",
	},
	{
		img: "https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Ffantasy%2FHarry%20Potter%20and%20the%20Philosopher's%20Stone.jpg?alt=media&token=3fe08a73-7f1d-4c11-abef-8262c4d72eb6",
	},
	{
		img: "https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Ffantasy%2FHarry%20Potter%20and%20the%20Philosopher's%20Stone.jpg?alt=media&token=3fe08a73-7f1d-4c11-abef-8262c4d72eb6",
	},
	{
		img: "https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Ffantasy%2FHarry%20Potter%20and%20the%20Philosopher's%20Stone.jpg?alt=media&token=3fe08a73-7f1d-4c11-abef-8262c4d72eb6",
	},
	{
		img: "https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Ffantasy%2FHarry%20Potter%20and%20the%20Philosopher's%20Stone.jpg?alt=media&token=3fe08a73-7f1d-4c11-abef-8262c4d72eb6",
	},
	{
		img: "https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Ffantasy%2FHarry%20Potter%20and%20the%20Philosopher's%20Stone.jpg?alt=media&token=3fe08a73-7f1d-4c11-abef-8262c4d72eb6",
	},
	{
		img: "https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Ffantasy%2FHarry%20Potter%20and%20the%20Philosopher's%20Stone.jpg?alt=media&token=3fe08a73-7f1d-4c11-abef-8262c4d72eb6",
	},
	{
		img: "https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Ffantasy%2FHarry%20Potter%20and%20the%20Philosopher's%20Stone.jpg?alt=media&token=3fe08a73-7f1d-4c11-abef-8262c4d72eb6",
	},
	{
		img: "https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Ffantasy%2FHarry%20Potter%20and%20the%20Philosopher's%20Stone.jpg?alt=media&token=3fe08a73-7f1d-4c11-abef-8262c4d72eb6",
	},
];

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <ArrowButton direction='right' />,
		prevArrow: <ArrowButton direction='left' />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<Typography
				variant='h4'
				sx={{ textAlign: 'center', my: 4 }}
			>
				Trending Now
			</Typography>
			<Box sx={{ boxShadow: 20 }}>
				<Slider {...settings}>
					{itemData.map((item, index) => (
						<ImageListItem
							key={index}
							sx={{ p: 1, boxShadow: 1 }}
						>
							<img
								src={item.img}
								alt={'Product Image'}
								style={{
									display: 'inline-block',
									verticalAlign: 'bottom',
								}}
							/>
							<ImageListItemBar
								sx={{ m: 1 }}
								title={'Harry Potter and the Philosophers Stone'}
								subtitle={'J.K. Rowling'}
								actionIcon={
									<IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)', m: 1 }}>
										<Typography
											variant={'body1'}
											sx={{ mr: 1 }}
										>
											Price
										</Typography>
										<AddShoppingCartIcon />
									</IconButton>
								}
							/>
						</ImageListItem>
					))}
				</Slider>
			</Box>
		</>
	);
};

export default Carousel;
