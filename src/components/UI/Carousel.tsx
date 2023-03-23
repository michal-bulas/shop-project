import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useCart } from '@/store/CartProvider';
import { db } from '@/utilities/firebase';
import { useState, useEffect, useCallback } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CarouselArrowButton from '@/components/UI/CarouselArrowButton';

interface ProductsTypes {
	id: string;
	title: string;
	author: string;
	price: number;
	year: string;
	photo: string;
	quantity: number;
}

const Carousel = () => {
	const [products, setProducts] = useState<ProductsTypes[]>([]);

	const fetchDocuments = useCallback(async () => {
		const q = query(collection(db, 'books'), orderBy('title'), limit(10));
		const querySnapshot = await getDocs(q);

		const docsData = querySnapshot.docs.map(
			(doc) => doc.data() as ProductsTypes
		);

		setProducts(docsData);
	}, []);

	useEffect(() => {
		fetchDocuments();
	}, [fetchDocuments]);

	const { addToCart } = useCart();

	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <CarouselArrowButton direction='right' />,
		prevArrow: <CarouselArrowButton direction='left' />,
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
					{products.map((product) => (
						<ImageListItem
							key={product.id}
							sx={{ p: 1, boxShadow: 1, width: 200 }}
						>
							<Image
								src={product.photo}
								alt={'Product Image'}
								width={223}
								height={334}
								style={{
									display: 'inline-block',
									verticalAlign: 'bottom',
								}}
							/>
							<ImageListItemBar
								sx={{ m: 1.01 }}
								title={product.title}
								subtitle={product.author}
								actionIcon={
									<Box
										sx={{
											color: 'rgba(255, 255, 255, 0.75)',
											display: 'flex',
											flexDirection: 'row',
											alignItems: 'center',
											m: 1,
										}}
									>
										<Typography variant={'body1'}>{product.price}</Typography>
										<IconButton
											sx={{ color: 'rgba(255, 255, 255, 0.75)' }}
											onClick={() =>
												addToCart(
													product.id,
													product.photo,
													product.title,
													product.author,
													product.price,
													product.quantity
												)
											}
										>
											<AddShoppingCartIcon />
										</IconButton>
									</Box>
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
