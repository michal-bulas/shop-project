import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Props {
	window?: () => Window;
}

const ScrollTop: React.FC<Props> = ({ window }) => {
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = (
			(event.target as HTMLDivElement).ownerDocument || document
		).querySelector('#back-to-top-anchor');

		if (anchor) {
			anchor.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
	};

	return (
		<Zoom in={trigger}>
			<Box
				onClick={handleClick}
				role='presentation'
				sx={{ position: 'fixed', bottom: 16, right: 16 }}
			>
				<Fab
					size='medium'
					aria-label='scroll back to top'
					sx={{
						bgcolor: 'black',
						color: 'white',
					}}
				>
					<KeyboardArrowUpIcon />
				</Fab>
			</Box>
		</Zoom>
	);
};

export default ScrollTop;
