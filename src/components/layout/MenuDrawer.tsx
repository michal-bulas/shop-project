import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from 'next/router';

interface MenuDrawerProps {
	open: boolean;
	toggleMenu: () => void;
}

const drawerWidth = 240;

const MenuDrawer: React.FC<MenuDrawerProps> = (props) => {
	const router = useRouter();
	const showCategoryHandler = (url: string) => {
		router.push('/' + url.toLocaleLowerCase());
		props.toggleMenu();
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
			<Divider />
			<List>
				{['Science', 'Fantasy', 'Crime'].map((text) => (
					<>
						<ListItem
							key={text}
							disablePadding
							onClick={showCategoryHandler.bind(null, text)}
						>
							<ListItemButton>
								<ListItemIcon>
									<SendIcon />
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
						<Divider variant='middle' />
					</>
				))}
			</List>

			<List sx={{ position: 'fixed', bottom: '0', width: '240px' }}>
				<ListItem
					disablePadding
					key='AboutUs'
				>
					<ListItemButton>
						<ListItemIcon>
							<InfoIcon />
						</ListItemIcon>
						<ListItemText primary='About us' />
					</ListItemButton>
				</ListItem>
				<Divider variant='middle' />

				<ListItem
					disablePadding
					key='Contact'
				>
					<ListItemButton>
						<ListItemIcon>
							<CallIcon />
						</ListItemIcon>
						<ListItemText primary='Contact' />
					</ListItemButton>
				</ListItem>
			</List>
		</>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant='temporary'
					open={props.open}
					onClose={props.toggleMenu}
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
