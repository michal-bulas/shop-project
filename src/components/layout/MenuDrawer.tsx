import React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import InfoIcon from '@mui/icons-material/Info';

interface MenuDrawerProps {
	open: boolean;
	toggleMenu: () => void;
}

const drawerWidth = 240;

const MenuDrawer: React.FC<MenuDrawerProps> = ({ open, toggleMenu }) => {
	const router = useRouter();
	const showCategoryHandler = (url: string) => {
		router.push('/' + url.toLocaleLowerCase());
		toggleMenu();
	};

	const drawer = (
		<>
			<Toolbar>
				<Typography
					variant='h6'
					sx={{ align: 'center' }}
				>
					Books Categories
				</Typography>
			</Toolbar>
			<Divider sx={{ bgcolor: 'secondary.main' }} />
			<List>
				{['Science', 'Fantasy', 'Crime'].map((text) => (
					<React.Fragment key={text}>
						<ListItem
							disablePadding
							onClick={showCategoryHandler.bind(null, text)}
						>
							<ListItemButton>
								<ListItemIcon>
									<SendIcon sx={{ color: 'secondary.main' }} />
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
						<Divider variant='middle' />
					</React.Fragment>
				))}
			</List>

			<List sx={{ position: 'fixed', bottom: '0', width: '240px' }}>
				{['About Us', 'FAQs', 'Career', 'Contact Us'].map((text) => (
					<React.Fragment key={text}>
						<Divider variant='middle' />
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<InfoIcon sx={{ color: 'secondary.main' }} />
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					</React.Fragment>
				))}
			</List>
		</>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant='temporary'
					open={open}
					onClose={toggleMenu}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
							borderTopRightRadius: '16px',
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
};
export default MenuDrawer;
