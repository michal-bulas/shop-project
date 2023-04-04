import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Banner: React.FC<{
	children: React.ReactNode;
	src: string;
	reverse?: boolean;
}> = ({ children, src, reverse }) => {
	return (
		<Box
			sx={{
				height: { xs: '80vh', md: '50vh' },
				width: { xs: '85%', sm: '70%', md: '100%' },
				my: 15,
				mx: 'auto',
				borderRadius: ' 16px',
				boxShadow: 20,
				display: 'flex',
				flexDirection: {
					xs: reverse ? 'column-reverse' : 'column',
					md: reverse ? 'row-reverse' : 'row',
				},
			}}
		>
			<Box
				sx={{
					width: { xs: '100%', md: '50%' },
					height: { xs: '50%', md: '100%' },
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					bgcolor: '#313131',
					borderRadius: {
						xs: reverse ? '0px 0px 16px 16px' : '16px 16px 0px 0px',
						md: reverse ? '0px 16px 16px 0px' : '16px 0px 0px 16px',
					},
				}}
			>
				<Typography
					variant='h6'
					sx={{
						color: 'white',
						textAlign: 'justify',
						px: 4,
						fontSize: { xs: '1rem', md: '1.25rem' },
					}}
				>
					{children}
				</Typography>
			</Box>

			<Box
				sx={{
					width: { xs: '100%', md: '50%' },
					height: { xs: '50%', md: '100%' },
					overflow: 'hidden',
					borderRadius: {
						xs: reverse ? '16px 16px 0px 0px' : '0px 0px 16px 16px',
						md: reverse ? '16px 0px 0px 16px' : '0px 16px 16px 0px',
					},
				}}
			>
				<Image
					src={src}
					alt='Banner Image'
					width={400}
					height={400}
					style={{
						objectFit: 'fill',
						width: '100%',
						height: '100%',
						display: 'inline-block',
						verticalAlign: 'bottom',
						borderRadius: 'inherit',
					}}
				/>
			</Box>
		</Box>
	);
};

export default Banner;
