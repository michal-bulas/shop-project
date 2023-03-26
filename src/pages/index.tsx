import Carousel from '@/components/UI/Carousel';
import MainPageCategories from '@/components/MainPageComponents/Categories';
import Banner from '@/components/MainPageComponents/Banner';
import { Box } from '@mui/material';

export default function Home() {
	return (
		<>
			<MainPageCategories />
			<Banner
				reverse={true}
				src='https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Fmain%2FBanner-img.jpg?alt=media&token=1086dd29-121b-49f3-818f-e14b317af5c4'
			>
				Welcome to our bookshop, where you can lose yourself in the endless
				pages of your next favorite read. Our carefully curated selection
				includes everything from science literature to the latest bestsellers,
				ensuring there is something for every taste.
			</Banner>

			<Carousel />

			<Banner src='https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Fmain%2FBanner-sale.jpeg?alt=media&token=7bcce5ec-664b-4d11-954d-7a35d7c013d5'>
				Hurry in and stock up on your favorite reads at our exciting book sale!
				With discounts of up to 50% off, it is the perfect time to indulge in
				some guilt-free book shopping. Do not miss out on this opportunity to
				expand your book collection without breaking the bank!
			</Banner>
		</>
	);
}
