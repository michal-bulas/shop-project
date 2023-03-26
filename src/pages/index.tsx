import Carousel from '@/components/UI/Carousel';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
	return (
		<>
			<Box
				sx={{
					height: '80vh',
					display: 'flex',
					flexDirection: 'row',
					mx: 5,
					my: 6,
				}}
			>
				<Box
					sx={{
						width: '50%',
						height: '100%',
						p: 5,
						pb: 6,
						boxShadow: '10px 11px 40px 6px rgba(66, 68, 90, 1)',
						borderRadius: '8px 16px 16px 8px',
					}}
				>
					<Image
						src={
							'https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Fmain%2Fscience.webp?alt=media&token=7c77321c-222f-472a-b1fb-4700d1c3ed26'
						}
						alt='image'
						width={400}
						height={400}
						style={{
							objectFit: 'cover',
							width: '100%',
							height: '100%',
							display: 'inline-block',
							verticalAlign: 'bottom',
							borderRadius: '8px',
						}}
					/>
				</Box>
				<Box
					sx={{
						width: '50%',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						p: 5,
						boxShadow: '-10px 12px 40px 6px rgba(66, 68, 90, 1)',
						borderRadius: '16px 8px 8px 16px',
					}}
				>
					<Box
						sx={{
							width: '100%',
							height: '50%',
							position: 'relative',
							boxShadow: 15,
							borderRadius: '8px',
							mb: 1,
						}}
					>
						<Image
							src='https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Fmain%2Fcrime.jpeg?alt=media&token=bea8448d-a097-422f-8add-153c82dc0fd5'
							alt='image'
							width={300}
							height={300}
							style={{
								objectFit: 'cover',
								width: '100%',
								height: '100%',
								display: 'inline-block',
								verticalAlign: 'bottom',
								borderRadius: '8px',
							}}
						/>
						<Typography
							variant='h4'
							color='info.main'
							sx={{
								fontWeight: 'bold',
								position: 'absolute',
								bottom: 5,
								left: 15,
							}}
						>
							Crime
						</Typography>
					</Box>
					<Box
						sx={{
							width: '100%',
							height: '50%',
							position: 'relative',
							boxShadow: 15,
							borderRadius: '8px',
							mb: 1,
						}}
					>
						<Image
							src='https://firebasestorage.googleapis.com/v0/b/shop-project-51550.appspot.com/o/booksImage%2Fmain%2Ffantasy.jpg?alt=media&token=4ce49050-7f9c-4339-9890-5f3428a153a7'
							alt='image'
							width={300}
							height={300}
							style={{
								objectFit: 'cover',
								width: '100%',
								height: '100%',
								display: 'inline-block',
								verticalAlign: 'bottom',
								borderRadius: '8px',
							}}
						/>
						<Typography
							variant='h4'
							color='info.main'
							sx={{
								fontWeight: 'bold',
								position: 'absolute',
								bottom: 5,
								left: 15,
							}}
						>
							Fantasy
						</Typography>
					</Box>
				</Box>
			</Box>
			<Carousel />
		</>
	);
}
