import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Product } from '@/types/ProductTypes';
import { ProductsTypes } from '@/types/CarouselTypes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCart } from '@/contexts/CartProvider';
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

const Carousel = () => {
	const [products, setProducts] = useState<ProductsTypes[]>([]);
	const router = useRouter();

	const showDetailsHandler = (url: string) => {
		router.push('/product/' + url);
	};

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
		infinite: true,
		autoplay: true,
		variableWidth: true,
		autoplaySpeed: 3000,
		speed: 500,
		rows: 1,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 2,
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
			<Box sx={{ boxShadow: 20, mb: 5 }}>
				<Slider {...settings}>
					{products.map((product) => (
						<ImageListItem
							key={product.id}
							sx={{
								p: 1,
								boxShadow: 1,
								width: 200,
								textAlign: 'center',
								':hover': { cursor: 'pointer' },
							}}
						>
							<Image
								src={product.photo}
								alt={'Product Image'}
								width={223}
								height={334}
								onClick={showDetailsHandler.bind(null, product.id)}
								style={{
									display: 'inline-block',
									verticalAlign: 'bottom',
								}}
							/>
							<ImageListItemBar
								sx={{
									m: 1.01,
									textAlign: 'left',
									':hover': { cursor: 'default' },
								}}
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
											onClick={() => addToCart(product as Product)}
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
