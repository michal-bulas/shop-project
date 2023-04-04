import type { Product } from '@/types/ProductTypes';
import { NextPageContext } from 'next';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/utilities/firebase';
import { useCart } from '@/contexts/CartProvider';
import { useRouter } from 'next/router';
import ProductCard from '@/components/UI/ProductCard';
import Grid from '@mui/material/Grid';

const CategoryDetail: React.FC<{ products: Product[] }> = ({ products }) => {
	const { addToCart } = useCart();
	const router = useRouter();

	const showDetailsHandler = (url: string) => {
		router.push('/product/' + url);
	};

	return (
		<Grid
			container
			justifyContent={'center'}
			spacing={4}
			sx={{ marginY: 7 }}
		>
			{products.map((product) => (
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					key={product.id}
				>
					<ProductCard
						photo={product.photo}
						title={product.title}
						author={product.author}
						year={product.year}
						price={product.price}
						onShowDetail={showDetailsHandler.bind(null, product.id)}
						onAddCart={() => {
							addToCart(product);
						}}
					></ProductCard>
				</Grid>
			))}
		</Grid>
	);
};

export const getServerSideProps = async (context: NextPageContext) => {
	const productsCategory = context.query.category;
	const q = query(
		collection(db, 'books'),
		where('category', '==', productsCategory)
	);

	const productsSnapshot = await getDocs(q);

	const newProducts = productsSnapshot.docs.map((doc) => doc.data() as Product);

	return {
		props: {
			products: newProducts,
		},
	};
};

export default CategoryDetail;
