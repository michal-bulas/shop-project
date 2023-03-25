import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import { Box, IconButton, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
	return (
		<>
			<Toolbar
				sx={{
					bgcolor: 'primary.main',
					width: '100%',
					marginTop: 'auto',
					display: 'flex',
					flexDirection: 'column',
					color: 'info.main',
				}}
			>
				<Typography
					variant='h6'
					sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}
				>
					Newsletter
				</Typography>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						mb: 5,
					}}
				>
					<TextField
						color='info'
						label='E-mail'
						variant='standard'
						size='small'
						sx={{
							display: 'block',
							ml: 4,
							input: { color: 'whitesmoke' },
							label: { color: 'black' },
						}}
					/>
					<IconButton>
						<SendIcon color='secondary' />
					</IconButton>
				</Box>
			</Toolbar>
			<Toolbar
				sx={{
					bgcolor: '#313131',
					color: 'white',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Typography
					variant='body2'
					sx={{ m: 1 }}
				>
					About Us
				</Typography>
				<Typography
					variant='body2'
					sx={{ m: 1 }}
				>
					FAQs
				</Typography>
				<Typography
					variant='body2'
					sx={{ m: 1 }}
				>
					Career
				</Typography>
				<Typography
					variant='body2'
					sx={{ m: 1 }}
				>
					Contact Us
				</Typography>
			</Toolbar>
		</>
	);
};

export default Footer;
