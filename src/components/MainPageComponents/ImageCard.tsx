import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const SmallImage: React.FC<{
	category: string;
	src: string;
	size: string;
}> = ({ category, src, size }) => {
	return (
		<Box
			sx={{
				width: '100%',
				height: `${size}%`,
				position: 'relative',
				boxShadow: 15,
				borderRadius: '8px',
				':hover': { boxShadow: 15 },
			}}
		>
			<Link href={'/' + category}>
				<Image
					src={src}
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

				<Typography
					variant='h4'
					color='info.main'
					sx={{
						fontSize: { xs: '1.5rem', md: '2rem' },
						fontWeight: 'bold',
						position: 'absolute',
						bottom: 5,
						left: 15,
						textTransform: 'capitalize',
					}}
				>
					{category}
				</Typography>
			</Link>
		</Box>
	);
};

export default SmallImage;
