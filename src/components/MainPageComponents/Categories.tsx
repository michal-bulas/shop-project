import ImageCard from '@/components/MainPageComponents/ImageCard';
import Box from '@mui/material/Box';

const MainPageCategories = () => {
	return (
		<>
			<Box
				sx={{
					height: '80vh',
					width: '100%',
					display: { xs: 'none', md: 'flex' },
					flexDirection: 'row',
					mt: 7,
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						width: '50%',
						height: '100%',
						p: 5,
						boxShadow: '10px 12px 40px 6px rgba(66, 68, 90, 1)',
						borderRadius: '8px 16px 16px 8px',
					}}
				>
					<ImageCard
						category='science'
						size='100'
						src='https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Fmain%2Fscience.webp?alt=media&token=7c77321c-222f-472a-b1fb-4700d1c3ed26'
					/>
				</Box>
				<Box
					sx={{
						width: '50%',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						p: 5,

						boxShadow: '-10px 12px 40px 6px rgba(66, 68, 90, 1)',
						borderRadius: '16px 8px 8px 16px',
					}}
				>
					<ImageCard
						category='crime'
						size='45'
						src='https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Fmain%2Fcrime.jpeg?alt=media&token=bea8448d-a097-422f-8add-153c82dc0fd5'
					/>

					<ImageCard
						category='fantasy'
						size='45'
						src='https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Fmain%2Ffantasy.jpg?alt=media&token=4ce49050-7f9c-4339-9890-5f3428a153a7'
					/>
				</Box>
			</Box>

			<Box
				sx={{
					height: '80vh',
					width: '100%',
					display: { xs: 'flex', md: 'none' },
					flexDirection: 'column',
					my: 6,
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<ImageCard
					category='science'
					size='30'
					src='https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Fmain%2Fscience.webp?alt=media&token=7c77321c-222f-472a-b1fb-4700d1c3ed26'
				/>

				<ImageCard
					category='crime'
					size='30'
					src='https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Fmain%2Fcrime.jpeg?alt=media&token=bea8448d-a097-422f-8add-153c82dc0fd5'
				/>

				<ImageCard
					category='fantasy'
					size='30'
					src='https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Fmain%2Ffantasy.jpg?alt=media&token=4ce49050-7f9c-4339-9890-5f3428a153a7'
				/>
			</Box>
		</>
	);
};

export default MainPageCategories;
